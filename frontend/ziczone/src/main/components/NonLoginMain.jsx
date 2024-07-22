import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PickCard from "../../common/card/components/PickCard";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";
import PickZoneJobstyle from "../../pickzone/styles/PickZoneJob.module.css";
import Modal from "../../pickzone/components/Modal";
import PickCardCommstyle from "../../common/card/styles/PickCardComm.module.css";

const NonLoginMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [pickCards, setPickCards] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  axios
    .get("/api/pickcards")
    .then((response) => {
      setPickCards(response.data);
    })
    .catch((error) => {
      console.error("Error fetching pick cards: ", error);
    });
  const handleCardClick = () => {
    navigate("/login"); // 로그인 페이지로 이동
  };

  const maskName = (name) => {
    if (name.length < 2) return name;
    if (name.length === 2) {
      return `${name[0]}*`;
    }
    const maskedLength = name.length - 2;
    const start = name[0];
    const end = name[name.length - 1];
    return `${start}${"*".repeat(maskedLength)}${end}`;
  };

  return (
    <>
      <div>
        <div className={PickCardCommstyle.user_card_container}>
          {pickCards.slice(0, 4).map((card) => {
            const userImage =
              card.gender === "MALE" ? personalMImage : personalFImage;
            const jobNames = card.jobName ? card.jobName.split(",") : [];
            const techUrls = card.techUrl ? card.techUrl.split(",") : [];

            return (
              <PickCard
                key={card.personalId}
                personalId={card.personalId}
                userImage={userImage}
                jobNames={jobNames}
                userName={maskName(card.userName)}
                userCareer={card.personalCareer}
                userIntro={card.userIntro}
                techUrls={techUrls}
                onClick={handleCardClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NonLoginMain;
