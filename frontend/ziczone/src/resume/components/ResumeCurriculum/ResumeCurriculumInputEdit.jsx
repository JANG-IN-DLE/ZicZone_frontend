import React from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeCurriculumInputEdit = ({ id, removeInput, updateCurriculum }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateCurriculum(id, { [name]: value });
    };

    return (
        <div className="resume_curri_input">
            <div className="resume_circle"></div>
            <div className="curri_date">
                <input
                    type="text"
                    name="startDate"
                    placeholder="YYYY.MM"
                    onChange={handleChange}
                />
                <p>~</p>
                <input
                    type="text"
                    name="endDate"
                    placeholder="YYYY.MM"
                    onChange={handleChange}
                />
            </div>
            <div className="curri_history">
                <input
                    type="text"
                    name="course"
                    placeholder="교육과정"
                    onChange={handleChange}
                />
                <div className="curri_company">
                    <input
                        className="career_curri_position"
                        type="text"
                        name="institution"
                        placeholder="교육기관"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumeCurriculumInputEdit;
