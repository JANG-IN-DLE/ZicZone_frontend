import React, { useEffect, useRef } from "react";
import "./../../styles/ResumeTech.css";
import TechDropdown from "./../ResumeDropdown/TechStackDropdown";
import useDropdown from './../../hooks/useDropdown';
import useFilter from "../../hooks/useFilter";
import dropdown from "./../../assets/Dropdown.png";

const ResumeTech = ({ setTech }) => {
    const [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems] = useDropdown(false);
    const [filter, setFilter] = useFilter("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        setTech(selectedItems);
    }, [selectedItems, setTech]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                toggleDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleDropdown]);

    const handleInputClick = (e) => {
        e.stopPropagation();
        toggleDropdown(true);
    };

    return (
        <div className="resume_tech">
            <div className="resume_tech_title">
                <p>기술 스택</p>
                {selectedItems.length > 0 && (
                    <div className="selected_tech_container">
                        {selectedItems.map((item, index) => (
                            <div key={index} className="selected_tech">
                                <img src={item.techUrl} alt={item.techName} title={item.techName} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="resume_tech_select" ref={dropdownRef}>
                <div className="tech_select" onClick={() => toggleDropdown(!dropdownVisible)}>
                    <input 
                        type="text" 
                        placeholder="기술 스택을 선택해주세요. (최대 7개까지 선택 가능)"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        onClick={handleInputClick}
                    />
                    <img src={dropdown} alt="Dropdown" />
                </div>
                {dropdownVisible && (
                    <TechDropdown
                        selectedItems={selectedItems}
                        updateSelectedItems={updateSelectedItems}
                        filter={filter}
                    />
                )}
            </div>
        </div>
    );
}

export default ResumeTech;