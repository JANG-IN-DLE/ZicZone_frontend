import React, { useEffect, useState } from "react";
import "../styles/MainMain.css";
import HelpZone from "./HelpZone";
import CompanySilde from "./CompanySilde";
import NoLoginBannerSlide from "./NoLoginBannerSlide";
import LoginBannerUserCard from "./LoginBannerUserCard";
// import PickCard from "../../common/card/components/PickCard";
import PickCard from "../../common/card/components/PickCard";
import axios from "axios";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const NoLoginMainComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [pickCards, setPickCards] = useState([]);
  const [helpZones, sethelpZones] = useState([]);
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get("/api/pickcards/{companyId}/{personalId}")
    //   .then((response) => {
    //     setPickCards(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching pick cards: ", error);
    //   });

    axios
      //엔드포인트로 GET요청, 파라미터를 함께 보냄
      .get("/api/board/filter", {
        params: {
          filterType,
          page,
          size,
        },
      })
      .then((res) => {
        // 응답 데이터는 res.data.dtoList에 있고 이 데이터를 helpZones 상태에 저장함
        sethelpZones(res.data.dtoList);
      })
      .catch((error) => {
        console.error("Error help", error);
      });

    const handleWriteButton = () => {
      navigate("/cuboard"); // CUBoard로 이동
    };

    //토큰으로 로그인 확인
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          setIsLoggedIn(true);
          setUserInfo(decodedToken); // 토큰에서 필요한 사용자 정보 설정
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Invalid token", error);
        setIsLoggedIn(false);
      }
    }
    // axios
    //   .get("/api/main")
    //   .then((res) => {
    //     setBanner(res.data);
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error("error", error);
    //   });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="main_container">
      {isLoggedIn ? <LoginBannerUserCard /> : <NoLoginBannerSlide />}

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
              userName={list.userName}
              corrModify={formatDate(list.corrModify)}
              corrPoint={list.corrPoint}
              corrTitle={list.corrTitle}
              corrView={list.corrView}
              personalCareer={list.personalCareer}
            />
          );
        })}
      </div>
      <div className="company_slide">
        <h1>직존과 함께하는 기업</h1>
        <CompanySilde />
      </div>
    </div>
  );
};

export default NoLoginMainComponent;
