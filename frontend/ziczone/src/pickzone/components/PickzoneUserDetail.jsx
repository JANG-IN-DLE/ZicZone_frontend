import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import UserProfile from "./UserProfile";

export default function PickZoneUserDetail() {
    const { personalId} = useParams();
    // 회원 정보 담는 hook
    const [userCard, setuserCard] = useState(null);
    // resume 정보 담는 hook
    const[userResume, setUserResume] = useState(null);
    // 선택 섹션 추적hook
    const[selectedSection, setSelectedSection] = useState("resume");


    useEffect(() => {
        // pickDetail에서 왼쪽에 회원정보 가져오는 axios
        axios.get(`/api/pickcards/${personalId}`)
            .then(response => {
                setuserCard(response.data);
            })
            .catch(error => {
                console.log('Error fetching user details: ', error);
            });
            // pickDetail에서 resume 데이터 가져오는 axios
        axios.get(`/api/pickresume/${personalId}`)
            .then(response => {
                setUserResume(response.data);
            })
            .catch(error => {
                console.log('Error fetching user resume details: ', error )
            });
    }, [personalId]);
    // 2개 api 같이 가져올 때 밑에 구문 작성해야 rendering 할때 같이 가져와진다.
    if(!userCard || !userResume) {
        return <div>Loading...</div>
    }
    // 직무 가져오기
    const jobNames = userCard.jobName ? userCard.jobName.split(',') : [];
    // 기술 가져오기
    const techNames = userCard.techName ? userCard.techName.split(',') : [];
    
    return(
        <UserProfile 
            userCard={userCard}
            jobNames={jobNames}
            techNames={techNames}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            userResume={userResume}
        />
    );
}

