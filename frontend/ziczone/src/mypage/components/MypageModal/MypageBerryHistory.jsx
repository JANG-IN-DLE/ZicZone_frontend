import React from "react";
import MypageHistoryBar from "./MypageHistoryBar";

const MypageBerryHistory = () => {

    const berry_history = {
        app_payment_date: ["06.19", "06.20", "06.21", "06.22", "06.23", "06.24"],
        berry_record: ["지원서 열람", "댓글 채택", "충전(1000원)", "내 이력서 열람", "지원서 열람", "지원서 열람"],
        berry_bucket: ["-50🫐", "+50🫐", "+100🫐", "+50🫐", "-50🫐", "-50🫐"]
    }
    
    return (
        <MypageHistoryBar
        app_payment_date={berry_history.app_payment_date}
        berry_record={berry_history.berry_record}
        berry_bucket={berry_history.berry_bucket}
        />
    )
}

export default MypageBerryHistory