import React, { useEffect, useState } from "react";
import "./../../styles/ResumeCertificate.css";
import ResumeCertificateInputView from "./../ResumeCertificate/ResumeCertificateInputView";
import axios from "axios";
import config from '../../../config';

const ResumeCertificateView = () => {
    const userId = localStorage.getItem("userId")
    const [certificateData, setCertificateData] = useState([]);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
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
                    certDate={cert.certDate}
                    certName={cert.cert}
                />
            ))}
        </div>
    );
};

export default ResumeCertificateView;
