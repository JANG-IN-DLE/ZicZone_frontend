import React from "react";
import Resumestyle from '../styles/Resume.module.css';
import resumePhotoNull from '../assets/resumePhotoNull.svg';

// resume conponent
const Resume = ({ resumePhoto, resumeName, resumeDate, phoneNum, resumeEmail, personalState, jobName=[], techUrls=[], educations=[], careers=[], curriculums=[],certificates=[],etcs=[],archives=[], isPicked }) => {
    return (
        <div className={Resumestyle.resume_container}>
            <div className={Resumestyle.resume_header}>
                <h2>직존 이력서</h2>
            </div>
            <div className={Resumestyle.resume_content}>
                <div className={Resumestyle.resume_photo}>
                    <img src={isPicked ? resumePhoto : resumePhotoNull} alt="profile" />
                </div>
                <div className={Resumestyle.resume_details}>
                    <h3>{resumeName}</h3>
                    <p>이메일: {isPicked ? resumeEmail : ' '}</p>
                    <p>전화번호: {isPicked ? phoneNum : ' '}</p>
                    <p>생년월일: {isPicked ? resumeDate : ' '}</p>
                    <p>개발 직무: 
                        {jobName.map((job, index)=> (
                            <span key={index} className={Resumestyle.jobs_badge}>#{job}</span>
                        ))}
                    </p>
                    <div className={Resumestyle.techs}>
                        <h4>기술 스택:</h4>
                        {techUrls.map((tech, index) => (
                            <img key={index} className={Resumestyle.tech_icon} src={tech} alt={`Tech${index}`} />
                        ))}
                    </div>
                    <div className={Resumestyle.education}>
                        <h4>학력:</h4>
                        {educations.map((education, index)=> (
                            <p key={index}>{education}</p>
                        ))}
                    </div>
                    <div className={Resumestyle.curriculum}>
                        <h4>경력사항:</h4>
                        {curriculums.map((curriculum, index) => (
                            <p key={index}>{curriculum}</p>
                        ))}
                    </div>
                    <div className={Resumestyle.certifications}>
                        <h4>자격증:</h4>
                        {certificates.map((certificate, index) => (
                            <p key={index}>{certificate}</p>
                        ))}
                    </div>
                    <div className={Resumestyle.etc}>
                        <h4>기타사항:</h4>
                        {etcs.map((etc, index) => (
                            <p key={index}>{etc}</p>
                        ))}
                    </div>
                    <div className={Resumestyle.archive}>
                        <h4>아카이브:</h4>
                        {archives.map((atchive, index)=> (
                            <p key={index}>
                                {atchive.label};
                                <a href={atchive} target="_blank" rel="noopener noreferrer">
                                    {atchive};
                                </a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;