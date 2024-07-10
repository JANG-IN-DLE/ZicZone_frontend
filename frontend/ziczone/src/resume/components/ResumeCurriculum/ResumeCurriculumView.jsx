import React from "react";
import "./../../styles/ResumeCurriculum.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCurriculumInputView from "./../ResumeCurriculum/ResumeCurriculumInputView";
import useAddInput from "./../../hooks/useAddInput"

const ResumeCurriculumView= ({ curriculums }) => {
    return (
        <div className="resume_curri">
            <div className="resume_curri_title">
                <p className="curri_title">교육이력</p>
            </div>
            <div className="resume_bar"></div>
            {curriculums.map((curriculum, index) => {
                const [ company, content, date ] = curriculum.split(',');
                return(
                    <ResumeCurriculumInputView
                        key={index}
                        company={company}
                        content={content}
                        date={date}
                    />
                );
            })}
        </div>
    );
};

export default ResumeCurriculumView;
