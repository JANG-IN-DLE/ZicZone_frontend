import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/PickCard.css';


const PickCard = ({onClick, userImage, jobNames=[], userName, userCareer, userIntro, techNames=[]}) => {
    // 일단 주석
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate(`/pickzone/${personalId}`);
    // };
    console.log(onClick);
    
    return (
        
                <div className="user_card" onClick={onClick}>
                    
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