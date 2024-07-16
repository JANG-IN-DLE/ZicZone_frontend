import React from "react";
import './../styles/MypageUser.css'
import MypageTop from "./MypageTop/MypageTopContentCo";
import Header from "../../common/header/components/Header";
import MypageLeftCo from "./MypageMiddleLeft/MypageLeftContentCo";
import MypageRightCo from "./MypageMiddleRight/MypageRightContentCo";
import MypageBottomCo from "./MyPageBottom/MypageBottomCo";

const MypageCompany = () => {
    return (
        <div>
            {/* <Header /> */}
            <div className="mypage_container">
                <MypageTop />
                <div className="mypage_user_grid">
                    <MypageLeftCo />
                    <MypageRightCo />
                </div>
                <MypageBottomCo />
            </div>
        </div>
    )
}

export default MypageCompany
