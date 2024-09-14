import React, { useState, useEffect } from "react";
import "./../../styles/ResumeJob.css";
import api from '../../../common/config/axiosInstance';

const ResumeJobView = () => {
    const userId = localStorage.getItem('userId');
    const [jobNames, setJobNames] = useState([]);

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const jobPositions = response.data.jobPositions || [];
                const names = jobPositions.map(position => position.job.jobName);
                setJobNames(names);
            })
            .catch(error => {
                console.error("Failed to fetch job positions", error);
            });
    }, [userId]);

    return (
        <div className="resume_job">
            <div className="resume_job_title">
                <p className="job_title">개발 직무</p>
                {jobNames && jobNames.length > 0 && (
                    <div className="selected_job_container">
                        {jobNames.map((item, index) => (
                            <div key={index} className="selected_job">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeJobView;
