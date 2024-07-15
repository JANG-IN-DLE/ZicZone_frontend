import React from "react";
import { Link } from "react-router-dom"; // 리액트 라우터의 Link 컴포넌트 import
import header from "../assets/Header.png";
import "./../styles/Header.css";
import NonLogin from "./NonLogin";
import UserLogin from "./UserLogin";
import CompLogin from "./CompLogin";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState();
  const [userName, setUserName] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");

  useEffect(() => {
    //로컬 스토리지에 토큰 담기
    const token = localStorage.getItem("token");

    //토큰이 있다면
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        // 토큰 시간 확인해서 로그인 상태로 설정
        if (decodedToken.exp > currentTime) {
          setIsLoggedIn(true);
        }
        // 아니면 비로그인 상태
        else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Invalid token", error);
        setIsLoggedIn(false);
      }
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        fetchUserData(decodedToken);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const fetchUserData = (decodedToken) => {
    const userId = decodedToken.userId;
    const userType = decodedToken.role; // 'company' 또는 'personal'

    if (userType === "COMPANY") {
      axios
        .get(`/api/main/companyUser/${userId}`)
        .then((res) => {
          setUserName(res.data.userName);
          setCompanyLogo(res.data.companyLogo);
          setUserRole(userType);
        })
        .catch((error) => {
          console.error("Error fetching company user data: ", error);
        });
    } else if (userType === "PERSONAL") {
      axios
        .get(`/api/main/personalUser/${userId}`)
        .then((res) => {
          setUserName(res.data.userName);
          setUserRole(userType);
        })
        .catch((error) => {
          console.error("Error fetching personal user data: ", error);
        });
    }
  };

  return (
    <div className="header">
      <nav className="header_nav">
        <div className="header_logo">
          <Link to="/">
            <img src={header} alt="Logo" />
          </Link>
        </div>
        <div className="header_nav_list">
          <div className="header_pick_zone">
            <div>
              <Link to="/pickzone">PICK존</Link>
            </div>
          </div>
          <div className="header_help_zone">
            <div>
              <Link to="/helpzone">HELP존</Link>
            </div>
          </div>
          <div className="header_company_zone">
            <div>
              <Link to="/companyzone">COMPANY존</Link>
            </div>
          </div>
        </div>
        <div className="login_component_div">
          {/* 로그인이 트루일 경우 */}
          {isLoggedIn ? (
            // 토큰 롤 가져와서 컴퍼니면 기업 로그인, 아니면 회원 로그인
            userRole === "COMPANY" ? (
              <CompLogin userName={userName} companyLogo={companyLogo} />
            ) : (
              <UserLogin userName={userName} />
            )
          ) : (
            // 로그인 펄스일 경우 비로그인 컴포넌트
            <NonLogin />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
