import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import UserProfile from "./UserProfile";
import PickModal from "./PickModal";

export default function PickzoneCompanyDetail(){
    const {personalId} = useParams();
    // 회원 정보 담는 hook
    const [ userCard, setUserCard ] = useState(null);
    // resume 정보 담는 hook
    const[ userResume, setUserResume ] = useState(null);
    // 선택 섹션 추적hook
    const [ selectedSection, setSelectedSection] = useState("resume");
    // modal open hook
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get(`/api/pickcards/${personalId}`)
            .then(response => {
                setUserCard(response.data);
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

    }, [personalId]);
    if(!userCard || !userResume){
        return <div>Loading...</div>;
    }
    const jobNames = userCard.jobName ? userCard.jobName.split(',') : [];
    const techNames = userCard.techName ? userCard.techName.split(',') : [];

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
        // 나중에 axios로 데이터 보내는 처리 해야함
        setIsModalOpen(false);
    };

    return(
        <div>
        <UserProfile 
            userCard={userCard}
            jobNames={jobNames}
            techNames={techNames}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            userResume={userResume}
            isCompany={true}
            onPickClick={handlePickClick}
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