import React from "react";
import resume_delete from "./../../assets/Minus.png"

const ResumeEducationInput = ({ id, removeInput }) => {
    return (
        <div className="resume_edu_input">
            <div className="resume_circle"></div>
            <div className="edu_date">
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="edu_history">
                <input type="text" placeholder="OO대학교 OO학과 졸업" />
                <div className="edu_score">
                    <input className="edu_score_point" type="text" placeholder="학점" />
                    <p> / </p>
                    <input className="edu_score_standard" type="text" placeholder="기준학점" />
                </div>
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    )
}

export default ResumeEducationInput