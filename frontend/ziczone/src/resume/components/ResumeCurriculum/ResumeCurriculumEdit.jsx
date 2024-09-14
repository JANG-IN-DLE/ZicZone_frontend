import React, { useState, useEffect } from "react";
import "./../../styles/ResumeCurriculum.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCurriculumInputEdit from "./ResumeCurriculumInputEdit";
import api from '../../../common/config/axiosInstance';

const ResumeCurriculum = ({ setCurriculum }) => {
    const userId = localStorage.getItem("userId")
    const [inputs, setInputs] = useState([]);
    const [curriculumList, setCurriculumList] = useState([]);

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.curriculums.map(curri => ({
                    id: curri.curriId,
                    startDate: curri.curriDate.split('~')[0],
                    endDate: curri.curriDate.split('~')[1],
                    course: curri.curriContent,
                    institution: curri.curriCompany
                }));
                setCurriculumList(data);
                setInputs(data.map(curri => curri.id));
                setCurriculum(data);  // 초기 데이터 설정
            })
            .catch(error => {
                console.error("Error fetching curriculum data", error);
            });
    }, [userId, setCurriculum]);

    const updateCurriculum = (id, newCurriculum) => {
        setCurriculumList((prevList) => {
            const updatedList = prevList.map((curriculum) =>
                curriculum.id === id ? { ...curriculum, ...newCurriculum } : curriculum
            );
            setCurriculum(updatedList);
            return updatedList;
        });
    };

    const addCurriculumInput = () => {
        const id = new Date().getTime();
        const newCurriculum = { id, startDate: "", endDate: "", course: "", institution: "" };
        setInputs((prevInputs) => [...prevInputs, id]);
        setCurriculumList((prevList) => [...prevList, newCurriculum]);
        setCurriculum((prevList) => [...prevList, newCurriculum]);
    };

    const removeCurriculumInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter(inputId => inputId !== id));
        const updatedList = curriculumList.filter((curriculum) => curriculum.id !== id);
        setCurriculumList(updatedList);
        setCurriculum(updatedList);
    };

    return (
        <div className="resume_curri">
            <div className="resume_curri_title">
                <p className="curri_title">교육이력</p>
                <div className="plus_button" onClick={addCurriculumInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => {
                const curriculum = curriculumList.find(curri => curri.id === id);
                return (
                    <ResumeCurriculumInputEdit
                        key={id}
                        id={id}
                        startDate={curriculum?.startDate || ""}
                        endDate={curriculum?.endDate || ""}
                        course={curriculum?.course || ""}
                        institution={curriculum?.institution || ""}
                        removeInput={() => removeCurriculumInput(id)}
                        updateCurriculum={updateCurriculum}
                    />
                );
            })}
        </div>
    );
};

export default ResumeCurriculum;
