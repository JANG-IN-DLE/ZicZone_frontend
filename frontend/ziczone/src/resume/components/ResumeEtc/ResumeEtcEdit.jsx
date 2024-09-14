import React, { useState, useEffect } from "react";
import "./../../styles/ResumeEtc.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeEtcInputEdit from "./ResumeEtcInputEdit";
import api from '../../../common/config/axiosInstance';

const ResumeEtcEdit = ({ setEtc }) => {
    const userId = localStorage.getItem("userId")
    const [inputs, setInputs] = useState([]);
    const [etcList, setEtcList] = useState([]);

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.etcs.map(etc => ({
                    id: etc.etcId,
                    startDate: etc.etcDate.split('~')[0],
                    description: etc.etcContent
                }));
                setEtcList(data);
                setInputs(data.map(etc => etc.id));
                setEtc(data);  // 초기 데이터 설정
            })
            .catch(error => {
                console.error("Error fetching etc data", error);
            });
    }, [userId, setEtc]);

    const updateEtc = (id, newEtc) => {
        setEtcList((prevList) => {
            const updatedList = prevList.map((etc) =>
                etc.id === id ? { ...etc, ...newEtc } : etc
            );
            setEtc(updatedList);
            return updatedList;
        });
    };

    const addEtcInput = () => {
        const id = new Date().getTime();
        const newEtc = { id, startDate: "", description: "" };
        setInputs((prevInputs) => [...prevInputs, id]);
        setEtcList((prevList) => [...prevList, newEtc]);
        setEtc((prevList) => [...prevList, newEtc]);
    };

    const removeEtcInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter(inputId => inputId !== id));
        const updatedList = etcList.filter((etc) => etc.id !== id);
        setEtcList(updatedList);
        setEtc(updatedList);
    };

    return (
        <div className="resume_etc">
            <div className="resume_etc_title">
                <p className="etc_title">기타사항</p>
                <p className="etc_warning">* 대외활동, 수상경력 등 자신의 능력을 마음껏 보여주세요!</p>
                <div className="plus_button" onClick={addEtcInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => {
                const etc = etcList.find(etc => etc.id === id);
                return (
                    <ResumeEtcInputEdit
                        key={id}
                        id={id}
                        startDate={etc?.startDate || ""}
                        description={etc?.description || ""}
                        removeInput={() => removeEtcInput(id)}
                        updateEtc={updateEtc}
                    />
                );
            })}
        </div>
    );
}

export default ResumeEtcEdit;
