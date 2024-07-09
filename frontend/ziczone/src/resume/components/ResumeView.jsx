import React from "react";
import "./../styles/Resume.css"
import ResumePrivacyView from "./ResumePrivacy/ResumePrivacyView"
import ResumeJobView from "./ResumeJob/ResumeJobView";
import ResumeTechView from "./ResumeTech/ResumeTechView"
import ResumeEducationView from "./../components/ResumeEducation/ResumeEducationView"
import ResumeCareerView from "./ResumeCareer/ResumeCareerView";
import ResumeCurriculumView from "./ResumeCurriculum/ResumeCurriculumView";
import ResumeCertificateView from "./ResumeCertificate/ResumeCertificateView";
import ResumeEtcView from "./ResumeEtc/ResumeEtcView";
import ResumeArchiveView from "./ResumeArchive/ResumeArchiveView";
import ResumeIntroductionView from "./ResumeIntroduction/ResumeIntroductionView";
import ResumePortfolioView from "./ResumePortfolio/ResumePortfolioView";

const ResumeView = () => {

    return (
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeView;