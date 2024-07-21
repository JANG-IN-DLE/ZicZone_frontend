import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../styles/ResumeEducation.css";
import ResumeEducationInputView from "./ResumeEducationInputView";

const ResumeEducationView = () => {
    const userId = localStorage.getItem("userId")
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setEducationData(response.data.educations);
            })
            .catch(error => {
                console.log("교육 데이터 호출 실패", error);
            });
    }, [userId]);

    return (
        <div className="resume_edu">
            <div className="resume_edu_title">
                <p className="edu_title">학력</p>
                <p className="edu_warning">* 학교명은 노출될 수 있습니다.</p>
            </div>
            <div className="resume_bar"></div>
            {educationData.map((edu, index) => (
                <ResumeEducationInputView
                    key={index}
                    eduDate={edu.eduDate}
                    eduSchool={edu.edu}
                    eduScore={edu.credit.split('/')[0]}
                    eduStandard={edu.credit.split('/')[1]}
                />
            ))}
        </div>
    );
};

export default ResumeEducationView;
