import React from "react";
import "./../../styles/ResumeCertificate.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCertificateInputView from "./../ResumeCertificate/ResumeCertificateInputView";
import useAddInput from "./../../hooks/useAddInput"

const ResumeCertificateView= () => {
    const [inputs, addInput] = useAddInput(<ResumeCertificateInputView key={0} />);

    return (
        <div className="resume_cert">
            <div className="resume_cert_title">
                <p className="cert_title">자격증</p>
            </div>
            <div className="resume_bar"></div>
            {inputs}
        </div>
    );
}

export default ResumeCertificateView;
