import React from "react";
import "./../../styles/ResumeJob.css";
import JobDropdown from "../ResumeDropdown/JobDropdown";
import useDropdown from './../../hooks/useDropdown';
import dropdown from "./../../assets/Dropdown.png";

const ResumeJob = () => {
    const [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems] = useDropdown(false);

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
            <div className="resume_job_select">
                <div className="job_select" onClick={toggleDropdown}>
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
