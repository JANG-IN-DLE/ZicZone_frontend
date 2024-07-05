import React from "react";
import './MypageLeftContent';
import './../../styles/MypageLeft.css'

const MypageLeft = ({ user_name, career, user_intro, email, job_name, tech_name }) => {

    return (
        <div>
            <div className="mypage_user_title">
                <span className="name">{user_name}</span>
                <span> | </span>
                <span className="career">{career}</span>
            </div>
            <div className="mypage_user_left">
                <div className="mypage_user_intro">
                    <span>{user_intro}</span>
                </div>
                <div className="mypage_user_info">
                    <div className="mypage_user_content">
                        <div>이메일</div>
                        <div>희망분야</div>
                        <div>기술스택</div>
                    </div>
                    <div className="mypage_user_detail">
                        <div className="email">{email}</div>
                        <div className="job">{job_name}</div>
                        <div className="mypage_user_tech">
                            <ul>
                                {tech_name.map((techItem, index) => (
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
