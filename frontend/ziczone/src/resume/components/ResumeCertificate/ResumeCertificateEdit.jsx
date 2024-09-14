import React, { useState, useEffect } from "react";
import "./../../styles/ResumeCertificate.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCertificateInputEdit from "./ResumeCertificateInputEdit";
import api from '../../../common/config/axiosInstance';

const ResumeCertificateEdit = ({ setCertificate }) => {
    const userId = localStorage.getItem("userId")
    const [inputs, setInputs] = useState([]);
    const [certificateList, setCertificateList] = useState([]);

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.certificates.map(cert => ({
                    id: cert.certId,
                    date: cert.certDate,
                    name: cert.cert
                }));
                setCertificateList(data);
                setInputs(data.map(cert => cert.id));
                setCertificate(data);  // 초기 데이터 설정
            })
            .catch(error => {
                console.error("Error fetching certificate data", error);
            });
    }, [userId, setCertificate]);

    const updateCertificate = (id, newCertificate) => {
        setCertificateList((prevList) => {
            const updatedList = prevList.map((certificate) =>
                certificate.id === id ? { ...certificate, ...newCertificate } : certificate
            );
            setCertificate(updatedList);
            return updatedList;
        });
    };

    const addCertificateInput = () => {
        const id = new Date().getTime();
        const newCertificate = { id, date: "", name: "" };
        setInputs((prevInputs) => [...prevInputs, id]);
        setCertificateList((prevList) => [...prevList, newCertificate]);
        setCertificate((prevList) => [...prevList, newCertificate]);
    };

    const removeCertificateInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter(inputId => inputId !== id));
        const updatedList = certificateList.filter((certificate) => certificate.id !== id);
        setCertificateList(updatedList);
        setCertificate(updatedList);
    };

    return (
        <div className="resume_cert">
            <div className="resume_cert_title">
                <p className="cert_title">자격증</p>
                <div className="plus_button" onClick={addCertificateInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => {
                const certificate = certificateList.find(cert => cert.id === id);
                return (
                    <ResumeCertificateInputEdit
                        key={id}
                        id={id}
                        date={certificate?.date || ""}
                        name={certificate?.name || ""}
                        removeInput={() => removeCertificateInput(id)}
                        updateCertificate={updateCertificate}
                    />
                );
            })}
        </div>
    );
}

export default ResumeCertificateEdit;
