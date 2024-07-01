import React from "react";


const Job = ({ job }) => {
    return (
        <div className="jobcom">
            <p>#{job.jobName}</p>
        </div>
    );
};

export default Job;