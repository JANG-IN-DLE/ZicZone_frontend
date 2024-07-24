import React, { useState } from "react";
import axios from "axios";
import "./../styles/Resume.css";
import ResumePrivacyEdit from "./ResumePrivacy/ResumePrivacyEdit";
import ResumeJobEdit from "./ResumeJob/ResumeJobEdit";
import ResumeTechEdit from "./ResumeTech/ResumeTechEdit";
import ResumeEducationEdit from "./ResumeEducation/ResumeEducationEdit";
import ResumeCareerEdit from "./ResumeCareer/ResumeCareerEdit";
import ResumeCurriculumEdit from "./ResumeCurriculum/ResumeCurriculumEdit";
import ResumeCertificateEdit from "./ResumeCertificate/ResumeCertificateEdit";
import ResumeEtcEdit from "./ResumeEtc/ResumeEtcEdit";
import ResumeArchiveEdit from "./ResumeArchive/ResumeArchiveEdit";
import ResumeIntroductionEdit from "./ResumeIntroduction/ResumeIntroductionEdit";
import ResumePortfolioEdit from "./ResumePortfolio/ResumePortfolioEdit";
import Layout from "../../common/layout/layout";
// import dayjs from 'dayjs';

const ResumeEdit = () => {
    const userId = localStorage.getItem("userId");
    const [privacy, setPrivacy] = useState({});
    const [job, setJob] = useState([]);
    const [tech, setTech] = useState([]);
    const [education, setEducation] = useState([]);
    const [career, setCareer] = useState([]);
    const [curriculum, setCurriculum] = useState([]);
    const [certificate, setCertificate] = useState([]);
    const [etc, setEtc] = useState([]);
    const [archive, setArchive] = useState({});
    const [introduction, setIntroduction] = useState({ fileName: '', file: null });
    const [portfolio, setPortfolio] = useState([]);

    console.log("privacy: " + JSON.stringify(privacy))

    const EditSave = () => {
        const resumeDTO = {
            resumeId: privacy.resumeId,
            resumeName: privacy.resumeName,
            resumeDate: privacy.resumeDate,
            phoneNum: privacy.phoneNum,
            resumePhotoUrl: privacy.resumePhotoUrl,
            // resumePhotoUuid: privacy.resumePhotoUuid,
            resumePhotoFileName: privacy.resumePhotoFileName,
            resumeEmail: privacy.resumeEmail,
            personalStateUrl: introduction.fileName,
            // personalStateUuid: introduction.fileUuid,
            personalStateFileName: introduction.fileName,
            personalId: userId,
            archive: {
                archId: archive.archId,
                archGit: archive.git,
                archNotion: archive.notion,
                archBlog: archive.blog
            },
            etcs: etc.map((item, index) => ({
                etcId: item.id,
                etcContent: item.description,
                etcDate: item.startDate
            })),
            curriculums: curriculum.map((item, index) => ({
                curriId: item.id,
                curriContent: item.course,
                curriCompany: item.institution,
                curriDate: `${item.startDate}~${item.endDate}`
            })),
            careers: career.map((item, index) => ({
                careerId: item.id,
                careerName: item.companyName,
                careerJob: item.job,
                careerPosition: item.position,
                careerDate: `${item.startDate}~${item.endDate}`
            })),
            educations: education.map((item, index) => ({
                eduId: item.id,
                edu: item.history,
                credit: `${item.scorePoint}/${item.scoreStandard}`,
                eduDate: item.date
            })),
            certificates: certificate.map((item, index) => ({
                certId: item.id,
                cert: item.name,
                certDate: item.date
            })),
            jobPositions: job.map((item, index) => ({
                userJobId: index,
                job: {
                    jobId: item.jobId,
                    jobName: item.jobName
                }
            })),
            techStacks: tech.map((item, index) => ({
                userTechId: index,
                tech: {
                    techId: item.techId,
                    techName: item.techName,
                    techUrl: item.techUrl
                }
            })),
            portfolios: portfolio.length > 0 ? portfolio.map((item, index) => ({
                portId: index,
                portFileUrl: item.fileUrl,
                portFileUuid: item.fileUuid,
                portFileName: item.fileName,
                resumeId: userId
            })) : []
        };

        const formData = new FormData();
        formData.append("resumeDTO", JSON.stringify(resumeDTO));

        // Add portfolio files to FormData
        portfolio.forEach((item) => {
            if (item.file) {
                formData.append("portfolios", item.file);
            }
        });

        if (privacy.resumePhoto) {
            formData.append("resumePhoto", privacy.resumePhoto);
        }

        if (introduction.file) {
            formData.append("personalState", introduction.file);
        }

        // formData 내용을 출력
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        axios.put(`/api/personal/resumes/${userId}/update`, formData)
            .then(response => {
                console.log(JSON.stringify(formData));
                alert("저장되었습니다.");
            })
            .catch(error => {
                console.error("지원서 수정 실패: " + error);
                alert("저장 중 오류가 발생했습니다.");
            });
    };

    return (
        <Layout>
            <div>
                <div className="resume">
                    <div className="resume_container">
                        <p className="resume_title">직존 지원서</p>
                        <div className="container_bar"></div>
                        <div>
                            <ResumePrivacyEdit setPrivacy={setPrivacy} />
                            <ResumeJobEdit setJob={setJob} />
                            <ResumeTechEdit setTech={setTech} />
                            <ResumeEducationEdit setEducation={setEducation} />
                            <ResumeCareerEdit setCareer={setCareer} />
                            <ResumeCurriculumEdit setCurriculum={setCurriculum} />
                            <ResumeCertificateEdit setCertificate={setCertificate} />
                            <ResumeEtcEdit setEtc={setEtc} />
                            <ResumeArchiveEdit setArchive={setArchive} />
                            <ResumeIntroductionEdit setIntroduction={setIntroduction} />
                            <ResumePortfolioEdit setPortfolio={setPortfolio} />
                        </div>
                        <div className="resume_save">
                            <button className="resume_save_btn" onClick={EditSave}>저장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResumeEdit;
