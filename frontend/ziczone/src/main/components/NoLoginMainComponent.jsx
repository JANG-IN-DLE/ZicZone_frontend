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
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);

  useEffect(() => {
    axios
      .get(
        "/api/pickcards"
        //   , {
        //   params: {
        //     sortBy: "resume_update", //를 기준으로 정렬하도록 요청함
        //     sortOrder: "desc", // 내림차순 정렬
        //   },
        // }
      )
      .then((response) => {
        setPickCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pick cards: ", error);
      });

    axios
      //엔드포인트로 GET요청, 파라미터를 함께 보냄
      .get("/api/board/filter", {
        params: {
          filterType,
          page,
          size,
          sortBy: "corr_modify", //를 기준으로 정렬하도록 요청함
          sortOrder: "desc", // 내림차순 정렬
        },
      })
      .then((res) => {
        // 응답 데이터는 res.data.dtoList에 있고ㅡ 이 데이터를 helpZones 상태에 저장함
        sethelpZones(res.data.dtoList);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error help", error);
      });
    // 아래 세가지 상태가 변경될때마다 uesEffect를 다시 실행돼 새로운 데이터를 불러옴
  }, [filterType, page, size]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

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
        {helpZones.slice(0, 5).map((list) => {
          return (
            <HelpZone
              key={list.userId}
              userId={list.userId}
              corrModify={formatDate(list.corrModify)}
              corrPoint={list.corrPoint}
              corrTitle={list.corrTitle}
              corrView={list.corrView}
            />
          );
        })}
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
