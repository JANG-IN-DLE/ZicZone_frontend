import React from 'react';
import { useState } from 'react';
import ProfileCardstyle from '../styles/ProfileCard.module.css';
import unscrapImg from '../../../common/card/assets/unscrap.svg';
import scrapImg from '../../../common/card/assets/scrap.svg';
import api from '../../config/axiosInstance';


const ProfileCard = ({userImage, jobNames=[], userName, userCareer, userIntro, techUrls=[], isScrap, personalId, isCompany }) => {
    // scrap 여부를 담는 hook
    const [scrap, setScrap] = useState(isScrap);

    // localstorage에서 userId 가져옴
    const userId = localStorage.getItem("userId");


    const handleScrapClick = async (e) => {
        e.stopPropagation();
        try{
            // 보낼 때 userName뿐만 아니라 지금 로그인한 회원 Id까지 보내야할 것 같아. companyId는 임시로 1
            const response = await api.post('/api/company/scrap', { personalId, userId });

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
            {isCompany && (
                <button className={ProfileCardstyle.scrap_button} onClick={handleScrapClick}>
                    <img src={scrap ? unscrapImg : scrapImg} alt="Scrap"/>
                </button>
            )}
            <div className={ProfileCardstyle.pc_jobs_group}>
                {jobNames.map((job, index)=> (
                    <p className={ProfileCardstyle.pc_jobs}>
                        <span key={index}>  # {job}</span>
                    </p>
                ))}
            </div>
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