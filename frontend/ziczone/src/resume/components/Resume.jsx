import React from "react";
import "./../styles/Resume.css"
import Header from "../../common/header/components/Header"
import ResumePrivacy from "./ResumePrivacy/ResumePrivacy"
import ResumeJob from "./ResumeJob/ResumeJob";
import ResumeTech from "./ResumeTech/ResumeTech"
import ResumeEducation from "./../components/ResumeEducation/ResumeEducation"
import ResumeCareer from "./ResumeCareer/ResumeCareer";
import ResumeCurriculum from "./ResumeCurriculum/ResumeCurriculum";
import ResumeCertificate from "./ResumeCertificate/ResumeCertificate";
import ResumeEtc from "./ResumeEtc/ResumeEtc";
import ResumeArchive from "./ResumeArchive/ResumeArchive";
import ResumeIntroduction from "./ResumeIntroduction/ResumeIntroduction";
import ResumePortfolio from "./ResumePortfolio/ResumePortfolio";

const Resume = () => {
    
    const handleSave = () => {
        // 저장 로직을 여기에 추가하세요
        alert("저장되었습니다.");
    };

    return (
        <div>
            <Header />
            <div className="resume">
                <div className="resume_container">
                    <p className="resume_title">직존 지원서</p>
                    <div className="container_bar"></div>
                    <div>
                        <ResumePrivacy />
                        <ResumeJob />
                        <ResumeTech />
                        <ResumeEducation />
                        <ResumeCareer />
                        <ResumeCurriculum />
                        <ResumeCertificate />
                        <ResumeEtc />
                        <ResumeArchive />
                        <ResumeIntroduction />
                        <ResumePortfolio />
                    </div>
                    <div className="resume_save">
                        <button className="resume_save_btn" onClick={handleSave}>저장하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume