import React from "react";
import "../../resume/styles/Resume.css";
import resumePhotoNull from '../assets/resumePhotoNull.svg';
import ResumePrivacyView from "../../resume/components/ResumePrivacy/ResumePrivacyView";
import ResumeJobView from "../../resume/components/ResumeJob/ResumeJobView";
import ResumeTechView from "../../resume/components/ResumeTech/ResumeTechView";
import ResumeEducationView from "../../resume/components/ResumeEducation/ResumeEducationView";
import ResumeCareerView from "../../resume/components/ResumeCareer/ResumeCareerView";
import ResumeCurriculumView from "../../resume/components/ResumeCurriculum/ResumeCurriculumView";
import ResumeCertificateView from "../../resume/components/ResumeCertificate/ResumeCertificateView";
import ResumeEtcView from "../../resume/components/ResumeEtc/ResumeEtcView";
import ResumeArchiveView from "../../resume/components/ResumeArchive/ResumeArchiveView";

// 이름 마스킹 함수
const maskName = (name) => {
    if(name.length === 2) {
        return `${name[0]}*`;  // 이름이 2글자면 마지막 *
    } else if(name.length > 2) {
        const first = name[0];
        const last = name[name.length - 1];
        const masked = name.slice(1, -1).replace(/./g, '*');
        return `${first}${masked}${last}`;
    }
    return name;
}

// resume conponent
const PickResume = ({resumeName, resumePhoto, resumeEmail, phoneNum, resumeDate, jobName, techUrls, educations, careers, curriculums, certificates, etcs, archives, isPicked }) => {

    return (
        <div>
                <div className="resume_container">
                    <p className="resume_title">직존 지원서</p>
                    <div className="container_bar"></div>
                    <div>
                        <ResumePrivacyView
                        resumeName={isPicked ? resumeName : maskName(resumeName)}
                        resumeEmail={resumeEmail}
                        phoneNum={phoneNum}
                        resumeDate={resumeDate}
                        resumePhoto={resumePhoto}
                        isPicked={isPicked}
                        />
                        <ResumeJobView
                        jobName={jobName}
                        />
                        <ResumeTechView
                        techUrls={techUrls}
                        />
                        <ResumeEducationView
                        educations={educations}
                        />
                        <ResumeCareerView
                        careers={careers}
                        />
                        <ResumeCurriculumView
                        curriculums={curriculums}
                        />
                        <ResumeCertificateView
                        certificates={certificates}
                        />
                        <ResumeEtcView
                        etcs={etcs}
                        />
                        <ResumeArchiveView
                        archives={archives}
                        />
                    </div>
                </div>

        </div>
    )
}

export default PickResume;