import React from "react";
import "./../../styles/MypageBottom.css";
import useNav from "../../hooks/useNavBar";
import MypagePickHistory from "./Personal/MypagePickHistory";
import MypagePurchaseHistory from "./Personal/MypagePurchaseHistory";
import MypagePostHistory from "./Personal/MypagePostHistory";
import MypageCommentHistory from "./Personal/MypageCommentHistory";


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
                {activeItem === "post" && <MypagePostHistory />}
                {activeItem === "comment" && <MypageCommentHistory />}
            </div>
        </div>
    );
};

export default MypageBottom;
