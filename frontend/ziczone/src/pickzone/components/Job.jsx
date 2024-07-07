import React from "react";


const Job = ({ job, onClick, isSelected }) => {
    return (
        <div className={`jobcom ${isSelected ? 'active': ''}`} onClick={onClick}>
            <p>{job.jobName}</p>
        </div>
    );
};

export default Job;