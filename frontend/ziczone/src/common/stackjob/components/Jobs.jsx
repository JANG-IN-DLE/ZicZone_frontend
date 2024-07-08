import React, {useEffect, useState} from 'react';
import '../styles/Job.css';
import useActiveJobs from '../hooks/useActiveJobs';


const Jobs = ({type}) => {
    const { jobs, activeJobs, handleJobClick } = useActiveJobs(3, type);

    return (
        <div className="jobs">
            {jobs.map((job, index) => (
                <div 
                    key={index}
                    className={`jobcom ${activeJobs.includes(job.jobId) ? 'active' : ''}`}
                    onClick={() => handleJobClick(job.jobId)}
                >
                    {job.jobName}
                </div>
            ))}
        </div>
    );
};

export default Jobs;