import React from "react";
import './../../styles/MypageRight.css';

const MypageRightCo = ({ userIntro }) => {
    return (
        <div>
            <div className="mypage_company_right">
                <div className="mypage_company_intro">
                    <p>{userIntro}</p>
                </div>
            </div>
        </div>
    );
}

export default MypageRightCo;
