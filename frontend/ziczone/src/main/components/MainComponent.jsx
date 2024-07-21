import React, { useEffect, useState } from "react";
import "../styles/MainMain.css";
import HelpZone from "./HelpZone";
import CompanySilde from "./CompanySilde";
import NoLoginBannerSlide from "./NoLoginBannerSlide";
import LoginBannerUserCard from "./LoginBannerUserCard";
import axios from "axios";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import MainPickCard from "./MainPickCard";
import PickCard from "../../common/card/components/PickCard";
import Layout from "../../common/layout/layout";
import BoardItem from "../../helpzone/components/BoardItem";

const NoLoginMainComponent = ({ board }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [pickCards, setPickCards] = useState([]);
  const [helpZones, setHelpZones] = useState([]);
  const [filterType, setFilterType] = useState("latest");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHelpZones();
  }, [filterType, page, size]);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    fetchPickCards();
  }, [isLoggedIn, userInfo]);

  const fetchHelpZones = () => {
    axios
      .get("/api/user/board/filter", {
        params: {
          filterType,
          page,
          size,
        },
      })
      .then((res) => {
        setHelpZones(res.data.dtoList);
      })
      .catch((error) => {
        console.error("Error fetching help zones: ", error);
      });
  };

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          setIsLoggedIn(true);
          setUserInfo(decodedToken);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Invalid token", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const tokenUserId = localStorage.getItem("userId");

  // 날짜 형식 바꾸기
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const handleCardClick = (tokenUserId) => {
    navigate(`/pickzone/${isLoggedIn ? "loggedInPersonalId" : "personalId"}`);
  };

  const fetchPickCards = async () => {
    if (!isLoggedIn || !userInfo) {
      console.error("User is not logged in or userInfo is not available");
      return;
    }
    let endpoint = "/api/pickcards"; // 기본 비로그인 엔드포인트
    const loggedInUserId = userInfo.userId;
    if (isLoggedIn) {
      switch (userInfo.role) {
        case "COMPANY":
          endpoint = `/api/company/pickcards?loggedInUserId=${loggedInUserId}`;
          break;
        case "PERSONAL":
          endpoint = `/api/personal/pickcards?loggedInUserId=${loggedInUserId}`;
          break;
        default:
          console.error("Unknown user role");
          return;
      }
    }

    try {
      const response = await axios.get(endpoint);
      setPickCards(response.data); // 응답 데이터를 pickCards 상태로 설정
    } catch (error) {
      console.error("Error fetching pick cards: ", error);
    }
  };

  return (
    <Layout>
      <div className="main_container">
        {isLoggedIn ? <LoginBannerUserCard /> : <NoLoginBannerSlide />}
        <div className="pickzone">
          <h1>PICK 존</h1>
          <div className="user_card_container">
            {pickCards.slice(0, 4).map((pick) => {
              const userImage =
                pick.gender === "MALE" ? personalMImage : personalFImage;
              return (
                <MainPickCard
                  key={pick.userId} // 키값 변경
                  companyId={pick.companyId}
                  personalId={pick.personalId}
                  userId={pick.userId}
                  userName={pick.userName}
                  userIntro={pick.userIntro}
                  gender={userImage}
                  jobName={pick.jobName}
                  personalCareer={pick.personalCareer}
                  techUrl={pick.techUrl}
                  scrap={pick.scrap}
                  onClick={() => handleCardClick(pick.loggedInUserId)}
                  berryPoint={pick.berryPoint}
                  loggedInUserId={tokenUserId}
                />
              );
            })}
          </div>
        </div>
        <div className="helpzone">
          <h1>HELP 존</h1>
          {Array.isArray(helpZones) &&
            helpZones.length > 0 &&
            helpZones
              .slice(0, 5)
              .map((board) => (
                <BoardItem
                  key={board.corrId}
                  board={board}
                  userId={tokenUserId}
                />
              ))}
        </div>
        <div className="company_slide">
          <h1>직존과 함께하는 기업</h1>
          <CompanySilde />
        </div>
      </div>
    </Layout>
  );
};

export default NoLoginMainComponent;
