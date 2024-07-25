import React from "react";
import './../../styles/MypageBerryModal.css';

const MypageHistoryBar = ({ historyData }) => {
    return (
        <div className="mypage_history_bar">
            {historyData.map((item, index) => (
                <div key={index} className="history_bar_item">
                    <div className="history_bar_date">
                        <span>{item.formattedDate}</span>
                    </div>
                    <div className="history_bar_record">
                        <span>{item.content}</span>
                    </div>
                    <div className="history_bar_bucket">
                        <span>{item.berry}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MypageHistoryBar;
