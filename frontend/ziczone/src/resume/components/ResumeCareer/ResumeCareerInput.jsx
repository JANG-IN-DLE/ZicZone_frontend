import React, { useState, useEffect } from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeCareerInput = ({ id, removeInput, updateCareer }) => {
    const [career, setCareer] = useState({
        startDate: "",
        endDate: "",
        companyName: "",
        position: "",
        job: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCareer((prevCareer) => ({
            ...prevCareer,
            [name]: value
        }));
    };

    useEffect(() => {
        updateCareer(id, career);
    }, [career]);

    return (
        <div className="resume_career_input">
            <div className="resume_circle"></div>
            <div className="career_date">
                <input type="text" name="startDate" placeholder="YYYY.MM" value={career.startDate} onChange={handleChange} />
                <p>~</p>
                <input type="text" name="endDate" placeholder="YYYY.MM" value={career.endDate} onChange={handleChange} />
            </div>
            <div className="career_history">
                <input type="text" name="companyName" placeholder="기업명" value={career.companyName} onChange={handleChange} />
                <div className="career_company">
                    <input className="career_company_position" type="text" name="position" placeholder="직책" value={career.position} onChange={handleChange} />
                    <p> / </p>
                    <input className="career_company_job" type="text" name="job" placeholder="직무" value={career.job} onChange={handleChange} />
                </div>
            </div>
            <div className="career_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumeCareerInput;
