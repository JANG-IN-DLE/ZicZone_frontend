import React, { useState } from "react";
import "./../../styles/ResumeCareer.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCareerInputView from "./../ResumeCareer/ResumeCareerInputView";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCareerView = () => {
    const [inputs, addInput] = useAddInput(<ResumeCareerInputView key={0} />);

    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력사항</p>
            </div>
            <div className="resume_bar"></div>
            {inputs}
        </div>
    );
};

export default ResumeCareerView;
