import React, { useState, useEffect } from "react";
import axios from "axios";
import MypageHistoryBar from "./MypageHistoryBar";

const MypageBerryHistory = () => {
    const userId = localStorage.getItem("userId");
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        const fetchBerryHistory = async () => {
            try {
                const response = await axios.post(`http://localhost:12000/api/payments/personal/points/${userId}`);
                const payment = response.data.payment;
                const payHistory = response.data.payHistory;

                // 날짜 포맷 변환 함수
                const formatDate = (dateString) => {
                    const date = new Date(dateString);
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    return `${month}-${day}`;
                };

                // 충전 내역과 사용 내역을 합침
                const combinedHistory = [
                    ...payment.map(item => ({
                        date: formatDate(item.payDate),
                        content: `충전(${item.amount}원)`,
                        berry: `+${item.berryPoint}🫐`
                    })),
                    ...payHistory.map(item => ({
                        date: formatDate(item.payHistoryDate),
                        content: item.payHistoryContent,
                        berry: `${item.berryBucket}🫐`
                    }))
                ];

                // 날짜 순으로 정렬
                combinedHistory.sort((a, b) => new Date(a.date) - new Date(b.date));

                setHistoryData(combinedHistory);
            } catch (error) {
                console.error("Error fetching berry history:", error);
            }
        };

        fetchBerryHistory();
    }, [userId]);

    return (
        <MypageHistoryBar historyData={historyData} />
    );
};

export default MypageBerryHistory;
