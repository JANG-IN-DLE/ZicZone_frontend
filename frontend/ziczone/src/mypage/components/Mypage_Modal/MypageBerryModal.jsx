import React from "react";
import MypageBerryHistory from "./MypageBerryHistory";

const MypageBerryModal = ({ onClose }) => {
    return (
        <div className="mypage_berry_modal">
            <div className="berry_status_bar">
                <div>
                </div>
            </div>
            <div className="berry_modal_container">
                <div className="my_berry_record">
                    <p>나의 베리내역</p>
                </div>
                <MypageBerryHistory />
            </div>
            <div className="berry_history_close">
                <button className="close_btn" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    )
}

export default MypageBerryModal;
