import React from "react";
import './../styles/MypageUser.css'
import MypageTop from "./MypageTop/MypageTopContent";
import MypageLeft from "./MypageMiddleLeft/MypageLeftContent";
import MypageRight from "./MypageMiddleRight/MypageRightContent";
import MypageBottom from "./MyPageBottom/MypageBottom";
import Header from "../../common/header/components/Header";
import MypageLeftCo from "./MypageMiddleLeft/MypageLeftCo";
import MypageRightCo from "./MypageMiddleRight/MypageRightCo";

const Mypage = () => {
    return (
        <div>
            {/* <Header /> */}
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
