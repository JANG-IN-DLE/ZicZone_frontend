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
    // 선택된 Job을 저장하는 상태
    const [selectedJobs, setSelectedJobs] = useState([]);
    // pickzoneDetail로 가는 hook
    const navigate = useNavigate();
    // 현재 로그인된 companyId를 임시로 1이라고 가정
    const loggedInCompanyId = 1;
    const companyId = 1;

    useEffect(() => {
        axios.get(`/api/pickcards?loggedInPersonalId=${loggedInCompanyId}`)
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
        navigate(`/pickzone/${companyId}/${card.personalId}`)
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
            <div className="jobs">
                {jobs.map(job => (
                    <Job key={job.jobId} job={job} onClick={()=> handleJobClick(job)} isSelected={selectedJobs.includes(job.jobName)} />
                ))}
            </div>
            <h2>Pick Cards</h2>
            <div className="user_card_container">
            {filteredPickCards.map(card => {
                    const userImage = card.gender === 'MALE' ? personalMImage : personalFImage;
                    const jobNames = card.jobName ? card.jobName.split(',') : [];
                    // techName이 아니라 techUrl로 수정 필요
                    const techUrls = card.techUrl ? card.techUrl.split(',') : [];
                    
                    
                    // 현재 card의 companyId 배열에서 로그인된 회사 사용자의 Id의 index를 찾느다.
                    const companyIdIndex = card.companyId.indexOf(loggedInCompanyId);
                    // 만약 companyId 배열에 로그인된 회사 사용자의 ID가 포함되어 있다면, 해당 인덱스의 scrap값을 가져온다.
                    const isScrap = companyIdIndex !== -1 ? card.scrap[companyIdIndex] : false;
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
                                // 스크랩 상태를 전달한다
                                isScrap={isScrap}
                                // 로그인 구현되면 수정 필요
                                isCompanyUser={true}
                                onClick={() => handleCardClick(card)}
                            />
                    );
                    
                })}
            </div>
        </div>
    );
}
export default CompanyPickzone;
