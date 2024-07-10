import React from "react";
import "./../../styles/ResumeCertificate.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCertificateInput from "./../ResumeCertificate/ResumeCertificateInput";
import useAddInput from "./../../hooks/useAddInput"

const ResumeCertificate = () => {
    const [inputs, addInput, removeInput] = useAddInput();

    return (
        <div className="resume_cert">
            <div className="resume_cert_title">
                <p className="cert_title">자격증</p>
                <div className="plus_button" onClick={addInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => (
                <ResumeCertificateInput key={id} id={id} removeInput={() => removeInput(id)} />
            ))}
        </div>
    );
}

export default ResumeCertificate;