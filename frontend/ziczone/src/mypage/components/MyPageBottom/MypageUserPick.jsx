import React from "react";
import "./../../styles/MypageUserPick.css"

const MypageUserPick = ({ user_id, company_logo, company_intro }) => {
    return (
        <div className="mypage_user_pick">
            <div className="mypage_user_pick_content">
                <img src={company_logo} alt="" />
                <div>
                    <div className="mypage_pick_company_name"><p>{user_id}</p></div>
                    <div className="mypage_pick_company_intro"><p>{company_intro}</p></div>
                </div>
            </div>
        </div>
    );
}

export default MypageUserPick