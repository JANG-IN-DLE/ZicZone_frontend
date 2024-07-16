import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../../styles/ResumeCareer.css";
import ResumeCareerInputView from "./../ResumeCareer/ResumeCareerInputView";
import useViewInput from "./../../hooks/useViewInput";

const ResumeCareerView = () => {
    const userId = 7;

    const [careerData, setCareerData] = useState([]);

    useEffect(() => {
        axios.get(`/api/resumes/${userId}`)
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
                    careerDate={career.career_date}
                    careerName={career.career_name}
                    careerPosition={career.career_position}
                    careerJob={career.career_job}
                />
            ))}
        </div>
    );

};

export default ResumeCareerView;
