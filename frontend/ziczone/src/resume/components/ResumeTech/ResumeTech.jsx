import React from "react";
import "./../../styles/ResumeTech.css";
import TechDropdown from "./../ResumeDropdown/TechStackDropdown";
import useDropdown from './../../hooks/useDropdown'
import useFilter from "../../hooks/useFilter";
import dropdown from "./../../assets/Dropdown.png";

const ResumeTech = () => {
    const [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems] = useDropdown(false);
    const [filter, setFilter] = useFilter("");


    return (
        <div className="resume_tech">
            <div className="resume_tech_title">
                <p>기술 스택</p>
                {selectedItems && selectedItems.length > 0 && (
                    <div className="selected_tech_container">
                        {selectedItems.map((item, index) => (
                            <div key={index} className="selected_tech">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="resume_tech_select">
                <div className="tech_select" onClick={toggleDropdown}>
                    <input 
                    type="text" 
                    placeholder="기술 스택을 선택해주세요." 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    />
                    {/* <span>기술 스택을 선택해주세요.</span> */}
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
