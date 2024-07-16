import React, { useEffect, useState } from "react";
import "./../../styles/ResumeCurriculum.css";
import ResumeCurriculumInputView from "./../ResumeCurriculum/ResumeCurriculumInputView";
import axios from "axios";

const ResumeCurriculumView = () => {
    const userId = 7; // 사용자 ID
    const [curriculumData, setCurriculumData] = useState([]);

    useEffect(() => {
        axios.get(`/api/resumes/${userId}`)
            .then(response => {
                setCurriculumData(response.data.curriculums);
            })
            .catch(error => {
                console.log("curriData 호출 실패", error);
            });
    }, [userId]);

    return (
        <div className="resume_curri">
            <div className="resume_curri_title">
                <p className="curri_title">교육이력</p>
            </div>
            <div className="resume_bar"></div>
            {curriculumData.map((curri, index) => (
                <ResumeCurriculumInputView
                    key={index}
                    curriDate={curri.curri_date}
                    curriContent={curri.curri_content}
                    curriCompany={curri.curri_company}
                />
            ))}
        </div>
    );
};

export default ResumeCurriculumView;
