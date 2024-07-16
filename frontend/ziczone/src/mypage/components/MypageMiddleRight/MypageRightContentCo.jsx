import React, { useEffect, useState } from "react";
import MypageRightCo from "./MypageRightCo";
import axios from "axios";

const MypageRightContentCo = () => {
    const userId = 1;
    const [rightData, setRightData] = useState('');

    useEffect(() => {
        axios.get(`/api/company/${userId}`)
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
