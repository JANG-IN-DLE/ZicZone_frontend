import React, { useState, useEffect } from "react";
import resume_delete from "./../../assets/Minus.png";

const ResumeCurriculumInput = ({ id, removeInput, updateCurriculum }) => {
    const [curriculum, setCurriculum] = useState({
        startDate: "",
        endDate: "",
        course: "",
        institution: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurriculum((prevCurriculum) => ({
            ...prevCurriculum,
            [name]: value
        }));
    };

    // useEffect(() => {
    //     updateCurriculum(id, curriculum);
    // }, [curriculum]);

    return (
        <div className="resume_curri_input">
            <div className="resume_circle"></div>
            <div className="curri_date">
                <input type="text" name="startDate" placeholder="YYYY.MM" value={curriculum.startDate} onChange={handleChange} maxLength={7} />
                <p>~</p>
                <input type="text" name="endDate" placeholder="YYYY.MM" value={curriculum.endDate} onChange={handleChange} maxLength={7} />
            </div>
            <div className="curri_history">
                <input type="text" name="course" placeholder="교육과정" value={curriculum.course} onChange={handleChange} />
                <div className="curri_company">
                    <input className="career_curri_position" type="text" name="institution" placeholder="교육기관" value={curriculum.institution} onChange={handleChange} />
                </div>
            </div>
            <div className="cert_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    )
}

export default ResumeCurriculumInput;
