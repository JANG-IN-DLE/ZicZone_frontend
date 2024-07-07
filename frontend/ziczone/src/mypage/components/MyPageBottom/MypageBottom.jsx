import React from "react";
import "./../../styles/MypageBottom.css";
import MypagePickHistory from "./MypagePickHistory";
import PickCard from "../../../common/card/components/PickCard";
import useNav from "../../hooks/useNavBar";
import MypageUserPurchase from "./MypageUserPurchase";
import MypagePurchaseHistory from "./MypagePurchaseHistory";

const MypageBottom = () => {
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
                        className={`mypage_user_nav ${activeItem === "purchase" ? "active" : ""}`}
                        onClick={() => handleClick("purchase")}
                    >
                        지원서 구매 내역
                    </div>
                    <div
                        className={`mypage_user_nav ${activeItem === "post" ? "active" : ""}`}
                        onClick={() => handleClick("post")}
                    >
                        내 게시물
                    </div>
                    <div
                        className={`mypage_user_nav ${activeItem === "comment" ? "active" : ""}`}
                        onClick={() => handleClick("comment")}
                    >
                        내 댓글
                    </div>
                </div>
            </div>
            <div>
                {activeItem === "pick" && <MypagePickHistory />}
                {activeItem === "purchase" && <MypagePurchaseHistory />}
            </div>
        </div>
    );
};

export default MypageBottom;
