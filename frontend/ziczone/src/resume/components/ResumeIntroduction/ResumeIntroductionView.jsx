// ResumeIntroductionView.js
import React, { useEffect, useState } from "react";
import "./../../styles/ResumeIntroduction.css";
import ResumeIntroductionInputView from "./ResumeIntroductionInputView";
import api from '../../../common/config/axiosInstance';

const ResumeIntroductionView = () => {
    const userId = localStorage.getItem("userId")
    const [personalStateFileName, setPersonalStateFileName] = useState('');


    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setPersonalStateFileName(response.data.personalStateFileName);
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
            <ResumeIntroductionInputView personalStateFileName={personalStateFileName} />
        </div>
    );
}

export default ResumeIntroductionView;