import React, { useState, useEffect } from "react";
import "./../../styles/ResumeIntroduction.css";
import ResumeIntroductionInput from "./ResumeIntroductionInput";

const ResumeIntroduction = ({ setIntroduction }) => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        console.log("ResumeIntroduction - File updated:", file); // 파일 객체 확인
        setIntroduction(file);
    }, [file, setIntroduction]);

    return (
        <div className="resume_introduction">
            <div className="resume_introduction_title">
                <p className="introduction_title">자기소개서</p>
                <p className="introduction_warning">* 자기소개서는 하나의 파일만 첨부 가능합니다. </p>
            </div>
            <div className="resume_bar"></div>
            <ResumeIntroductionInput setFile={setFile} />
        </div>
    );
}

export default ResumeIntroduction;
