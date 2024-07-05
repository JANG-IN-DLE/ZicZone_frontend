import React from "react";
import MypageRight from "./MypageRight";

const MypageRightContent = () => {

    const MypageBerry = {
        berry_point: '10000'
    }

    return (
        <MypageRight
            berry_point={MypageBerry.berry_point}
        />
    )
}
export default MypageRightContent;