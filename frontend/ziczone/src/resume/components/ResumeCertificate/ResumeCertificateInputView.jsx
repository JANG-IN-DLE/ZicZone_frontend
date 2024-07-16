import React from "react";

const ResumeCertificateInputView = ({ certDate, certName }) => {
    return (
        <div className="resume_cert_input">
            <div className="resume_circle"></div>
            <div className="cert_date">
                <p>{certDate}</p>
            </div>
            <div className="cert_history">
                <p>{certName}</p>
            </div>
        </div>
    );
}

export default ResumeCertificateInputView;
