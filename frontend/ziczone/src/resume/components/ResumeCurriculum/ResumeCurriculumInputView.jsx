import React from "react";

const ResumeCurriculumInputView = ({ curriDate, curriContent, curriCompany }) => {

    return (
        <div className="resume_curri_input">
            <div className="resume_circle"></div>
            <div className="curri_date">
                <p>{curriDate}</p>
            </div>
            <div className="curri_history">
                <p>{curriContent}</p>
                <div className="curri_company">
                    <p>{curriCompany}</p>
                </div>
            </div>
        </div>
    );
}

export default ResumeCurriculumInputView;
