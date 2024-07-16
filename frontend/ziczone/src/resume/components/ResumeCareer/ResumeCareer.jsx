import React, { useState } from "react";
import "./../../styles/ResumeCareer.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCareerInput from "./../ResumeCareer/ResumeCareerInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCareer = ({ setCareer }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [careerList, setCareerList] = useState([]);

    const updateCareer = (id, newCareer) => {
        setCareerList((prevList) => {
            const updatedList = prevList.map((career) =>
                career.id === id ? { ...career, ...newCareer } : career
            );
            setCareer(updatedList);
            return updatedList;
        });
    };

    const addCareerInput = () => {
        const id = addInput();
        setCareerList((prevList) => [...prevList, { id, startDate: "", endDate: "", companyName: "", position: "", job: "" }]);
    };

    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력사항</p>
                <div className="plus_button" onClick={addCareerInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => (
                <ResumeCareerInput
                    key={id}
                    id={id}
                    removeInput={() => removeInput(id)}
                    updateCareer={updateCareer}
                />
            ))}
        </div>
    );
};

export default ResumeCareer;
