import React, {useEffect, useState} from "react";
import axios from 'axios';

function Pickzone() {
    const [pickCards, setPickCards] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('/api/pickcards')
            .then(response => {
                setPickCards(response.data)
            })
            .catch(error => {
                console.error('Error fetching pick cards: ' , error)
            });

            axios.get('/api/jobs')
                .then(response => {
                    setJobs(response.data);
                })
                .catch(error => {
                    console.error('Error fetching jobs: ', error)
                });
    }, []);

    return(
        <div>
            <h2>Pick Cards</h2>
            <div>
                {pickCards.map(card => (
                    <div key={card.personalId} className="pick-card">
                        <p>이름: {card.userName}</p>    
                        <p>직무: {card.jobName}</p>    
                        <p>자기소개: {card.userIntro}</p>    
                        <p>기술 스택: {card.techName}</p>    
                        <p>경력: {card.personalCareer}</p>    
                    </div>
                ))}
            </div>
            <h2>Jobs</h2>
            <div>
                {jobs.map(job => (
                    <div key={job.jobId} className="job-card">
                        <p>{job.jobName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Pickzone;