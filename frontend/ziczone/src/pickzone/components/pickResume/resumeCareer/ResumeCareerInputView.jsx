import React from "react";

const ResumeCareerInputView = ({company, job, position, date}) => {
    return (
        <div className="resume_career_input">
            <div className="resume_circle"></div>
            <div className="career_date">
                <p>{date}</p>
            </div>
            <div className="career_history">
                <p>{company}</p>
                <div className="career_company">
                    <p>{job} / {position}</p>
                </div>
            </div>
        </div>
    );
};
export default ResumeCareerInputView;