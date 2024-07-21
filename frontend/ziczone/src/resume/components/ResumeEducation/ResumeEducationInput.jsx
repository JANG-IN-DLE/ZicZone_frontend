import React, { useState, useEffect } from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeEducationInput = ({ id, removeInput, updateEducation }) => {
    const [education, setEducation] = useState({
        date: "",
        history: "",
        scorePoint: "",
        scoreStandard: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevEducation) => ({
            ...prevEducation,
            [name]: value
        }));
    };

    useEffect(() => {
        updateEducation(id, education);
    }, [id, education]);

    return (
        <div className="resume_edu_input">
            <div className="resume_circle"></div>
            <div className="edu_date">
                <input
                    type="text"
                    name="date"
                    placeholder="YYYY.MM"
                    value={education.date}
                    onChange={handleChange}
                    maxLength={7}
                />
            </div>
            <div className="edu_history">
                <input
                    type="text"
                    name="history"
                    placeholder="OO대학교 OO학과 졸업"
                    value={education.history}
                    onChange={handleChange}
                    style={{width: "250px"}}
                />
                <div className="edu_score">
                    <input
                        className="edu_score_point"
                        type="text"
                        name="scorePoint"
                        placeholder="학점"
                        value={education.scorePoint}
                        onChange={handleChange}
                        maxLength={3}
                    />
                    <p> / </p>
                    <input
                        className="edu_score_standard"
                        type="text"
                        name="scoreStandard"
                        placeholder="기준학점"
                        value={education.scoreStandard}
                        onChange={handleChange}
                        maxLength={3}
                    />
                </div>
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumeEducationInput;
