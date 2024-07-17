import React, { useState } from "react";
import "./../../../../resume/styles/ResumeCareer.css"
import ResumeCareerInputView from "./ResumeCareerInputView";

const ResumeCareerView = ({ careers }) => {

    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력사항</p>
            </div>
            <div className="resume_bar"></div>
            {careers.map((career, index) => {
                const [ company, job, position, date ] = career.split(',');
                return(
                    <ResumeCareerInputView 
                        key={index}
                        company={company}
                        job={job}
                        position={position}
                        date={date}
                    />
                );
            })}
        </div>
    );
};
export default ResumeCareerView;