import React, { useState } from "react";
import "./../../../styles/MypageCompScrap.css";
import scrap from "./../../../../common/card/assets/scrap.svg";
import unscrap from "./../../../../common/card/assets/unscrap.svg";
import maleImg from "./../../../../common/card/assets/personal_m_image.png";
import femaleImg from "./../../../../common/card/assets/personal_f_image.png";
import axios from 'axios';
import { Link } from "react-router-dom";
import config from "../../../../config";

const MypageCompScrap = ({ gender, jobPositions, userName, personalCareer, userIntro, techStacks, isScrap, personalId, companyId }) => {
    const [isScrapped, setIsScrapped] = useState(true); // 초기 스크랩 상태를 true로 설정

    const userId = localStorage.getItem("userId");

    const genderImg = gender === 'MALE' ? maleImg : femaleImg;

    const [scrapStatus, setScrapStatus] = useState(isScrap);

    const jobNames = jobPositions.split(", ").map(job => job.trim());

    const api = axios.create({
        baseURL: config.baseURL
      });

    const handleScrapClick = async (e) => {
        e.stopPropagation(); // 이벤트 전파를 막아 Link 동작을 막음
        try {
            const response = await api.post('/api/company/scrap', { personalId, userId });

            if (response.status === 200) {
                setScrapStatus(!scrapStatus);
                // window.location.reload();
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
            <Link to={`/pickzone/${userId}/${personalId}`} style={{textDecoration: "none" ,color: "#000"}}>
                <div className="mypage_comp_scrap_content">
                    <img className="mypage_scrap_img" src={genderImg} alt="" />
                    <div className="scrap_content">
                        <div className="mypage_scrap_job">
                            {jobNames.map((job, index) => (
                                <span key={index} className="job-tag">#{job}</span>
                            ))}
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
                </div>
            </Link>
            <div className="scrap_or_nonscrap" onClick={handleScrapClick}>
                <img src={scrapStatus ? scrap : unscrap} alt="스크랩 상태" />
            </div>
        </div>
    );
}

export default MypageCompScrap;
