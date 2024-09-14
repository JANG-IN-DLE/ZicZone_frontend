import React, { useEffect, useState } from "react";
import axios from 'axios';
import MypageLeft from "./MypageLeft";
import config from '../../../config';

function MypageLeftContent() {
    const userId = localStorage.getItem('userId')
    const [leftData, setLeftData] = useState({
        userName: "",
        personalCareer: "",
        userIntro: "",
        email: "",
        jobPositions: "",
        techStacks: [],
    });

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/personal/${userId}`)
            .then(response => {
                const jobPositions = response.data.jobPositions.map(position => position.job.jobName).join(", ");
                const techStacks = response.data.techStacks.map(stack => ({
                    techName: stack.tech.techName,
                    techUrl: stack.tech.techUrl
                }));
                setLeftData({
                    userName: response.data.user.userName,
                    personalCareer: response.data.personalCareer,
                    userIntro: response.data.user.userIntro,
                    email: response.data.user.email,
                    jobPositions: jobPositions,
                    techStacks: techStacks
                });
            })
            .catch(error => {
                console.error("leftData 호출 실패", error);
            });
    }, []);

    return (
        <div>
            <MypageLeft
                userName={leftData.userName}
                personalCareer={leftData.personalCareer}
                userIntro={leftData.userIntro}
                email={leftData.email}
                jobPositions={leftData.jobPositions}
                techStacks={leftData.techStacks}
            />
        </div>
    );
};

export default MypageLeftContent;
