import React from "react";

const ResumeCertificateInput = () => {

    return (
        <div className="resume_cert_input">
            <div className="resume_circle"></div>
            <div className="cert_date">
                <input type="text" placeholder="YYYY.MM" />
                <p>~</p>
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="cert_history">
                <input type="text" placeholder="자격증 이름" />
            </div>
        </div>
    )
}

export default ResumeCertificateInput