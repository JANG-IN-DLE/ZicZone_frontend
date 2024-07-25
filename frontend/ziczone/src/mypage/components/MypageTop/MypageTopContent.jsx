import React, { useEffect, useState } from "react";
import MypageTop from "./MypageTop";
import axios from "axios";

const MypageTopContent = () => {
    const userId = localStorage.getItem('userId')

    const [topData, setTopData] = useState({
        gender: ""
    });
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        axios.get(`/api/personal/${userId}`)
            .then(response => {
                setTopData({
                    gender: response.data.gender
                });
                setIsLoading(false); // 데이터 로드 완료
            })
            .catch(error => {
                console.log("topData 데이터 호출 실패", error);
                setIsLoading(false); // 에러 발생 시 로딩 종료
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div> // 로딩 중일 때 표시할 내용
            ) : (
                <MypageTop gender={topData.gender} />
            )}
        </div>
    )
}

export default MypageTopContent;
