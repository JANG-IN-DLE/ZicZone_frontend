import React, { useEffect, useState } from "react";
import "./../../styles/ResumeIntroduction.css";
import ResumeIntroductionInputView from "./ResumeIntroductionInputView";
import axios from "axios";

const ResumeIntroductionView = () => {
    const userId = localStorage.getItem("userId")
    const [personalState, setPersonalState] = useState('');

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setPersonalState(response.data.personalState);
            })
            .catch(error => {
                console.log("personalState 호출 실패", error);
            });
    }, [userId]);

    return (
        <div className="resume_introduction">
            <div className="resume_introduction_title">
                <p className="introduction_title">자기소개서</p>
                <p className="introduction_warning">* 자기소개서는 하나의 파일만 첨부 가능합니다. </p>
            </div>
            <div className="resume_bar"></div>
            <ResumeIntroductionInputView personalState={personalState} />
        </div>
    );
}

export default ResumeIntroductionView;
