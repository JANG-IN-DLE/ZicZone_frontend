import React from "react";
import "./../../styles/MypageUserPurchase.css"

const MypageUserPurchase = ({ user_id, company_logo, company_intro }) => {
    return (
        <div className="mypage_user_purchase">
            <div className="mypage_user_purchase_content">
                <img src={company_logo} alt="" />
                <div>
                    <div className="mypage_purchase_company_name"><p>{user_id}</p></div>
                    <div className="mypage_purchase_company_intro"><p>{company_intro}</p></div>
                </div>
            </div>
        </div>
    );
}

export default MypageUserPurchase