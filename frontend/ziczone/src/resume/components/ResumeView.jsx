import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./../styles/Resume.css";
import ResumePrivacyView from "./ResumePrivacy/ResumePrivacyView";
import ResumeJobView from "./ResumeJob/ResumeJobView";
import ResumeTechView from "./ResumeTech/ResumeTechView";
import ResumeEducationView from "./../components/ResumeEducation/ResumeEducationView";
import ResumeCareerView from "./ResumeCareer/ResumeCareerView";
import ResumeCurriculumView from "./ResumeCurriculum/ResumeCurriculumView";
import ResumeCertificateView from "./ResumeCertificate/ResumeCertificateView";
import ResumeEtcView from "./ResumeEtc/ResumeEtcView";
import ResumeArchiveView from "./ResumeArchive/ResumeArchiveView";
import ResumeIntroductionView from "./ResumeIntroduction/ResumeIntroductionView";
import ResumePortfolioView from "./ResumePortfolio/ResumePortfolioView";
import Layout from "../../common/layout/layout";

const ResumeView = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const handleEditClick = () => {
        navigate(`/personal/resumes/edit/${userId}`);
    };

    const handleReturnClick = () => {
        navigate(`/personal/${userId}`);
    };

    return (
        <Layout>
            <div>
                <div className="resume">
                    <div className="resume_container">
                        <p className="resume_title">직존 지원서</p>
                        <div className="container_bar"></div>
                        <div>
                            <ResumePrivacyView />
                            <ResumeJobView />
                            <ResumeTechView />
                            <ResumeEducationView />
                            <ResumeCareerView />
                            <ResumeCurriculumView />
                            <ResumeCertificateView />
                            <ResumeEtcView />
                            <ResumeArchiveView />
                            <ResumeIntroductionView />
                            <ResumePortfolioView />
                        </div>
                        <div className="resume_save">
                            <button className="resume_return_btn" onClick={handleReturnClick}>뒤로가기</button>
                            <button className="resume_save_btn" onClick={handleEditClick}>수정하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResumeView;