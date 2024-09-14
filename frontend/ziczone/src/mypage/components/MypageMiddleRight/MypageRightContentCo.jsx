import React, { useEffect, useState } from "react";
import MypageRightCo from "./MypageRightCo";
import axios from "axios";
import config from "../../../config";

const MypageRightContentCo = () => {
    const userId = localStorage.getItem('userId')
    const [rightData, setRightData] = useState('');

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/company/${userId}`)
            .then(response => {
                setRightData(response.data.user.userIntro);
            })
            .catch(error => {
                console.error("데이터 호출 실패", error);
            });
    }, [userId]);

    return (
        <MypageRightCo
            userIntro={rightData}
        />
    );
};

export default MypageRightContentCo;
