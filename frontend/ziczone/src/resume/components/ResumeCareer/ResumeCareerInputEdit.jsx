import React from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeCareerInputEdit = ({ id, startDate, endDate, companyName, position, job, removeInput, updateCareer }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateCareer(id, { [name]: value });
    };

    return (
        <div className="resume_career_input">
            <div className="resume_circle"></div>
            <div className="career_date">
                <input
                    type="text"
                    name="startDate"
                    placeholder="YYYY.MM"
                    value={startDate}
                    onChange={handleChange}
                    maxLength={7}
                />
                <p>~</p>
                <input
                    type="text"
                    name="endDate"
                    placeholder="YYYY.MM"
                    value={endDate}
                    onChange={handleChange}
                    maxLength={7}
                />
            </div>
            <div className="career_history">
                <input
                    type="text"
                    name="companyName"
                    placeholder="기업명"
                    value={companyName}
                    onChange={handleChange}
                    style={{width: "250px"}}
                />
                <div className="career_company">
                    <input
                        className="career_company_position"
                        type="text"
                        name="position"
                        placeholder="직책"
                        value={position}
                        onChange={handleChange}
                    />
                    <p> / </p>
                    <input
                        className="career_company_job"
                        type="text"
                        name="job"
                        placeholder="직무"
                        value={job}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="career_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumeCareerInputEdit;
