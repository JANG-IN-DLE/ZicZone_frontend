import React, {useEffect, useState} from "react";
// import { useParams } from "react-router";
// import axios from "axios";
import ProfileCard from "../../common/card/components/ProfileCard";
import PickResume from "./PickResume";
import CoverLetter from "./CoverLetter";
import Portfolio from "./Portfolio";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from '../../common/card/assets/personal_f_image.png';
import UserProfilestyle from "../styles/UserProfile.module.css";


const UserProfile = ({ userCard, jobNames, techUrls, selectedSection, setSelectedSection, userResume, onPickClick, isScrap, isPicked, isCompany}) => {
    const userImage = userCard.gender === 'MALE' ? personalMImage : personalFImage;

    const renderSection = () => {
        switch(selectedSection){
            case 'resume' : 
                return (
                    // pickDetail에서 resume 정보
                    <PickResume 
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
                    certificates={userResume.certificates}
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
        <div className={UserProfilestyle.up_container}>
            <div className={UserProfilestyle.up_left}>
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
                    isCompany={isCompany}
                    />
                <ul className={UserProfilestyle.up_ul_container}>
                    <li className={`${UserProfilestyle.up_li_resume} ${selectedSection === 'resume' ? UserProfilestyle.active : '' }`} onClick={() => setSelectedSection('resume')}>이력서</li>
                    {userResume.personalState && (
                    <li className={`${UserProfilestyle.up_li_coverLetter} ${selectedSection === 'coverLetter' ? UserProfilestyle.active : '' }`} onClick={() => setSelectedSection('coverLetter')}>자기소개서</li>
                    )}
                    {userResume.portfolios && userResume.portfolios.map((portfolio, index) => (
                        <li className={`${UserProfilestyle[`up_li_port${index}`]} ${selectedSection === `portfolio${index + 1}` ? UserProfilestyle.active : ''}`} key={index} onClick={() => setSelectedSection(`portfolio${index + 1}`)}>
                            포트폴리오 {index + 1}
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
