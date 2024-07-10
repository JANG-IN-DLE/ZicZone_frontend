import React from "react";

const ResumeCurriculumInputView = ({ company, content, date }) => {

    return (
        <div className="resume_curri_input">
            <div className="resume_circle"></div>
            <div className="curri_date">
                <p>{date}</p>
            </div>
            <div className="curri_history">
                <p>{company}</p>
                <div className="curri_company">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCurriculumInputView