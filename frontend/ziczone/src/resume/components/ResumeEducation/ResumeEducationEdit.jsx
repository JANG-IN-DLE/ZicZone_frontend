import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../styles/ResumeEducation.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeEducationInputEdit from "./ResumeEducationInputEdit";

const ResumeEducationEdit = ({ setEducation }) => {
    const userId = localStorage.getItem("userId")
    const [inputs, setInputs] = useState([]);
    const [educationList, setEducationList] = useState([]);

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.educations.map(edu => ({
                    id: edu.eduId,
                    date: edu.eduDate,
                    history: edu.edu,
                    scorePoint: edu.credit.split('/')[0],
                    scoreStandard: edu.credit.split('/')[1]
                }));
                setEducationList(data);
                setInputs(data.map(edu => edu.id));
                setEducation(data);  // 초기 데이터 설정
            })
            .catch(error => {
                console.error("Error fetching education data", error);
            });
    }, [userId, setEducation]);

    const updateEducation = (id, newEducation) => {
        setEducationList((prevList) => {
            const updatedList = prevList.map((edu) =>
                edu.id === id ? { ...edu, ...newEducation } : edu
            );
            setEducation(updatedList);
            return updatedList;
        });
    };

    const addEducationInput = () => {
        const id = new Date().getTime();
        const newEducation = { id, date: "", history: "", scorePoint: "", scoreStandard: "" };
        setInputs((prevInputs) => [...prevInputs, id]);
        setEducationList((prevList) => [...prevList, newEducation]);
        setEducation((prevList) => [...prevList, newEducation]);
    };

    const removeEducationInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter(inputId => inputId !== id));
        const updatedList = educationList.filter((edu) => edu.id !== id);
        setEducationList(updatedList);
        setEducation(updatedList);
    };

    return (
        <div className="resume_edu">
            <div className="resume_edu_title">
                <p className="edu_title">학력</p>
                <p className="edu_warning">* 학교명은 노출될 수 있습니다.</p>
                <div className="plus_button" onClick={addEducationInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => {
                const education = educationList.find(edu => edu.id === id);
                return (
                    <ResumeEducationInputEdit
                        key={id}
                        id={id}
                        date={education?.date || ""}
                        history={education?.history || ""}
                        scorePoint={education?.scorePoint || ""}
                        scoreStandard={education?.scoreStandard || ""}
                        removeInput={() => removeEducationInput(id)}
                        updateEducation={updateEducation}
                    />
                );
            })}
        </div>
    );
};

export default ResumeEducationEdit;
