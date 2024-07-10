import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
// import axios from "axios";
import ProfileCard from "../../common/card/components/ProfileCard";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter";
import Portfolio from "./Portfolio";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from '../../common/card/assets/personal_f_image.png';
import UserProfilestyle from "../styles/UserProfile.module.css";


const UserProfile = ({ userCard, jobNames, techUrls, selectedSection, setSelectedSection, userResume, onPickClick, isScrap, isPicked}) => {
    const userImage = userCard.gender === 'MALE' ? personalMImage : personalFImage;
    // const isCompany = false; // 개인
    const isCompany = true; // 기업

    const renderSection = () => {
        switch(selectedSection){
            case 'resume' : 
                return (
                    // pickDetail에서 resume 정보
                    <Resume 
                    resumeName={userResume.resumeName}
                    resumePhoto={userResume.resumePhoto}
                    resumeEmail={userResume.resumeEmail}
                    phoneNum={userResume.phoneNum}
                    resumeDate={userResume.resumeDate}
                    jobName={jobNames}
                    techUrls={techUrls}
                    educations={userResume.educations}
                    careers={userResume.careers}
                    curriculums={userResume.curriculums}
                    etcs={userResume.etcs}
                    archives={userResume.archives}
                    isPicked={isPicked}
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
                    techUrls={techUrls}
                    isScrap={isScrap}
                    />
                <ul>
                    <li onClick={() => setSelectedSection('resume')}>이력서</li>
                    <li onClick={() => setSelectedSection('coverLetter')}>자기소개서</li>
                    {userResume.portfolios && userResume.portfolios.map((portfolio, index) => (
                        <li key={index} onClick={() => setSelectedSection(`portfolio${index + 1}`)}>
                            포트폴리오{index + 1}
                        </li>
                    ))}
                </ul>
                {isCompany && !isPicked && (
                    <button className={UserProfilestyle.pick_button} onClick={onPickClick}>Pick {userCard.userName}</button>
                )}
            </div>
            <div>
                {renderSection()}
            </div>
        </div>
    );

};

export default UserProfile;
