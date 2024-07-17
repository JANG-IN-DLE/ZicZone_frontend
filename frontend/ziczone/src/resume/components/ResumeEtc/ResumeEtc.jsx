import React, { useState, useEffect } from "react";
import "./../../styles/ResumeEtc.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeEtcInput from "./ResumeEtcInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeEtc = ({ setEtc }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [etcList, setEtcList] = useState([]);

    const updateEtc = (id, newEtc) => {
        setEtcList((prevList) => {
            const updatedList = prevList.map((etc) =>
                etc.id === id ? { ...etc, ...newEtc } : etc
            );
            return updatedList;
        });
    };

    const addEtcInput = () => {
        const id = addInput();
        setEtcList((prevList) => [...prevList, { id, startDate: "", endDate: "", description: "" }]);
    };

    const handleRemoveInput = (id) => {
        removeInput(id);
        setEtcList((prevList) => prevList.filter((etc) => etc.id !== id));
    };

    useEffect(() => {
        setEtc(etcList);
    }, [etcList, setEtc]);

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
            {inputs.map((id) => (
                <ResumeEtcInput
                    key={id}
                    id={id}
                    removeInput={() => handleRemoveInput(id)}
                    updateEtc={updateEtc}
                />
            ))}
        </div>
    );
};

export default ResumeEtc;
