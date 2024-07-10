import React from "react";

const ResumeEducationInputView = ({ school, score, date }) => {

    return (
        <div className="resume_edu_input">
            <div className="resume_circle"></div>
            <div className="edu_date">
                <p>{date}</p>
            </div>
            <div className="edu_history">
                <p>{school}</p>
                <div className="edu_score">
                    <p>{score}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeEducationInputView;