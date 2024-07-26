import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../styles/ResumeCareer.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeCareerInputEdit from "./ResumeCareerInputEdit";
import config from '../../../config';

const ResumeCareerEdit = ({ setCareer }) => {
    const userId = localStorage.getItem("userId")
    const [inputs, setInputs] = useState([]);
    const [careerList, setCareerList] = useState([]);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.careers.map(career => ({
                    id: career.careerId,
                    startDate: career.careerDate.split('~')[0],
                    endDate: career.careerDate.split('~')[1],
                    companyName: career.careerName,
                    position: career.careerPosition,
                    job: career.careerJob
                }));
                setCareerList(data);
                setInputs(data.map(career => career.id));
                setCareer(data);  // 초기 데이터 설정
            })
            .catch(error => {
                console.error("Error fetching career data", error);
            });
    }, [userId, setCareer]);

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
        const id = new Date().getTime();
        const newCareer = { id, startDate: "", endDate: "", companyName: "", position: "", job: "" };
        setInputs((prevInputs) => [...prevInputs, id]);
        setCareerList((prevList) => [...prevList, newCareer]);
        setCareer((prevList) => [...prevList, newCareer]);
    };

    const removeCareerInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter(inputId => inputId !== id));
        const updatedList = careerList.filter((career) => career.id !== id);
        setCareerList(updatedList);
        setCareer(updatedList);
    };

    // console.log("확인: " + JSON.stringify(careerList))

    return (
        <div className="resume_career">
            <div className="resume_career_title">
                <p className="career_title">경력</p>
                <div className="plus_button" onClick={addCareerInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => {
                const career = careerList.find(career => career.id === id);
                return (
                    <ResumeCareerInputEdit
                        key={id}
                        id={id}
                        startDate={career?.startDate || ""}
                        endDate={career?.endDate || ""}
                        companyName={career?.companyName || ""}
                        position={career?.position || ""}
                        job={career?.job || ""}
                        removeInput={() => removeCareerInput(id)}
                        updateCareer={updateCareer}
                    />
                );
            })}
        </div>
    );
};

export default ResumeCareerEdit;
