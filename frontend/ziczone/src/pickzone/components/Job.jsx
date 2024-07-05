import React from "react";


const Job = ({ job, onClick }) => {
    return (
        <div className="jobcom" onClick={onClick}>
            <p>{job.jobName}</p>
        </div>
    );
};

export default Job;