import React, { useEffect, useState } from "react";
import "../styles/MainMain.css";
import HelpZone from "./HelpZone";
import CompanySilde from "./CompanySilde";
import NoLoginBannerSlide from "./NoLoginBannerSlide";
import PickCard from "../../common/card/components/PickCard";
import axios from "axios";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";

const NoLoginMainComponent = () => {
  const [pickCards, setPickCards] = useState([]);
  const [helpZones, sethelpZones] = useState([]);

  useEffect(() => {
    axios
      .get("/api/pickcards", {
        params: {
          sortBy: "resume_update", //를 기준으로 정렬하도록 요청함
          sortOrder: "desc", // 내림차순 정렬
        },
      })
      .then((response) => {
        setPickCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pick cards: ", error);
      });

    axios
      .get("/api/help")
      .then((res) => {
        sethelpZones(res.data);
      })
      .catch((error) => {
        console.error("Error help", error);
      });
  }, []);

  return (
    <div className="main_container">
      <NoLoginBannerSlide />
      <div className="pickzone">
        <h1>PICK 존</h1>
        <div className="user_card_container">
          {pickCards.slice(0, 4).map((card) => {
            const userImage =
              card.gender === "MALE" ? personalMImage : personalFImage;
            const jobNames = card.jobName ? card.jobName.split(",") : [];
            const techNames = card.techName ? card.techName.split(",") : [];

            return (
              <PickCard
                key={card.personalId}
                personalId={card.personalId}
                userImage={userImage}
                jobNames={jobNames}
                userName={card.userName}
                userCareer={card.personalCareer}
                userIntro={card.userIntro}
                techNames={techNames}
              />
            );
          })}
        </div>
      </div>
      <div className="helpzone">
        <h1>HELP 존</h1>

        <HelpZone />
        <HelpZone />
        <HelpZone />
        <HelpZone />
        <HelpZone />
      </div>
      <div className="company_slide">
        <CompanySilde />
        <CompanySilde />
        <CompanySilde />
      </div>
    </div>
  );
};

export default NoLoginMainComponent;
