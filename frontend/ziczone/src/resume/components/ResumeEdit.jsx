import React, { useState } from "react";
import axios from "axios";
import "./../styles/Resume.css"
import ResumePrivacyEdit from "./ResumePrivacy/ResumePrivacyEdit"
import ResumeJobEdit from "./ResumeJob/ResumeJobEdit";
import ResumeTechEdit from "./ResumeTech/ResumeTechEdit"
import ResumeEducationEdit from "./ResumeEducation/ResumeEducationEdit"
import ResumeCareerEdit from "./ResumeCareer/ResumeCareerEdit";
import ResumeCurriculumEdit from "./ResumeCurriculum/ResumeCurriculumEdit";
import ResumeCertificateEdit from "./ResumeCertificate/ResumeCertificateEdit";
import ResumeEtcEdit from "./ResumeEtc/ResumeEtcEdit";
import ResumeArchiveEdit from "./ResumeArchive/ResumeArchiveEdit";
import ResumeIntroductionEdit from "./ResumeIntroduction/ResumeIntroductionEdit";
import ResumePortfolioEdit from "./ResumePortfolio/ResumePortfolioEdit"


const ResumeEdit = () => {
    const userId = 77;
    const [privacy, setPrivacy] = useState({});
    const [education, setEducation] = useState({});
    const [career, setCareer] = useState({});
    const [curriculum, setCurriculum] = useState({});
    const [certificate, setCertificate] = useState({});
    const [etc, setEtc] = useState({});
    const [archive, setArchive] = useState({});

    const EditSave = () => {
        const resumeEditData = {
            privacy,
            education,
            career,
            curriculum,
            certificate,
            etc,
            archive
        }

        console.log('Sending data:', JSON.stringify(resumeEditData, null, 2));

        axios.put(`/api/resumes/${userId}`, resumeEditData)
            .then(response => {
                console.log("지원서 수정 성공: " + response)
            })
            .catch(error => {
                console.error("지원서 수정 실패: " + error)
            })
    }

    return (
        <div>
            <div className="resume">
                <div className="resume_container">
                    <p className="resume_title">직존 지원서</p>
                    <div className="container_bar"></div>
                    <div>
                        <ResumePrivacyEdit setPrivacy={setPrivacy}/>
                        {/* <ResumeJobEdit /> */}
                        {/* <ResumeTechEdit /> */}
                        <ResumeEducationEdit setEducation={setEducation}/>
                        <ResumeCareerEdit setCareer={setCareer}/>
                        <ResumeCurriculumEdit setCurriculum={setCurriculum}/>
                        <ResumeCertificateEdit setCertificate={setCertificate}/>
                        <ResumeEtcEdit setEtc={setEtc}/>
                        <ResumeArchiveEdit setArchive={setArchive} />
                        {/* <ResumeIntroductionEdit /> */}
                        {/* <ResumePortfolioEdit /> */}
                    </div>
                    <div className="resume_save">
                        <button className="resume_save_btn" onClick={EditSave}>저장하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeEdit;