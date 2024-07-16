import React, { useEffect, useState } from "react";
import "./../../styles/ResumeCertificate.css";
import ResumeCertificateInputView from "./../ResumeCertificate/ResumeCertificateInputView";
import axios from "axios";

const ResumeCertificateView = () => {
    const userId = 7; // 사용자 ID
    const [certificateData, setCertificateData] = useState([]);

    useEffect(() => {
        axios.get(`/api/resumes/${userId}`)
            .then(response => {
                setCertificateData(response.data.certificates);
            })
            .catch(error => {
                console.log("certData 호출 실패", error);
            });
    }, [userId]);

    return (
        <div className="resume_cert">
            <div className="resume_cert_title">
                <p className="cert_title">자격증</p>
            </div>
            <div className="resume_bar"></div>
            {certificateData.map((cert, index) => (
                <ResumeCertificateInputView
                    key={index}
                    certDate={cert.cert_date}
                    certName={cert.cert}
                />
            ))}
        </div>
    );
}

export default ResumeCertificateView;
