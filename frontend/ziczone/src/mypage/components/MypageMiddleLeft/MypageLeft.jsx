import React from "react";
import "./../../styles/MypageLeft.css";

const MypageLeft = ({ userName, personalCareer, userIntro, email, jobPositions, techStacks }) => {
    const jobNames = jobPositions.split(", ").map(job => job.trim());

    return (
        <div>
            <div className="mypage_user_title">
                <p>{userName} | {personalCareer}</p>
            </div>
            <div className="mypage_user_left">
                <div className="mypage_user_intro">
                    <span>{userIntro}</span>
                </div>
                <div className="mypage_user_info">
                    <div className="mypage_user_content">
                        <div>이메일</div>
                        <div>희망분야</div>
                        <div>기술스택</div>
                    </div>
                    <div className="mypage_user_detail">
                        <div className="email">{email}</div>
                        <div className="job">
                            {jobNames.map((job, index) => (
                                <span key={index} className="job-tag">#{job}</span>
                            ))}
                        </div>
                        <div className="mypage_user_tech">
                            <ul>
                                {techStacks.map((techItem, index) => (
                                    <li key={index}>
                                        <img src={techItem.techUrl} alt={techItem.techName} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MypageLeft;
