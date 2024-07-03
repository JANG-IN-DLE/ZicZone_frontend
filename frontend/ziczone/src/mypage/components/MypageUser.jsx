import React from "react";
import './../styles/Mypage.css'
import MypageTop from "./Mypage_Top/MypageTop";
import MypageLeft from "./Mypage_Middle_Left/MypageLeftContent";
import MypageRight from "./Mypage_Middle_Right/MypageRightContent";
import MypageBottom from "./MyPage_Bottom/MypageBottom";
import Header from "../../common/header/components/Header";

const Mypage = () => {
    return (
        <div>
            <Header />
            <div className="mypage_container">
                <MypageTop />
                <div className="mypage_user_grid">
                    <MypageLeft />
                    <MypageRight />
                </div>
                <MypageBottom />
            </div>
        </div>
    )
}

export default Mypage
