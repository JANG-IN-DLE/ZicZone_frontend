import React from "react";
import "./../../../styles/MypageCompPick.css";
import maleImg from "./../../../../common/card/assets/personal_m_image.png"
import femaleImg from "./../../../../common/card/assets/personal_f_image.png"

const MypageCompPick = ({ gender, jobPositions, userName, personalCareer, userIntro, techStacks }) => {

    const genderImg = gender === 'MALE' ? maleImg : femaleImg;

    return (
        <div className="mypage_comp_pick">
            <div className="mypage_comp_pick_content">
                <img className="mypage_pick_img" src={genderImg} alt="" />
                <div className="pick_content">
                    <div className="mypage_pick_job">
                        <p>{jobPositions}</p>
                    </div>
                    <div className="mypage_pick_name">
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
    );
}

export default MypageCompPick;
