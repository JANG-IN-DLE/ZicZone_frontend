import React from "react";
import "./../../../../resume/styles/ResumeCertificate.css"
import ResumeCertificateInputView from "./ResumeCertificateInputView";

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