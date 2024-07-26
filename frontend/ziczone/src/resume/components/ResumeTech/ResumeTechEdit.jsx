import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./../../styles/ResumeTech.css";
import TechDropdown from "./../ResumeDropdown/TechStackDropdown";
import useDropdown from './../../hooks/useDropdown';
import useFilter from "../../hooks/useFilter";
import dropdown from "./../../assets/Dropdown.png";
import config from "../../../config";

const ResumeTechEdit = ({ setTech }) => {
    const [dropdownVisible, toggleDropdown] = useDropdown(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [filter, setFilter] = useFilter("");
    const [techStacks, setTechStacks] = useState([]);
    const userId = localStorage.getItem("userId");
    const dropdownRef = useRef(null);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const techs = response.data.techStacks.map(stack => ({
                    techId: stack.tech.techId,
                    techName: stack.tech.techName,
                    techUrl: stack.tech.techUrl
                }));
                setTechStacks(techs);
                setSelectedItems(techs); // setSelectedItems 사용
            })
            .catch(error => {
                console.error("Error fetching tech stacks", error);
            });
    }, [userId]);

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
    }, []);

    const handleInputClick = (e) => {
        e.stopPropagation();
        toggleDropdown(true);
    };

    const handleTechSelect = (tech) => {
        const alreadySelected = selectedItems.some(item => item.techId === tech.techId);
        if (alreadySelected) {
            if (selectedItems.length > 1) {
                setSelectedItems(selectedItems.filter(item => item.techId !== tech.techId));
            } else {
                alert("최소 한 개 이상의 기술 스택을 선택하셔야 합니다.");
            }
        } else if (selectedItems.length < 7) {
            setSelectedItems([...selectedItems, tech]);
        }
    };

    return (
        <div className="resume_tech">
            <div className="resume_tech_title">
                <p>기술 스택</p>
                {selectedItems && selectedItems.length > 0 && (
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
                        techStacks={techStacks}
                        selectedItems={selectedItems}
                        handleTechSelect={handleTechSelect}
                        filter={filter}
                    />
                )}
            </div>
        </div>
    );
}

export default ResumeTechEdit;
