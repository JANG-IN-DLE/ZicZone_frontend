import React, { useState } from "react";
import "./../../../styles/MypageCompScrap.css";
import unscrap from "./../../../../common/card/assets/scrap.svg";
import scrap from "./../../../../common/card/assets/unscrap.svg";
import maleImg from "./../../../../common/card/assets/personal_m_image.png";
import femaleImg from "./../../../../common/card/assets/personal_f_image.png";
import axios from 'axios';

const MypageCompScrap = ({ gender, jobPositions, userName, personalCareer, userIntro, techStacks, isScrap, personalId, companyId }) => {
    const [isScrapped, setIsScrapped] = useState(true); // 초기 스크랩 상태를 true로 설정

    const genderImg = gender === 'MALE' ? maleImg : femaleImg;

    const [scrapStatus, setScrapStatus] = useState(isScrap);

    const handleScrapClick = async (e) => {
        e.stopPropagation();
        try {
            const response = await axios.post('/api/scrap', { personalId, companyId});
            
            if (response.status === 200) {
                setScrapStatus(!scrapStatus);
                window.location.reload();
            }
        } catch (error) {
            console.error("스크랩 중 오류 발생: ", error);
        }
    };

    if (!isScrapped) {
        return null; // 스크랩되지 않은 상태면 컴포넌트 렌더링 안함
    }

    return (
        <div className="mypage_comp_scrap">
            <div className="mypage_comp_scrap_content">
                <img className="mypage_scrap_img" src={genderImg} alt="" />
                <div className="scrap_content">
                    <div className="mypage_scrap_job">
                        <p>{jobPositions}</p>
                    </div>
                    <div className="mypage_scrap_name">
                        <p>{userName} | {personalCareer}</p>
                    </div>
                    <div className="mypage_scrap_intro">
                        <p>{userIntro}</p>
                    </div>
                    <div className="mypage_scrap_tech">
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
                <div className="scrap_or_nonscrap" onClick={handleScrapClick}>
                    <img src={scrapStatus ? scrap : unscrap} alt="스크랩 상태" />
                </div>
            </div>
        </div>
    );
}

export default MypageCompScrap;
