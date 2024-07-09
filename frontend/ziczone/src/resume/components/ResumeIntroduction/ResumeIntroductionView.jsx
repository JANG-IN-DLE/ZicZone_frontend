import React from "react";
import "./../../styles/ResumeIntroduction.css"
import ResumeIntroductionInputView from "./ResumeIntroductionInputView"

const ResumeIntroductionView = () => {
    return (
        <div className="resume_introduction">
            <div className="resume_introduction_title">
                <p className="introduction_title">자기소개서</p>
                <p className="introduction_warning">* 자기소개서는 하나의 파일만 첨부 가능합니다. </p>
            </div>
            <div className="resume_bar"></div>
            <ResumeIntroductionInputView />
        </div>
    )
}

export default ResumeIntroductionView