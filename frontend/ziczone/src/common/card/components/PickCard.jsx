import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import PickCardCommstyle from '../styles/PickCardComm.module.css';
import scrapImg from "../assets/scrap.svg";
import unscrapImg from "../assets/unscrap.svg";


const PickCard = ({onClick, userImage, jobNames=[], userName, userCareer, userIntro, techUrls=[], personalId, isScrap}) => {
    const isCompanyUser = false; // 개인
    // const isCompanyUser = true; // 기업

    // scrap 여부를 확인하는 hook
    const [scrap, setScrap] = useState(isScrap);

    const handleScrapClick = async (e) => {
        e.stopPropagation();
        try{
            // 보낼 때 userName뿐만 아니라 지금 로그인한 회원 Id까지 보내야할 것 같아. companyId는 임시로 1
            const response = await axios.post('/api/scrap', { personalId, companyId:1 });
            if(response.status === 200) {
                setScrap(!scrap);
            }
        }catch(error){
            console.error("스크랩 중 오류 발생: ", error);
        }
    };
    
    return (
                <div className={PickCardCommstyle.user_card} onClick={onClick}>
                    {isCompanyUser && (
                        <button className={PickCardCommstyle.scrap_button} onClick={handleScrapClick}>
                            <img src={scrap ? unscrapImg : scrapImg} alt="Scrap"/>
                        </button>
                    )}
                    <div className={PickCardCommstyle.pick_user_image_container}>
                        <img className={PickCardCommstyle.pick_user_image} src={userImage} alt="User" />
                    </div>
                    <div className={PickCardCommstyle.pick_user_info}>
                        <div className={PickCardCommstyle.pick_user_job}>
                            {jobNames.map((job, index)=> (
                                <span key={index}>#{job}</span>
                            ))}
                        </div>
                        <div className={PickCardCommstyle.pick_user_name}>
                            {userName}
                            <span className={PickCardCommstyle.pick_user_career}> | {userCareer}</span>
                        </div>
                        <div className={PickCardCommstyle.pick_user_intro}>
                            {userIntro}
                        </div>
                        <div className={PickCardCommstyle.pick_user_tech}>
                            {techUrls.map((tech, index) => (
                                <img key={index} className={PickCardCommstyle.tech_icon} src={tech} alt={`Tech${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
    );
};

export default PickCard;