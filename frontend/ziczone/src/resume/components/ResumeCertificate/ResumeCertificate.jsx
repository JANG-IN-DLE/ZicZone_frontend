import React, { useState, useEffect } from "react";
import "./../../styles/ResumeCertificate.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCertificateInput from "./../ResumeCertificate/ResumeCertificateInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCertificate = ({ setCertificate }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [certificateList, setCertificateList] = useState([]);

    const updateCertificate = (id, newCertificate) => {
        setCertificateList((prevList) => {
            const updatedList = prevList.map((certificate) =>
                certificate.id === id ? { ...certificate, ...newCertificate } : certificate
            );
            return updatedList;
        });
    };

    const addCertificateInput = () => {
        const id = addInput();
        setCertificateList((prevList) => [...prevList, { id, date: "", name: "" }]);
    };

    const handleRemoveInput = (id) => {
        removeInput(id);
        setCertificateList((prevList) => prevList.filter((certificate) => certificate.id !== id));
    };

    useEffect(() => {
        setCertificate(certificateList);
    }, [certificateList, setCertificate]);

    return (
        <div className="resume_cert">
            <div className="resume_cert_title">
                <p className="cert_title">자격증</p>
                <div className="plus_button" onClick={addCertificateInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => (
                <ResumeCertificateInput
                    key={id}
                    id={id}
                    removeInput={() => handleRemoveInput(id)}
                    updateCertificate={updateCertificate}
                />
            ))}
        </div>
    );
}

export default ResumeCertificate;
