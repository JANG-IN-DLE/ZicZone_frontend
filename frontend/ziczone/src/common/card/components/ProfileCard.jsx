import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ProfileCardstyle from '../styles/ProfileCard.module.css';
import unscrapImg from '../../../common/card/assets/unscrap.svg';
import scrapImg from '../../../common/card/assets/scrap.svg';


const ProfileCard = ({userImage, jobNames=[], userName, userCareer, userIntro, techUrls=[], onScrap, isScrap, personalId}) => {
    // scrap 여부를 담는 hook
    const [scrap, setScrap] = useState(isScrap);
    const isCompanyUser = false; //개인
    // const isCompanyUser = true;//회사
    const handleScrapClick = async (e) => {
        e.stopPropagation();
        try{
            // 보낼 때 userName뿐만 아니라 지금 로그인한 회원 Id까지 보내야할 것 같아. companyId는 임시로 1
            const response = await axios.post('/api/company/scrap', { personalId, companyId:1 });
            if(response.status === 200) {
                // const { isScrap } = response.data.scrap;
                setScrap(response.data.scrap);
            }
        }catch(error){
            console.error("스크랩 중 오류 발생: ", error);
        }
    };

    return (
        <div className={ProfileCardstyle.profile_card}>
        {isCompanyUser && (
            <button className={ProfileCardstyle.scrap_button} onClick={handleScrapClick}>
                <img src={scrap ? unscrapImg : scrapImg} alt="Scrap"/>
            </button>
        )}
            <p className={ProfileCardstyle.pc_jobs}>
                {jobNames.map((job, index)=> (
                    <span key={index}>#{job}</span>
                ))}
            </p>
            <div className={ProfileCardstyle.pc_personal_image}>
                <img className={ProfileCardstyle.pick_user_image} src={userImage} alt="User" />
            </div>
            <p className={ProfileCardstyle.pc_name_career}>
                { userName} | { userCareer }
            </p>
            <p className={ProfileCardstyle.pc_intro}>
                { userIntro }
            </p>
            <div className={ProfileCardstyle.pc_stacks}>
                {techUrls.map((tech, index) => (
                    <img key={index} className={ProfileCardstyle.tech_icon} src={tech} alt={`Tech${index}`} />
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;