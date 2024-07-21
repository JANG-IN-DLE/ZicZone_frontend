import React from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeCertificateInputEdit = ({ id, date, name, removeInput, updateCertificate }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateCertificate(id, { [name]: value });
    };

    return (
        <div className="resume_cert_input">
            <div className="resume_circle"></div>
            <div className="cert_date">
                <input
                    type="text"
                    name="date"
                    placeholder="YYYY.MM"
                    value={date}
                    onChange={handleChange}
                    maxLength={7}
                />
            </div>
            <div className="cert_history">
                <input
                    type="text"
                    name="name"
                    placeholder="자격증 이름"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
}

export default ResumeCertificateInputEdit;
