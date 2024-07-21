import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../../styles/ResumeTech.css";
import TechDropdown from "./../ResumeDropdown/TechStackDropdown";
import useDropdown from './../../hooks/useDropdown';
import useFilter from "../../hooks/useFilter";
import dropdown from "./../../assets/Dropdown.png";

const ResumeTechEdit = ({ setTech }) => {
    const [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems] = useDropdown(false);
    const [filter, setFilter] = useFilter("");
    const [techStacks, setTechStacks] = useState([]);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios.get(`/api/personal/resumes/${userId}`)
            .then(response => {
                const techs = response.data.techStacks.map(stack => stack.tech.techName);
                setTechStacks(techs);
                updateSelectedItems(techs);
            })
            .catch(error => {
                console.error("Error fetching tech stacks", error);
            });
    }, [userId]);

    useEffect(() => {
        setTech(selectedItems);
    }, [selectedItems, setTech]);

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
            <div className="resume_tech_select">
                <div className="tech_select" onClick={toggleDropdown}>
                    <input 
                    type="text" 
                    placeholder="기술 스택을 선택해주세요. (최대 7개까지 선택 가능)" 
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
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

export default ResumeTechEdit;
