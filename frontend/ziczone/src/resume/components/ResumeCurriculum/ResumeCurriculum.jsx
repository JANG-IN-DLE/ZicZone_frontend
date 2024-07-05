import React from "react";
import "./../../styles/ResumeCurriculum.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCurriculumInput from "./../ResumeCurriculum/ResumeCurriculumInput";
import useAddInput from "./../../hooks/useAddInput"

const ResumeCurriculum = () => {
    const [inputs, addInput] = useAddInput(<ResumeCurriculumInput key={0} />);

    return (
        <div className="resume_curri">
            <div className="resume_curri_title">
                <p className="curri_title">교육이력</p>
                <div className="plus_button" onClick={() => addInput(ResumeCurriculumInput)}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs}
        </div>
    );
}

export default ResumeCurriculum;
