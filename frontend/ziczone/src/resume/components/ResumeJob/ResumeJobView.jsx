import React from "react";
import "./../../styles/ResumeJob.css";
import useDropdown from './../../hooks/useDropdown';

const ResumeJobView = ({jobName=[]}) => {

    return (
        <div className="resume_job">
            <div className="resume_job_title">
                <p className="job_title">개발 직무</p>
                {jobName && jobName.length > 0 && (
                    <div className="selected_job_container">
                        {jobName.map((item, index) => (
                            <div key={index} className="selected_job">
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResumeJobView;
