import React, { useEffect, useState } from "react";
import "./../../styles/ResumeCertificate.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCertificateInput from "./ResumeCertificateInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCertificate = ({ setCertificate }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [certificateList, setCertificateList] = useState([]);

    const updateCertificate = (id, newCertificate) => {
        setCertificateList((prevList) => {
            const updatedList = prevList.map((certificate) =>
                certificate.id === id ? { ...certificate, ...newCertificate } : certificate
            );
            if (!updatedList.find(certificate => certificate.id === id)) {
                updatedList.push({ id, ...newCertificate });
            }
            return updatedList;
        });
    };

    const addCertificateInput = () => {
        const id = addInput();
        setCertificateList((prevList) => [...prevList, { id, date: "", name: "" }]);
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
                    removeInput={() => {
                        removeInput(id);
                        setCertificateList((prevList) => 
                            prevList.filter((certificate) => certificate.id !== id)
                        );
                    }}
                    updateCertificate={updateCertificate}
                />
            ))}
        </div>
    );
}

export default ResumeCertificate;
