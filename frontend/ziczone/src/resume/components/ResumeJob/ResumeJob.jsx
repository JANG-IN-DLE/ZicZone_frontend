import React, { useEffect, useRef } from "react";
import "./../../styles/ResumeJob.css";
import JobDropdown from "../ResumeDropdown/JobDropdown";
import useDropdown from './../../hooks/useDropdown';
import dropdown from "./../../assets/Dropdown.png";

const ResumeJob = ({ setJob }) => {
    const [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems] = useDropdown(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setJob(selectedItems);
    }, [selectedItems, setJob]);

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

    return (
        <div className="resume_job">
            <div className="resume_job_title">
                <p className="job_title">개발 직무</p>
                {selectedItems && selectedItems.length > 0 && (
                    <div className="selected_job_container">
                        {selectedItems.map((item, index) => (
                            <div key={index} className="selected_job">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="resume_job_select" ref={dropdownRef}>
                <div className="job_select" onClick={() => toggleDropdown(!dropdownVisible)}>
                    <span>개발 직무를 선택해주세요.</span>
                    <img src={dropdown} alt="Dropdown" />
                </div>
                {dropdownVisible && (
                    <JobDropdown 
                        selectedItems={selectedItems} 
                        updateSelectedItems={updateSelectedItems} 
                    />
                )}
            </div>
        </div>
    );
}

export default ResumeJob;