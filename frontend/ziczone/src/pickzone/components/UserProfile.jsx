import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
// import axios from "axios";
import ProfileCard from "../../common/card/components/ProfileCard";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter";
import Portfolio from "./Portfolio";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from '../../common/card/assets/personal_f_image.png';


const UserProfile = ({ userCard, jobNames, techNames, selectedSection, setSelectedSection, userResume, onPickClick}) => {
    const userImage = userCard.gender === 'MALE' ? personalMImage : personalFImage;
    const isCompany = false;

    const renderSection = () => {
        switch(selectedSection){
            case 'resume' : 
                return (
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
                if(selectedSection.startsWith('portfolio')){
                    const index = parseInt(selectedSection.replace('portfolio', '')) - 1;
                    return <Portfolio data={userResume.portfolios[index]} />;
                }
                return null;
        }
    };
    return(
        <div style={{display: 'flex'}}>
            <div style={{ marginRight: '20px' ,position: 'relative'}}>
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
                {isCompany && (
                    <button style={{position: 'absolute', top: 10, right: 10}}>스크랩</button>
                )}
                <ul>
                    <li onClick={() => setSelectedSection('resume')}>이력서</li>
                    <li onClick={() => setSelectedSection('coverLetter')}>자기소개서</li>
                    {userResume.portfolios && userResume.portfolios.map((portfolio, index) => (
                        <li key={index} onClick={() => setSelectedSection(`portfolio${index + 1}`)}>
                            포트폴리오{index + 1}
                        </li>
                    ))}
                </ul>
                {isCompany && (
                    <button style={{marginTop: '20px'}} onClick={onPickClick}>Pick {userCard.userName}</button>
                )}
            </div>
            <div>
                {renderSection()}
            </div>
        </div>
    );

};

export default UserProfile;
