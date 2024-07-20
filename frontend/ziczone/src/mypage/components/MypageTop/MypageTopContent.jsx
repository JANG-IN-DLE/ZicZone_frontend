import React, { useEffect, useState } from "react";
import MypageTop from "./MypageTop";
import axios from "axios";

const MypageTopContent = () => {
    const userId = localStorage.getItem('userId')

    const [topData, setTopData] = useState({
        gender: ""
    })

    useEffect(() => {
        axios.get(`/api/personal/${userId}`)
            .then(response => {
                setTopData({
                    gender: response.data.gender
                });
            })
            .catch(error => {
                console.log("topData 데이터 호출 실패", error);
            });
    }, []);

    return (
        <div>
            <MypageTop
                gender={topData.gender}
            />
        </div>
    )
}

export default MypageTopContent