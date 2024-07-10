import React from "react";
import resume_delete from "./../../assets/Minus.png"

const ResumeEtcInput = ({ id, removeInput }) => {

    return (
        <div className="resume_etc_input">
            <div className="resume_circle"></div>
            <div className="etc_date">
                <input type="text" placeholder="YYYY.MM" />
                <p>~</p>
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="etc_history">
                <input type="text" placeholder="기타" />
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="" />
            </div>
        </div>
    )
}

export default ResumeEtcInput