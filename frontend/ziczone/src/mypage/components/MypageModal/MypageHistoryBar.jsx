import React from "react";
import './../../styles/MypageBerryModal.css'

const MypageHistoryBar = ({app_payment_date, berry_record, berry_bucket}) => {
    return (
        <div className="mypage_history_bar">
            {app_payment_date.map((date, index) => (
                <div key={index} className="history_bar_item">
                    <div className="history_bar_date">
                        <span>{date}</span>
                    </div>
                    <div className="history_bar_record">
                        <span>{berry_record[index]}</span>
                    </div>
                    <div className="history_bar_bucket">
                        <span>{berry_bucket[index]}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MypageHistoryBar
