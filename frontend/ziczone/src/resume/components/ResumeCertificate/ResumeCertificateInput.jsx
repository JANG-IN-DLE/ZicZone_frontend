import React, { useState, useEffect } from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeCertificateInput = ({ id, removeInput, updateCertificate }) => {
    const [certificate, setCertificate] = useState({
        date: "",
        name: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCertificate((prevCertificate) => ({
            ...prevCertificate,
            [name]: value
        }));
    };

    useEffect(() => {
        updateCertificate(id, certificate);
    }, [certificate, id]);

    return (
        <div className="resume_cert_input">
            <div className="resume_circle"></div>
            <div className="cert_date">
                <input 
                    type="text" 
                    name="date" 
                    placeholder="YYYY.MM" 
                    value={certificate.date} 
                    onChange={handleChange}
                    maxLength={7}
                />
            </div>
            <div className="cert_history">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="자격증 이름" 
                    value={certificate.name} 
                    onChange={handleChange} 
                />
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
}

export default ResumeCertificateInput;
