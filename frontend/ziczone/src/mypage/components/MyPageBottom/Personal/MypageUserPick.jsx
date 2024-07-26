import React from "react";
import "./../../../styles/MypageUserPick.css"

const MypageUserPick = ({ userName, companyLogo, userIntro }) => {
    return (
        // <div className="mypage_user_pick">
            <div className="mypage_user_pick_content">
                <img src={companyLogo} alt="" />
                <div>
                    <div className="mypage_pick_company_name"><p>{userName}</p></div>
                    <div className="mypage_pick_company_intro"><p>{userIntro}</p></div>
                </div>
            </div>
        // </div>
    );
}

export default MypageUserPick