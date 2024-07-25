import React, { useEffect, useState } from "react";
import "../styles/MainMain.css";
import NoLoginBannerSlide from "./NoLoginBannerSlide";
import LoginBannerUserCard from "./LoginBannerUserCard";
import axios from "axios";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Layout from "../../common/layout/layout";
import BoardItem from "../../helpzone/components/BoardItem";
import CompanyMain from "../components/CompanyMain";
import NonLoginMain from "../components/NonLoginMain";
import PersonalMain from "../components/PersonalMain";
import CompanySildeLeft from "../../main/components/CompanySilde_left";

const MainComponent = ({ board }) => {
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

  const userRole = localStorage.getItem("userRole");
  const tokenUserId = localStorage.getItem("userId");

  const handleCardClick = (tokenUserId) => {
    navigate(`/pickzone/${isLoggedIn ? "loggedInPersonalId" : "personalId"}`);
  };

  return (
    <Layout>
      <div className="main_container">
        {isLoggedIn ? <LoginBannerUserCard /> : <NoLoginBannerSlide />}
        <div className="pickzone">
          <h1>PICK존</h1>
          <div className="user_card_container"></div>
          {!isLoggedIn ? (
            <NonLoginMain />
          ) : userRole === "PERSONAL" ? (
            <PersonalMain />
          ) : userRole === "COMPANY" ? (
            <CompanyMain />
          ) : null}
        </div>
        <div className="helpzone">
          <h1 className="main_helpzone">HELP존</h1>
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
          <CompanySildeLeft />
        </div>
      </div>
    </Layout>
  );
};

export default MainComponent;
