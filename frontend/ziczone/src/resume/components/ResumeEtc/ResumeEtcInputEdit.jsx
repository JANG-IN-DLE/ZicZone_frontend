import React from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeEtcInputEdit = ({ id, startDate, description, removeInput, updateEtc }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateEtc(id, { [name]: value });
    };

    return (
        <div className="resume_etc_input">
            <div className="resume_circle"></div>
            <div className="etc_date">
                <input
                    type="text"
                    name="startDate"
                    placeholder="YYYY.MM"
                    value={startDate}
                    onChange={handleChange}
                />
            </div>
            <div className="etc_history">
                <input
                    type="text"
                    name="description"
                    placeholder="기타"
                    value={description}
                    onChange={handleChange}
                />
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumeEtcInputEdit;
