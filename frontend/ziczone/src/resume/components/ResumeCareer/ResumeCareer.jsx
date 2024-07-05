import React, { useState } from "react";
import "./../../styles/ResumeCareer.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCareerInput from "./../ResumeCareer/ResumeCareerInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCareer = () => {
    const [inputs, addInput] = useAddInput(<ResumeCareerInput key={0} />);

    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력사항</p>
                <div className="plus_button" onClick={() => addInput(ResumeCareerInput)}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs}
        </div>
    );
};

export default ResumeCareer;
