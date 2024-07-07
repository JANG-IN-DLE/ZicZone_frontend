import React from "react";
import "./../../styles/MypageUserPurchase.css";

const MypageUserPurchase = ({ gender, jobPositions, userName, personalCareer, userIntro, techStacks }) => {
    return (
        <div className="mypage_user_purchase">
            <div className="mypage_user_purchase_content">
                <img className="mypage_purchase_img" src="" alt="" />
                <div className="purchase_content">
                    <div className="mypage_purchase_job">
                        <p>{jobPositions}</p>
                    </div>
                    <div className="mypage_purchase_name">
                        <p>{userName}</p>
                        <p> | </p>
                        <p>{personalCareer}</p>
                    </div>
                    <div className="mypage_purchase_intro">
                        <p>{userIntro}</p>
                    </div>
                    <div className="mypage_purchase_tech">
                        <ul>
                            {techStacks.map((techItem, index) => (
                                <li key={index}>
                                    <img src={techItem.techUrl} alt={techItem.techName} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <div className="mypage_scrap_img">
                    <div className="scrap_img"></div>
                </div> */}
            </div>
        </div>
    );
}

export default MypageUserPurchase;
