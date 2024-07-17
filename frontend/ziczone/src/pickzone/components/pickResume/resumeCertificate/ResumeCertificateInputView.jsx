import React from "react";

const ResumeCertificateInputView = ({ cert, date }) => {

    return (
        <div className="resume_cert_input">
            <div className="resume_circle"></div>
            <div className="cert_date">
                <p>{date}</p>
            </div>
            <div className="cert_history">
                <p>{cert}</p>
            </div>
        </div>
    )
}
export default ResumeCertificateInputView