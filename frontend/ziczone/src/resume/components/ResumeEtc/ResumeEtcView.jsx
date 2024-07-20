import React, { useEffect, useState } from "react";
import "./../../styles/ResumeEtc.css";
import ResumeEtcInputView from "./../ResumeEtc/ResumeEtcInputView";
import axios from "axios";


const ResumeEtcView = () => {
    const userId = localStorage.getItem("userId")
    const [etcData, setEtcData] = useState([]);

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setEtcData(response.data.etcs);
            })
            .catch(error => {
                console.log("etcData 호출 실패", error);
            });
    }, [userId]);


    return (
        <div className="resume_etc">
            <div className="resume_etc_title">
                <p className="etc_title">기타사항</p>
                <p className="etc_warning">* 대외활동, 수상경력 등 자신의 능력을 마음껏 보여주세요!</p>
            </div>
            <div className="resume_bar"></div>
            {etcData.map((etc, index) => (
                <ResumeEtcInputView
                    key={index}
                    etcDate={etc.etcDate}
                    etcContent={etc.etcContent}
                />
            ))}
        </div>
    );
};

export default ResumeEtcView;
