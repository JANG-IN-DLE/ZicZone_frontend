import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/PickCard.css';
import vector from "../assets/Vector.png";


const PickCard = ({onClick, userImage, jobNames=[], userName, userCareer, userIntro, techNames=[], onScrap}) => {
    const isCompanyUser = false;
    
    return (
                <div className="user_card" onClick={onClick}>
                    {isCompanyUser && (
                        // 클릭되면 색 채워지게 설정 필요
                        <button className="scrap_button" onClick={(e)=> {e.stopPropagation(); onScrap();}}>
                            <img src={vector} alt="Scrap"/>
                        </button>
                    )}
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
                                <img key={index} className="tech_icon" src={tech} alt={`Tech${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
    );
};

export default PickCard;