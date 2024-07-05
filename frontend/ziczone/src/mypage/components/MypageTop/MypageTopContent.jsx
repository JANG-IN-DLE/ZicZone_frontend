import React from "react";
import MypageTop from "./MypageTop";

const MypageTopContent = () => {
    const top_detail = {
        gender: 'male'
    }

    return (
        <div>
            <MypageTop
                gender={top_detail.gender}
            />
        </div>
    )
}

export default MypageTopContent