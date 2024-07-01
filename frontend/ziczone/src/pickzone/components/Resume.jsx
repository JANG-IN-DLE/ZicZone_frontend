import React from "react";
import '../styles/Resume.css';

// resume conponent
const Resume = ({ resumePhoto, resumeName, resumeDate, phoneNum, personalState, jobName=[], techName=[], educations=[], careers=[], curriculums=[],certificates=[],etcs=[],archives=[] }) => {
    return (
        <div className="resume-container">
            <div className="resume-header">
                <h2>직존 이력서</h2>
            </div>
            <div className="resume-content">
                <div className="resume-photo">
                    {/* <img src={resumePhoto} alt="profile" /> */}
                </div>
                <div className="resume-details">
                    <h3>{resumeName}</h3>
                    {/* <p>이메일: {userResume.email}</p> email 받는게 좋을 것 같다. */}
                    <p>전화번호: {phoneNum}</p>
                    <p>생년월일: {resumeDate}</p>
                    <p>개발 직무: 
                        {jobName.map((job, index)=> (
                            <span key={index}>#{job}</span>
                        ))}
                    </p>
                    <div className="techs">
                        <h4>기술 스택:</h4>
                        {techName.map((tech, index) => (
                            <img key={index} className="tech_icon" src={tech} alt={`Tech${index}`} />
                        ))}
                    </div>
                    <div className="education">
                        <h4>학력:</h4>
                        {educations.map((education, index)=> (
                            <p key={index}>{education}</p>
                        ))}
                    </div>
                    <div className="curriculum">
                        <h4>경력사항:</h4>
                        {curriculums.map((curriculum, index) => (
                            <p key={index}>{curriculum}</p>
                        ))}
                    </div>
                    <div className="certifications">
                        <h4>자격증:</h4>
                        {certificates.map((certificate, index) => (
                            <p key={index}>{certificate}</p>
                        ))}
                    </div>
                    <div className="etc">
                        <h4>기타사항:</h4>
                        {etcs.map((etc, index) => (
                            <p key={index}>{etc}</p>
                        ))}
                    </div>
                    <div className="archive">
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