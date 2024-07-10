import React from "react";
import "./../../styles/ResumeCertificate.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCertificateInputView from "./../ResumeCertificate/ResumeCertificateInputView";
import useAddInput from "./../../hooks/useAddInput"

const ResumeCertificateView= ({ certificates }) => {
    return (
        <div className="resume_cert">
            <div className="resume_cert_title">
                <p className="cert_title">자격증</p>
            </div>
            <div className="resume_bar"></div>
            {certificates.map((certificate, index) => {
                const [ cert, date ] = certificate.split(',');
                return (
                    <ResumeCertificateInputView
                        key={index}
                        cert={cert}
                        date={date}
                    />
                );
            })}
        </div>
    );
};

export default ResumeCertificateView;
