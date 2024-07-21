import React from "react";
import "./../../../styles/MypageCompPick.css";
import maleImg from "./../../../../common/card/assets/personal_m_image.png"
import femaleImg from "./../../../../common/card/assets/personal_f_image.png"
import { Link } from "react-router-dom";

const MypageCompPick = ({ gender, personalId, jobPositions, userName, personalCareer, userIntro, techStacks }) => {
    const userId = localStorage.getItem("userId")
    const genderImg = gender === 'MALE' ? maleImg : femaleImg;
    const jobNames = jobPositions.split(", ").map(job => job.trim());

    return (
        // <Link to={`/pickzone/${userId}/${personalId}`} style={{textDecoration: "none"}}>
            <div className="mypage_comp_pick">
                <div className="mypage_comp_pick_content">
                    <img className="mypage_pick_img" src={genderImg} alt="" />
                    <div className="pick_content">
                        <div className="mypage_pick_job">
                            {jobNames.map((job, index) => (
                                <span key={index} className="job-tag">#{job}</span>
                            ))}
                        </div>
                        <div className="mypage_pick_name" style={{color: "#000"}}>
                            <p>{userName} | {personalCareer}</p>
                        </div>
                        <div className="mypage_pick_intro">
                            <p>{userIntro}</p>
                        </div>
                        <div className="mypage_pick_tech">
                            <ul>
                                {techStacks.map((techItem, index) => (
                                    <li key={index}>
                                        {techItem.techUrl ? (
                                            <img src={techItem.techUrl} alt={techItem.techName} />
                                        ) : (
                                            techItem.techName
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        // </Link>
    );
}

export default MypageCompPick;
