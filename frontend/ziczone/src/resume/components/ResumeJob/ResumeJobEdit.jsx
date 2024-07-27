import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./../../styles/ResumeJob.css";
import JobDropdown from "../ResumeDropdown/JobDropdown";
import useDropdown from './../../hooks/useDropdown';
import dropdown from "./../../assets/Dropdown.png";
import config from "../../../config";

const ResumeJobEdit = ({ setJob }) => {
    const [dropdownVisible, toggleDropdown] = useDropdown(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const userId = localStorage.getItem("userId");
    const dropdownRef = useRef(null);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const positions = response.data.jobPositions.map(position => ({
                    jobId: position.job.jobId,
                    jobName: position.job.jobName
                }));
                setJobPositions(positions);
                setSelectedItems(positions);
            })
            .catch(error => {
                console.error("Error fetching job positions", error);
            });
    }, [userId]);

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
                        {selectedItems.map((job) => (
                            <div key={job.jobId} className="selected_job">
                                {job.jobName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="resume_job_select" ref={dropdownRef}>
                <div className="job_select" onClick={() => toggleDropdown(!dropdownVisible)}>
                    <span>개발 직무를 선택해주세요. (최대 3개까지 선택 가능)</span>
                    <img src={dropdown} alt="Dropdown" />
                </div>
                {dropdownVisible && (
                    <JobDropdown 
                        selectedItems={selectedItems} 
                        setSelectedItems={setSelectedItems}
                    />
                )}
            </div>
        </div>
    );
}

export default ResumeJobEdit;
