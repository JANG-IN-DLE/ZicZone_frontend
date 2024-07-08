import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import UserProfile from "./UserProfile";
import PickModal from "./PickModal";

export default function PickzoneCompanyDetail(){
    const {companyId, personalId} = useParams();
    // 회원 정보 담는 hook
    const [ userCard, setUserCard ] = useState(null);
    // resume 정보 담는 hook
    const[ userResume, setUserResume ] = useState(null);
    // 선택 섹션 추적hook
    const [ selectedSection, setSelectedSection] = useState("resume");
    // modal open hook
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Pick 상테 추적 hook
    const [isPicked, setIsPicked] = useState(false);

    useEffect(() => {
        axios.get(`/api/pickcards/${companyId}/${personalId}`)
            .then(response => {
                setUserCard(response.data);
                setIsPicked(response.data.pick);// pick 상태 저장
            })
            .catch(error => {
                console.log('Error fetching user details: ' ,error);
            });
        axios.get(`/api/pickresume/${personalId}`)
            .then(response => {
                setUserResume(response.data);
            })
            .catch(error => {
                console.log('Error fetching user resume details: ' , error);
            });

    }, [companyId, personalId]);
    if(!userCard || !userResume){
        return <div>Loading...</div>;
    }
    const jobNames = userCard.jobName ? userCard.jobName.split(',') : [];
    const techUrls = userCard.techUrl ? userCard.techUrl.split(',') : [];

    // "pick {userName}" 클릭 시
    const handlePickClick = () => {
        setIsModalOpen(true);
    };
    // "취소" 클릭 시
    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    // "Pick" 클릭시
    const handlePickConfirm = () => {
        axios.post('/api/pick', {
            companyId: companyId,
            personalId: personalId
        })
        .then(response => {
            console.log('Pick성공:', response.data);
            setIsPicked(response.data.pick);// pick 저장
            setIsModalOpen(false);
        })
        .catch(error => {
            console.log('Error picking user: ' , error);
        });
    };

    return(
        <div>
        <UserProfile 
            userCard={userCard}
            jobNames={jobNames}
            techUrls={techUrls}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            userResume={userResume}
            isCompany={true}
            onPickClick={handlePickClick}
            isScrap={userCard.scrap}
            isPicked={isPicked}// pick 상태 전달
        />  
        <PickModal 
            isOpen={isModalOpen}
            onClose={handleModalClose}
            userName={userCard.userName}
            onPick={handlePickConfirm}
        />
        </div>
 
    );
}