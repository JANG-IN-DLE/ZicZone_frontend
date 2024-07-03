import React from "react";
import './MypageLeftContent';
import './../../styles/Mypage_Left.css'

const MypageLeft = ({ name, career, intro, email, jobs, tech }) => {

    return (
        <div>
            <div className="mypage_user_title">
                <span className="name">{name}</span>
                <span> | </span>
                <span className="career">{career}</span>
            </div>
            <div className="mypage_user_left">
                <div className="mypage_user_intro">
                    <span>{intro}</span>
                </div>
                <div className="mypage_user_info">
                    <div className="mypage_user_content">
                        <div>이메일</div>
                        <div>희망분야</div>
                        <div>기술스택</div>
                    </div>
                    <div className="mypage_user_detail">
                        <div className="email">{email}</div>
                        <div className="job">{jobs}</div>
                        <div className="mypage_user_tech">
                            <ul>
                                {tech.map((techItem, index) => (
                                    <li key={index}>
                                        <img src={techItem} alt="tech-icon" />
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
