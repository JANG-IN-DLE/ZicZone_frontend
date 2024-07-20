import React, { useEffect, useState } from "react";
import "./../../styles/ResumeCareer.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCareerInput from "./ResumeCareerInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeCareer = ({ setCareer }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [careerList, setCareerList] = useState([]);

    const updateCareer = (id, newCareer) => {
        setCareerList((prevList) => {
            const updatedList = prevList.map((career) =>
                career.id === id ? { ...career, ...newCareer } : career
            );
            if (!updatedList.find(career => career.id === id)) {
                updatedList.push({ id, ...newCareer });
            }
            return updatedList;
        });
    };

    const addCareerInput = () => {
        const id = addInput();
        setCareerList((prevList) => [...prevList, { id, startDate: "", endDate: "", companyName: "", position: "", job: "" }]);
    };

    useEffect(() => {
        setCareer(careerList);
    }, [careerList, setCareer]);

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
                    removeInput={() => {
                        removeInput(id);
                        setCareerList((prevList) => 
                            prevList.filter((career) => career.id !== id)
                        );
                    }}
                    updateCareer={updateCareer}
                />
            ))}
        </div>
    );
};

export default ResumeCareer;
