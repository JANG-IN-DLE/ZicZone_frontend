import React from "react";
import '../styles/PickCard.css';


const PickCard = ({userImage, jobNames=[], userName, userCareer, userIntro, techNames=[]}) => {
    return (
                <div className="user_card">
                    <div className="pick_user_image_container">
                        <img className="pick_user_image" src={userImage} alt="User" />
                    </div>
                    <div className="pick_user_info">
                        <div className="pick_user_job">
                            {jobNames.map((job, index)=> (
                                <span key={index}>#{job}</span>
                            ))}
                        </div>
                        <div className="pick_user_name">
                            {userName}
                            <span className="pick_user_career"> | {userCareer}</span>
                        </div>
                        <div className="pick_user_intro">
                            {userIntro}
                        </div>
                        <div className="pick_user_tech">
                            {techNames.map((tech, index) => (
                                <div key={index} className="tech_icon">{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
    );
};

export default PickCard;