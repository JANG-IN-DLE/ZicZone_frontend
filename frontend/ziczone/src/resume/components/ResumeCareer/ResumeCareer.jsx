import React from "react";
import "./../../styles/ResumeCareer.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCareerInput from "./../ResumeCareer/ResumeCareerInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCareer = () => {
    const [inputs, addInput, removeInput] = useAddInput();

    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력사항</p>
                <div className="plus_button" onClick={addInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => (
                <ResumeCareerInput key={id} id={id} removeInput={() => removeInput(id)} />
            ))}
        </div>
    );
};

export default ResumeCareer;