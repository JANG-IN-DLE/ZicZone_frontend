import React from "react";
import HELP from "../assets/helpIcon.png";
import "../styles/HelpZoneIntro.css";

const HelpZoneIntro = () => {
    return (
        <div className="help_zone_intro">
            <div className="hzi_title">
                <p>HELP ME</p>
                <img src={ HELP } alt="비상등 아이콘" />
            </div>
            <p className="hzi_sub">포인트를 획득하고, 완벽한 서류로 취업 성공을 향해 나아가세요!</p>
        </div>
    );
}

export default HelpZoneIntro;