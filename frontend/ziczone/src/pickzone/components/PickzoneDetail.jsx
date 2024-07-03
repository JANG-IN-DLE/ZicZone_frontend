import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import ProfileCard from "../../common/card/components/ProfileCard";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter";
import Portfolio from "./Portfolio";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from '../../common/card/assets/personal_f_image.png';

// 나중에 이 component 지워도 될듯.
export default function PickZoneDetail() {
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
    // 성별에 따라 image다르게 보여주기
    const userImage = userCard.gender === 'MALE' ? personalMImage : personalFImage;
    // 직무 가져오기
    const jobNames = userCard.jobName ? userCard.jobName.split(',') : [];
    // 기술 가져오기
    const techNames = userCard.techName ? userCard.techName.split(',') : [];
    
    const renderSection = () => {
        switch(selectedSection){
            case 'resume':
                return(
                    // pickDetail에서 resume 정보
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
                );
            case 'coverLetter':
                return <CoverLetter data={userResume.personalState} />;
            default:
                // li에서 저장된 selectedSection이 portfolio로 시작하는 값을 누르면 
                // 해당 userResume.portfolios로 넘어오는 값을 return <Portfolio/>
                if(selectedSection.startsWith('portfolio')){
                    const index = parseInt(selectedSection.replace('portfolio', ''))-1;
                    return <Portfolio data={userResume.portfolios[index]} />;
                }
                return null;
        }
    };

    return(
        <div style={{display: 'flex'}}>
            <div style={{ marginRight: '20px' }}>
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
            <ul>
                <li onClick={() => setSelectedSection('resume')}>이력서</li>
                <li onClick={() => setSelectedSection('coverLetter')}>자기소개서</li>
                {/* porfolio로 넘어오는 갯수에 맞게 li 정렬 */}
                {userResume.portfolios && userResume.portfolios.map((portfolio, index)=>(
                    <li key={index} onClick={() => setSelectedSection(`portfolio${index + 1}`)}>
                        포트폴리오{index + 1}
                    </li>
                ))}
            </ul>
            
            </div>
            <div>
                {renderSection()}
            </div>
        </div>

    );
}

