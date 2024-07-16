import React from "react";
import "./../../styles/MypageBottom.css";
import useNav from "../../hooks/useNavBar";
import MypagePickHistoryCo from "./Company/MypagePickHistoryCo";
import MypageScrapHistory from "./Company/MypageScrapHistory";
import MypageEmploymentHistory from "./Company/MypageEmploymentHistory";
import MypageCompScrap from "./Company/MypageCompScrap";
import MypageCompEmployment from "./Company/MypageCompEmployment";


const MypageBottomCo = () => {
    const { activeItem, handleClick } = useNav("pick");

    return (
        <div>
            <div className="mypage_user_nav">
                <div className="mypage_user_nav_bar">
                    <div
                        className={`mypage_user_nav ${activeItem === "pick" ? "active" : ""}`}
                        onClick={() => handleClick("pick")}
                    >
                        PICK
                    </div>
                    <div
                        className={`mypage_user_nav ${activeItem === "scrap" ? "active" : ""}`}
                        onClick={() => handleClick("scrap")}
                    >
                        스크랩
                    </div>
                    <div
                        className={`mypage_user_nav ${activeItem === "employment" ? "active" : ""}`}
                        onClick={() => handleClick("employment")}
                    >
                        채용완료
                    </div>
                </div>
            </div>
            <div>
                {activeItem === "pick" && <MypagePickHistoryCo />}
                {activeItem === "scrap" && <MypageScrapHistory />}
                {/* {activeItem === "employment" && <MypageEmploymentHistory />} */}
                {/* {activeItem === "employment" && <MypageCompEmployment />} */}
            </div>
        </div>
    );
};

export default MypageBottomCo;
