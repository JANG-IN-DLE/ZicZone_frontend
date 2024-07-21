import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../styles/JobDropdown.css';

const JobDropdown = ({ selectedItems, updateSelectedItems }) => {
    const [jobPositions, setJobPositions] = useState([]);

    // 컴포넌트가 마운트될 때 서버에서 직업 목록을 가져옵니다.
    useEffect(() => {
        axios.get('http://localhost:12000/api/jobs')
            .then(response => {
                const jobNames = response.data.map(job => job.jobName);
                setJobPositions(jobNames);
            })
            .catch(error => {
                console.error('Failed to fetch job positions:', error);
            });
    }, []); // 빈 배열을 의존성 배열로 넣어 최초 마운트 시에만 요청을 보냅니다.

    const handleCheckboxChange = (job) => {
        if (selectedItems.includes(job)) {
            // 최소 하나 이상 선택하도록 막음
            if (selectedItems.length > 1) {
                updateSelectedItems(selectedItems.filter(item => item !== job));
            } else {
                alert("최소 한 개 이상의 개발 직무를 선택하셔야 합니다.");
            }
        } else if (selectedItems.length < 3) {
            updateSelectedItems([...selectedItems, job]);
        }
    };

    return (
        <div className="job_dropdown_list">
            {jobPositions.map((job, index) => (
                <div key={index}>
                    <input
                        type='checkbox'
                        checked={selectedItems.includes(job)}
                        onChange={() => handleCheckboxChange(job)}
                    />
                    {job}
                </div>
            ))}
        </div>
    );
}

export default JobDropdown;
