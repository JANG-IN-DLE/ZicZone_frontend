import React, { useState, useEffect } from "react";
import MypageHistoryBar from "./MypageHistoryBar";
import api from '../../../common/config/axiosInstance';

const MypageBerryHistory = () => {
    const userId = localStorage.getItem("userId");
    const [historyData, setHistoryData] = useState([]);


    useEffect(() => {
        const fetchBerryHistory = async () => {
            try {
                const response = await api.post(`/api/payments/personal/points/${userId}`);
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
                        date: item.payDate,
                        formattedDate: formatDate(item.payDate),
                        content: `충전(${item.amount}원)`,
                        berry: `+${item.berryPoint}🫐`
                    })),
                    ...payHistory.map(item => ({
                        date: item.payHistoryDate,
                        formattedDate: formatDate(item.payHistoryDate),
                        content: item.payHistoryContent,
                        berry: `${item.berryBucket}🫐`
                    }))
                ];

                // 날짜 순으로 정렬 (최신순)
                combinedHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

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