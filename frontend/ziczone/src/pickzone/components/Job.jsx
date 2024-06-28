import React from "react";


const Job = ({ job }) => {
    return (
        <div className="job-card">
            <p>{job.jobName}</p>
        </div>
    );
};

export default Job;