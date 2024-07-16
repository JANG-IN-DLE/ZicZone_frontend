import React from "react";

const ResumeCareerInputView = ({ careerDate, careerName, careerPosition, careerJob }) => {
    return (
        <div className="resume_career_input">
            <div className="resume_circle"></div>
            <div className="career_date">
                <p>{careerDate}</p>
            </div>
            <div className="career_history">
                <p>{careerName}</p>
                <div className="career_company">
                    <p>{careerPosition} / {careerJob}</p>
                </div>
            </div>
        </div>
    );
};

export default ResumeCareerInputView;
