import React from "react";

const ResumeEducationInputView = ({ eduDate, eduSchool, eduScore, eduStandard }) => {

    return (
        <div className="resume_edu_input">
            <div className="resume_circle"></div>
            <div className="edu_date">
                <p>{eduDate}</p>
            </div>
            <div className="edu_history">
                <p>{eduSchool}</p>
                <div className="edu_score">
                    <p>{eduScore} / {eduStandard}</p>
                </div>
            </div>
        </div>
    );
}

export default ResumeEducationInputView;

