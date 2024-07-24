import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../styles/Resume.css";
import Header from "../../common/header/components/Header";
import ResumePrivacy from "./ResumePrivacy/ResumePrivacy";
import ResumeJob from "./ResumeJob/ResumeJob";
import ResumeTech from "./ResumeTech/ResumeTech";
import ResumeEducation from "./../components/ResumeEducation/ResumeEducation";
import ResumeCareer from "./ResumeCareer/ResumeCareer";
import ResumeCurriculum from "./ResumeCurriculum/ResumeCurriculum";
import ResumeCertificate from "./ResumeCertificate/ResumeCertificate";
import ResumeEtc from "./ResumeEtc/ResumeEtc";
import ResumeArchive from "./ResumeArchive/ResumeArchive";
import ResumeIntroduction from "./ResumeIntroduction/ResumeIntroduction";
import ResumePortfolio from "./ResumePortfolio/ResumePortfolio";
import Layout from "../../common/layout/layout";

const Resume = () => {
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
    const [introduction, setIntroduction] = useState(null);
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        console.log("Introduction updated:", portfolio);
    }, [portfolio]);

    const handleSave = async () => {
        const resumeDTO = {
            resumeName: privacy.resumeName,
            resumeDate: privacy.resumeDate,
            phoneNum: privacy.resumePhone,
            resumePhotoUrl: privacy.resumePhotoUrl,
            resumePhotoFileName: privacy.resumePhotoFileName,
            resumeEmail: privacy.resumeEmail,
            personalStateUrl: introduction.file,
            personalStateFileName: introduction.file,
            userId: userId,
            archive: {
                archGit: archive.github,
                archNotion: archive.notion,
                archBlog: archive.blog
            },
            etcs: etc.map((item) => ({
                etcContent: item.description,
                etcDate: item.startDate
            })),
            curriculums: curriculum.map((item) => ({
                curriContent: item.course,
                curriCompany: item.institution,
                curriDate: `${item.startDate}~${item.endDate}`
            })),
            careers: career.map((item) => ({
                careerName: item.companyName,
                careerJob: item.job,
                careerPosition: item.position,
                careerDate: `${item.startDate}~${item.endDate}`
            })),
            educations: education.map((item) => ({
                edu: item.history,
                credit: `${item.scorePoint}/${item.scoreStandard}`,
                eduDate: item.date
            })),
            certificates: certificate.map((item) => ({
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
                portFileUrl: item.fileUrl,
                portFileUuid: item.fileUuid,
                portFileName: item.fileName,
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

        if (introduction) {
            formData.append("personalState", introduction);
        }

        // formData 내용을 출력
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            const response = await axios.post(`/api/personal/resumes/${userId}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log('응답 데이터:', response.data);
            alert("저장되었습니다.");
        } catch (error) {
            console.error('저장 중 오류 발생:', error);
            alert("저장 중 오류가 발생했습니다.");
        }
    };

    return (
        <Layout>
            <div>
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
        </Layout>
    );
};

export default Resume;
