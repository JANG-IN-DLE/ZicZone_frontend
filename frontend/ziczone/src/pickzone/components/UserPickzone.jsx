import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Job from "./Job";
import PickCard from "../../common/card/components/PickCard";
import personalMImage from '../../common/card/assets/personal_m_image.png';
import personalFImage from '../../common/card/assets/personal_f_image.png';
import PickZoneJobstyle from '../styles/PickZoneJob.module.css';
import Modal from "./Modal";
import PickCardCommstyle from '../../common/card/styles/PickCardComm.module.css';

function UserPickzone() {
    const [pickCards, setPickCards] = useState([]);
    const [jobs, setJobs] = useState([]);
    // 모달의 열림/닫힘 상태
    const[isOpen, setIsOpen] = useState(false);
    // 선택된 카드를 저장하는 상태
    const [ selectedCard, setSelectedCard ] = useState(null);
    // 선택된 Job을 저장하는 상태
    const [selectedJobs, setSelectedJobs] = useState([]);
    // 로그인된 회원 정보 userId (나중에 로그인 기능 되면 수정필요, 임시로 1)
    const [userId, setUserId] = useState("1");
    // pickzoneDetail로 가는 hook
    const navigate = useNavigate();
    // 현재 로그인된 personalId를 임시로 1이라고 가정
    const loggedInPersonalId = 1;

    useEffect(() => {
        axios.get(`/api/pickcards?loggedInPersonalId=${loggedInPersonalId}`)
            .then(response => {
                setPickCards(response.data)
            })
            .catch(error => {
                console.error('Error fetching pick cards: ' , error)
            });

            axios.get('/api/jobs')
                .then(response => {
                    // 맨앞에 전체 항목
                    setJobs([{ jobId: 'all', jobName: '전체' }, ...response.data]);
                })
                .catch(error => {
                    console.error('Error fetching jobs: ', error)
                });
    }, []);

    const handleCardClick = (card) => {
        if(card.payHistoryId && card.payHistoryId.length > 0){
            navigate(`/pickzone/${loggedInPersonalId}/${card.personalId}`);
        }else{
            setSelectedCard(card);
            setIsOpen(true);
        }
    };
    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedCard(null);
    };
    const handleOpenCard = () => {
        if(selectedCard){
            // 나중에 로그인된 personalId도 보내야한다.
            navigate(`/pickzone/${loggedInPersonalId}/${selectedCard.personalId}`);
        }
    };
    // Job을 선택해서 hook에 담는다.
    const handleJobClick = (job) => {
        if(job.jobName === '전체'){
            setSelectedJobs([]);
        }else{
            setSelectedJobs(prevSelectedJobs => {
                if(prevSelectedJobs.includes(job.jobName)){
                    return prevSelectedJobs.filter(j => j !== job.jobName);
                }else{
                    return [...prevSelectedJobs, job.jobName];
                }
            })
        }
    };

    // 선택된 job이 있으면 pickcard의 job과 일치하는 것 걸러서 보여줄거야
    const filteredPickCards = selectedJobs.length > 0
    ? pickCards.filter(card => { 
        return card.jobName && selectedJobs.some(job => card.jobName.split(',').includes(job));
    })
    // 각 카드가 선택된 직업과 얼마나 많이 겹치는지를 계산하여 점수화하고, 점수가 높은 순서대로 정렬합니다.
    .sort((a,b) => {
        const aMatches = a.jobName.split(',').filter(job => selectedJobs.includes(job)).length;
        const bMatches = b.jobName.split(',').filter(job => selectedJobs.includes(job)).length;
        return bMatches - aMatches;
    })
    : pickCards;

    return (
        <div>
            <h2>Jobs</h2>
            <div className={PickZoneJobstyle.jobs}>
                {jobs.map(job => (
                    <Job key={job.jobId} job={job} onClick={()=> handleJobClick(job)} isSelected={selectedJobs.includes(job.jobName)}/>
                ))}
            </div>
            <h2>Pick Cards</h2>
            <div className={PickCardCommstyle.user_card_container}>
            {selectedCard && (
                <Modal 
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                    userName={selectedCard.userName}
                    onOpen={handleOpenCard}
                    selectedCard={selectedCard}
                    userId={userId}
                />
            )}

                
                {filteredPickCards.map(card => {
                    const userImage = card.gender === 'MALE' ? personalMImage : personalFImage;
                    const jobNames = card.jobName ? card.jobName.split(',') : [];
                    const techUrls = card.techUrl ? card.techUrl.split(',') : [];
                    
                    return (
                            <PickCard
                                key={card.personalId}
                                personalId={card.personalId}
                                userImage={userImage}
                                jobNames={jobNames}
                                userName={card.userName}
                                userCareer={card.personalCareer}
                                userIntro={card.userIntro}
                                techUrls={techUrls}
                                onClick={() => handleCardClick(card)}
                            />
                    );
                    
                })}
            </div>
        </div>
    );
}
export default UserPickzone;
