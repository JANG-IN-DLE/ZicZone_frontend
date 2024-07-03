import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Job from "./Job";
import PickCard from "../../common/card/components/PickCard";
import personalMImage from '../../common/card/assets/personal_m_image.png';
import personalFImage from '../../common/card/assets/personal_f_image.png';
import '../../common/stackjob/styles/Job.css';

function CompanyPickzone() {
    const [pickCards, setPickCards] = useState([]);
    const [jobs, setJobs] = useState([]);
    // 모달의 열림/닫힘 상태
    const[isOpen, setIsOpen] = useState(false);
    // 선택된 카드를 저장하는 상태
    const [ selectedCard, setSelectedCard ] = useState(null);
    // pickzoneDetail로 가는 hook
    const navigate = useNavigate();

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

    const handleCardClick = (card) => {
        navigate(`/pickzone/${card.personalId}`)
    };
    const handleScrap = (personalId) => {
        axios.post('/api/scrap', {personalId})
            .then(response => {
                alert('Scrap successful');
            })
            .catch(error => {
                console.error("Error scrapping card:", error);
                alert('Error scrapping card');
            });
    };

    return (
        <div>
            <h2>Jobs</h2>
            <div className="jobs">
                {jobs.map(job => (
                    <Job key={job.jobId} job={job} />
                ))}
            </div>
            <h2>Pick Cards</h2>
            <div className="user_card_container">
                {pickCards.map(card => {
                    const userImage = card.gender === 'MALE' ? personalMImage : personalFImage;
                    const jobNames = card.jobName ? card.jobName.split(',') : [];
                    const techNames = card.techName ? card.techName.split(',') : [];
                    
                    return (
                            <PickCard
                                key={card.personalId}
                                personalId={card.personalId}
                                userImage={userImage}
                                jobNames={jobNames}
                                userName={card.userName}
                                userCareer={card.personalCareer}
                                userIntro={card.userIntro}
                                techNames={techNames}
                                // 밑에 수정 필요
                                isCompanyUser={true}
                                onClick={() => handleCardClick(card)}
                                onScrap={()=> handleScrap(card.personalId)}
                            />
                    );
                    
                })}
            </div>
        </div>
    );
}
export default CompanyPickzone;
