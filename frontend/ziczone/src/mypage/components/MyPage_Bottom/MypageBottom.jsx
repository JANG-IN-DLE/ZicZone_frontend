import React from "react";
import "./../../styles/Mypage_Bottom.css";
import MypagePickHistory from "./MypagePickHistory";
import PickCard from "../../../common/card/components/PickCard";
import useNav from "../../hooks/Use_Nav";  // 커스텀 훅을 임포트

const MypageBottom = ({ user_id, company_logo, company_intro }) => {
    const { activeItem, handleClick } = useNav("pick");  // 훅 사용

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
            <div className="mypage_user_history">
                {activeItem === "pick" && <MypagePickHistory />}
                {activeItem === "pick" && <MypagePickHistory />}
                {activeItem === "purchase" && <PickCard />}
            </div>
        </div>
    );
};

export default MypageBottom;
