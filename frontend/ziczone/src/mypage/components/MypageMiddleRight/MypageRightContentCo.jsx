import React, { useEffect, useState } from "react";
import MypageRightCo from "./MypageRightCo";
import api from '../../../common/config/axiosInstance';

const MypageRightContentCo = () => {
    const userId = localStorage.getItem('userId')
    const [rightData, setRightData] = useState('');

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
