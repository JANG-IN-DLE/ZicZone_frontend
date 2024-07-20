import React, { useEffect, useState } from "react";
import "./../../styles/ResumeEducation.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeEducationInput from "./ResumeEducationInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumeEducation = ({ setEducation }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [educationList, setEducationList] = useState([]);

    const updateEducation = (id, education) => {
        console.log("JSON.stringify(education)" + JSON.stringify(education));
        console.log("JSON.stringify(id): " + JSON.stringify(id))
        setEducationList((prevList) => {
            // console.log("JSON.stringify(prevList): " + JSON.stringify(prevList))
            const updatedList = prevList.map((edu) =>
                edu.id === id ? { ...edu, ...education } : edu
            );
            console.log("JSON.stringify(updatedList): " + JSON.stringify(updatedList))
            if (!updatedList.find(edu => edu.id === id)) {
                updatedList.push({ id, ...education });
            }
            return updatedList;
        });
    };


    const addEducationInput = () => {
        const id = addInput();
        setEducationList((prevList) => [...prevList, { id, date: "", history: "", scorePoint: "", scoreStandard: "" }]);
    };
    useEffect(() => {
        console.log("educationList updated: ", educationList);
        setEducation(educationList);
    }, [educationList, setEducation]);

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
            {inputs.map((id) => (
                <ResumeEducationInput
                    key={id}
                    id={id}
                    removeInput={() => {removeInput(id);
                        setEducationList((prevList) => 
                            prevList.filter((edu) => edu.id !== id)
                        );
                    }}
                    updateEducation={updateEducation}
                />
            ))}
        </div>
    );
};

export default ResumeEducation;
