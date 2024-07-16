import React, { useState } from "react";
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
    const [privacy, setPrivacy] = useState({});
    const [job, setJob] = useState({});
    const [tech, setTech] = useState({});
    const [education, setEducation] = useState({});
    const [career, setCareer] = useState({});
    const [curriculum, setCurriculum] = useState({});
    const [certificate, setCertificate] = useState({});
    const [etc, setEtc] = useState({});
    const [archive, setArchive] = useState({});
    const [introduction, setIntroduction] = useState({});
    const [portfolio, setPortfolio] = useState({});


    const handleSave = async () => {
        const resumeData = {
            privacy, job, tech, education, career, curriculum, certificate, etc, archive, introduction, portfolio
        };

        alert("저장되었습니다.");
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="resume">
                <div className="resume_container">
                    <p className="resume_title">직존 지원서</p>
                    <div className="container_bar"></div>
                    <div>
                        <ResumePrivacy setPrivacy={setPrivacy} />
                        <ResumeJob setJob={setJob} />
                        <ResumeTech setTech={setTech} />
                        <ResumeEducation setEducation={setEducation} />
                        <ResumeCareer setCareer={setCareer} />
                        <ResumeCurriculum setCurriculum={setCurriculum} />
                        <ResumeCertificate setCertificate={setCertificate} />
                        <ResumeEtc setEtc={setEtc} />
                        <ResumeArchive setArchive={setArchive} />
                        <ResumeIntroduction setIntroduction={setIntroduction} />
                        <ResumePortfolio setPortfolio={setPortfolio} />
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