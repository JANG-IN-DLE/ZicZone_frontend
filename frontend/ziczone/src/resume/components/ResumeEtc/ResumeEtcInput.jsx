import React, { useState, useEffect } from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeEtcInput = ({ id, removeInput, updateEtc }) => {
    const [etc, setEtc] = useState({
        startDate: "",
        endDate: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEtc((prevEtc) => ({
            ...prevEtc,
            [name]: value
        }));
    };

    useEffect(() => {
        updateEtc(id, etc);
    }, [etc, id]);

    return (
        <div className="resume_etc_input">
            <div className="resume_circle"></div>
            <div className="etc_date">
                <input 
                    type="text" 
                    name="startDate" 
                    placeholder="YYYY.MM" 
                    value={etc.startDate} 
                    onChange={handleChange} 
                    maxLength={7}
                />
            </div>
            <div className="etc_history">
                <input 
                    type="text" 
                    name="description" 
                    placeholder="기타" 
                    value={etc.description} 
                    onChange={handleChange} 
                />
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumeEtcInput;
