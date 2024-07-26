import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../styles/JobDropdown.css';
import config from '../../../config';

const JobDropdown = ({ selectedItems, setSelectedItems }) => {
    const [jobList, setJobList] = useState([]);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get('http://localhost:12000/api/jobs')
            .then(response => {
                setJobList(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch job data:', error);
            });
    }, []);

    const handleJobSelect = (job) => {
        const alreadySelected = selectedItems.some(item => item.jobId === job.jobId);
        if (alreadySelected) {
            if (selectedItems.length > 1) {
                setSelectedItems(selectedItems.filter(item => item.jobId !== job.jobId));
            } else {
                alert("최소 한 개 이상의 개발 직무를 선택하셔야 합니다.");
            }
        } else if (selectedItems.length < 3) {
            setSelectedItems([...selectedItems, job]);
        }
    };

    return (
        <div className="job_dropdown_list">
            {jobList.map((job) => (
                <div key={job.jobId}>
                    <input
                        type="checkbox"
                        checked={selectedItems.some(item => item.jobId === job.jobId)}
                        onChange={() => handleJobSelect(job)}
                    />
                    {job.jobName}
                </div>
            ))}
        </div>
    );
}

export default JobDropdown;
