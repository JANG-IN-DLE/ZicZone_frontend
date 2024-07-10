import React from "react";
import resume_delete from "./../../assets/Minus.png"

const ResumeCurriculumInput = ({ id, removeInput }) => {
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
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    )
}

export default ResumeCurriculumInput