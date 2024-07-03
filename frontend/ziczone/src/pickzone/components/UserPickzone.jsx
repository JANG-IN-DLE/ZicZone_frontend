import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Job from "./Job";
import PickCard from "../../common/card/components/PickCard";
import personalMImage from '../../common/card/assets/personal_m_image.png';
import personalFImage from '../../common/card/assets/personal_f_image.png';
import '../../common/stackjob/styles/Job.css';
import Modal from "./Modal";

function UserPickzone() {
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
        setSelectedCard(card);
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedCard(null);
    };
    const handleOpenCard = () => {
        if(selectedCard){
            navigate(`/pickzone/${selectedCard.personalId}`);
        }
    }

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
            {selectedCard && (
                <Modal 
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                    userName={selectedCard.userName}
                    onOpen={handleOpenCard}
                />
            )}

                
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
                                onClick={() => handleCardClick(card)}
                            />
                    );
                    
                })}
            </div>
        </div>
    );
}
export default UserPickzone;
