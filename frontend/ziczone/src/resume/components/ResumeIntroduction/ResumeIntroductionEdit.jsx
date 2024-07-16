import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../styles/ResumeIntroduction.css"
import ResumeIntroductionInputEdit from "./ResumeIntroductionInputEdit"

const ResumeIntroductionEdit = () => {
    const userId = 7;
    const [initialFileName, setInitialFileName] = useState('');

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        axios.get(`/api/resumes/${userId}`)
            .then(response => {
                const fileName = response.data.personalState; // 서버에서 가져온 파일 이름
                // console.log('Fetched fileName:', fileName)
                setInitialFileName(fileName);
            })
            .catch(error => {
                console.error("Error fetching personal state data", error);
            });
    }, []);

    return (
        <div className="resume_introduction">
            <div className="resume_introduction_title">
                <p className="introduction_title">자기소개서</p>
                <p className="introduction_warning">* 자기소개서는 하나의 파일만 첨부 가능합니다. </p>
            </div>
            <div className="resume_bar"></div>
            <ResumeIntroductionInputEdit initialFileName={initialFileName} />
        </div>
    )
}

export default ResumeIntroductionEdit;
