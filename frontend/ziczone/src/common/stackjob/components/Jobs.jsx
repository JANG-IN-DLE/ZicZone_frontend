import React from 'react';
import '../styles/Job.css';
import useActiveJobs from '../hooks/useActiveJobs';


const Jobs = () => {
    const jobList = [
        "서버/백엔드", "프론트엔드", "웹 풀스택", "안드로이드",
        "QA", "게임 서버", "빅데이터", "IOS",
        "서"
    ];

    const { activeJobs, handleJobClick } = useActiveJobs(3);

    return (
        <div class="jobs">
            {jobList.map((job, index) => (
                <div 
                    key={index}
                    className={`jobcom ${activeJobs.includes(job) ? 'active' : ''}`}
                    onClick={() => handleJobClick(job)}
                >
                    {job}
                </div>
            ))}
        </div>
    );
};

export default Jobs;