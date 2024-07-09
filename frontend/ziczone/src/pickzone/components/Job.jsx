import React from "react";
import PickZoneJobstyle from "../styles/PickZoneJob.module.css";


const Job = ({ job, onClick, isSelected }) => {
    return (
        <div className={`${PickZoneJobstyle.jobcom} ${isSelected ? PickZoneJobstyle.active : ''}`} onClick={onClick}>
            <p>{job.jobName}</p>
        </div>
    );
};

export default Job;