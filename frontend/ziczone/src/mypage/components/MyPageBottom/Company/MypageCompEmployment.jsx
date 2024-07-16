import React from "react";
import "./../../../styles/MypageCompEmployment.css";

const MypageCompEmployment = ({ gender, jobPositions, userName, personalCareer, userIntro, techStacks }) => {
    return (
        <div className="mypage_comp_employment">
            <div className="mypage_comp_employment_content">
                <img className="mypage_employment_img" src="" alt="" />
                <div className="employment_content">
                    <div className="mypage_employment_job">
                        <p>{jobPositions}</p>
                    </div>
                    <div className="mypage_employment_name">
                        <p>{userName} | {personalCareer}</p>
                    </div>
                    <div className="mypage_employment_intro">
                        <p>{userIntro}</p>
                    </div>
                    <div className="mypage_employment_tech">
                        <ul>
                            {/* {techStacks.map((techItem, index) => (
                                <li key={index}>
                                    <img src={techItem.techUrl} alt={techItem.techName} />
                                </li>
                            ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MypageCompEmployment;
