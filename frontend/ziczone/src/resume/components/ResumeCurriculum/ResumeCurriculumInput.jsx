import React from "react";

const ResumeCurriculumInput = () => {

    return (
        <div className="resume_curri_input">
            <div className="resume_circle"></div>
            <div className="curri_date">
                <input type="text" placeholder="YYYY.MM" />
                <p>~</p>
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="curri_history">
                <input type="text" placeholder="교육과정" />
                <div className="curri_company">
                    <input className="career_curri_position" type="text" placeholder="교육기관" />
                </div>
            </div>
        </div>
    )
}

export default ResumeCurriculumInput