import React from "react";
import "./../../styles/ResumeEducation.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeEducationInputView from "./ResumeEducationInputView";
import useAddInput from "./../../hooks/useAddInput";

const ResumeEducationView = ({educations}) => {
    return (
        <div className="resume_edu">
            <div className="resume_edu_title">
                <p className="edu_title">학력</p>
                <p className="edu_warning">* 학교명은 노출될 수 있습니다.</p>
            </div>
            <div className="resume_bar"></div>
            {educations.map((education, index) => {
                const [school, score, date] = education.split(',');
                return(
                    <ResumeEducationInputView 
                        key={index}
                        school={school}
                        score={score}
                        date={date}
                    />
                );
            })}
        </div>
    );
};

export default ResumeEducationView;
