import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProfileCard from "../../common/card/components/ProfileCard";
import Resume from "./Resume";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from '../../common/card/assets/personal_f_image.png';

export default function PickZoneDetail() {
    const { personalId} = useParams();
    // 회원 정보 담는 hook
    const [userCard, setuserCard] = useState(null);
    // resume 정보 담는 hook
    const[userResume, setUserResume] = useState(null);

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
    // 성별에 따라 image다르게 보여주기
    const userImage = userCard.gender === 'MALE' ? personalMImage : personalFImage;
    // 직무 가져오기
    const jobNames = userCard.jobName ? userCard.jobName.split(',') : [];
    // 기술 가져오기
    const techNames = userCard.techName ? userCard.techName.split(',') : [];
    return(
        <div>
            {/* pickDetail에서 회원정보 */}
            <ProfileCard
                key={userCard.personalId}
                personalId={userCard.personalId}
                userImage={userImage}
                jobNames={jobNames}
                userName={userCard.userName}
                userCareer={userCard.personalCareer}
                userIntro={userCard.userIntro}
                techNames={techNames}
            />
            {/* pickDetail에서 resume 정보 */}
            <Resume 
                resumeName={userResume.resumeName}
                phoneNum={userResume.phoneNum}
                resumeDate={userResume.resumeDate}
                jobName={jobNames}
                techName={techNames}
                educations={userResume.educations}
                careers={userResume.careers}
                curriculums={userResume.curriculums}
                etcs={userResume.etcs}
                archives={userResume.archives}
            />
        </div>

    );
}