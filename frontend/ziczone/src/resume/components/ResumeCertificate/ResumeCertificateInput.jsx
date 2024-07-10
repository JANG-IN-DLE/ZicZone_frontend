import React from "react";
import resume_delete from "./../../assets/Minus.png"

const ResumeCertificateInput = ({ id, removeInput }) => {
    return (
        <div className="resume_cert_input">
            <div className="resume_circle"></div>
            <div className="cert_date">
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="cert_history">
                <input type="text" placeholder="자격증 이름" />
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    )
}

export default ResumeCertificateInput