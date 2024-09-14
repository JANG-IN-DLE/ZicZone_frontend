import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
import api from "../../common/config/axiosInstance";

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
  
    const navigate = useNavigate();

    // console.log("privacy: " + JSON.stringify(privacy));

    const handleDelete = () => {
        api.delete(`/api/personal/resumes/${userId}`)
            .then(response => {
                alert("삭제되었습니다.");
                // 삭제 후 원하는 페이지로 이동할 수 있습니다.
                navigate(`/personal/${userId}`);
            })
            .catch(error => {
                console.error("지원서 삭제 실패: " + error);
                alert("삭제 중 오류가 발생했습니다.");
            });
    };

    const EditSave = () => {
        const resumeDTO = {
            resumeId: privacy.resumeId,
            resumeName: privacy.resumeName,
            resumeDate: privacy.resumeBirth,
            phoneNum: privacy.resumePhone,
            resumePhotoUrl: privacy.resumePhotoUrl,
            resumePhotoFileName: privacy.resumePhotoFileName,
            resumeEmail: privacy.resumeEmail,
            personalStateUrl: introduction.fileName,
            personalStateFileName: introduction.fileName,
            personalId: userId,
            archive: {
                archId: archive.archId,
                archGit: archive.git,
                archNotion: archive.notion,
                archBlog: archive.blog
            },
            etcs: etc.map((item) => ({
                etcId: item.id,
                etcContent: item.description,
                etcDate: item.startDate
            })),
            curriculums: curriculum.map((item) => ({
                curriId: item.id,
                curriContent: item.course,
                curriCompany: item.institution,
                curriDate: `${item.startDate}~${item.endDate}`
            })),
            careers: career.map((item) => ({
                careerId: item.id,
                careerName: item.companyName,
                careerJob: item.job,
                careerPosition: item.position,
                careerDate: `${item.startDate}~${item.endDate}`
            })),
            educations: education.map((item) => ({
                eduId: item.id,
                edu: item.history,
                credit: `${item.scorePoint}/${item.scoreStandard}`,
                eduDate: item.date
            })),
            certificates: certificate.map((item) => ({
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

        api.put(`/api/personal/resumes/${userId}/update`, formData)
            .then(response => {
                alert("저장되었습니다.");
                navigate(`/personal/resumes/view/${userId}`);
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
                            <button className="resume_delete_btn" onClick={handleDelete}>삭제하기</button>
                            <button className="resume_save_btn" onClick={EditSave}>저장하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ResumeEdit;
