import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../../styles/ResumeCareer.css";
import ResumeCareerInputView from "./../ResumeCareer/ResumeCareerInputView";
import useViewInput from "./../../hooks/useViewInput";

const ResumeCareerView = () => {
    const userId = localStorage.getItem("userId")

    const [careerData, setCareerData] = useState([]);

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setCareerData(response.data.careers)
            })
            .catch(error => {
                console.log("careerData 호출 실패", error)
            })
    }, [userId])


    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력사항</p>
            </div>
            <div className="resume_bar"></div>
            {careerData.map((career, index) => (
                <ResumeCareerInputView
                    key={index}
                    careerDate={career.careerDate}
                    careerName={career.careerName}
                    careerPosition={career.careerPosition}
                    careerJob={career.careerJob}
                />
            ))}
        </div>
    );

};

export default ResumeCareerView;
