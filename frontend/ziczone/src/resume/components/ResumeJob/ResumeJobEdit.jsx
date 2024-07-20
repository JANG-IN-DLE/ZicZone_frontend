import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../../styles/ResumeJob.css";
import JobDropdown from "../ResumeDropdown/JobDropdown";
import useDropdown from './../../hooks/useDropdown';
import dropdown from "./../../assets/Dropdown.png";

const ResumeJobEdit = ({ setJob }) => {
    const [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems] = useDropdown(false);
    const [jobPositions, setJobPositions] = useState([]);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios.get(`/api/personal/resumes/${userId}`)
            .then(response => {
                const positions = response.data.jobPositions.map(position => position.job.jobName);
                setJobPositions(positions);
                // API에서 가져온 값을 selectedItems에 반영
                updateSelectedItems(positions);
            })
            .catch(error => {
                console.error("Error fetching job positions", error);
            });
    }, [userId]);

    useEffect(() => {
        setJob(selectedItems);
    }, [selectedItems, setJob]);

    return (
        <div className="resume_job">
            <div className="resume_job_title">
                <p className="job_title">개발 직무</p>
                {selectedItems && selectedItems.length > 0 && (
                    <div className="selected_job_container">
                        {selectedItems.map((job, index) => (
                            <div key={index} className="selected_job">
                                {job}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="resume_job_select">
                <div className="job_select" onClick={toggleDropdown}>
                    <span>개발 직무를 선택해주세요. (최대 3개까지 선택 가능)</span>
                    <img src={dropdown} alt="Dropdown" />
                </div>
                {dropdownVisible && (
                    <JobDropdown 
                        jobPositions={jobPositions}
                        selectedItems={selectedItems} 
                        updateSelectedItems={updateSelectedItems} 
                    />
                )}
            </div>
        </div>
    );
}

export default ResumeJobEdit;
