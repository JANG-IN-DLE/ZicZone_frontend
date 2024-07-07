import React from "react";

const ResumeCareerInput = () => {
    return (
        <div className="resume_career_input">
            <div className="resume_circle"></div>
            <div className="career_date">
                <input type="text" placeholder="YYYY.MM" />
                <p>~</p>
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="career_history">
                <input type="text" placeholder="기업명" />
                <div className="career_company">
                    <input className="career_company_position" type="text" placeholder="직책" />
                    <p>/</p>
                    <input className="career_company_job" type="text" placeholder="직무" />
                </div>
            </div>
        </div>
    );
};

export default ResumeCareerInput;
