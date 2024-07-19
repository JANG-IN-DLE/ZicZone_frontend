import React from "react";
import { Link, useNavigate } from "react-router-dom";
import header from "../assets/Header.png";
import "./../styles/Header.css";
import NonLogin from "./HeaderNonLogin";
import UserLogin from "./HeaderUserLogin";
import CompLogin from "./HeaderCompLogin";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          //exp는 만료시간 나타내는 필드
          if (decodedToken.exp > currentTime) {
            setIsLoggedIn(true);
            fetchUserData(decodedToken);
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
    checkToken();
  }, []);

  const fetchUserData = (decodedToken) => {
    const userId = decodedToken.userId;
    const userType = decodedToken.role;

    if (userType === "COMPANY") {
      axios
        .get(`/api/main/companyUser/${userId}`)
        .then((res) => {
          setUserName(res.data.userName);
          setCompanyLogo(res.data.companyLogoUrl);
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    // localStorage.removeItem("href");
    window.location.href = "/";
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
              <CompLogin
                userName={userName}
                companyLogo={companyLogo}
                // onLogout 프롭스 전달
                onLogout={handleLogout}
              />
            ) : (
              <UserLogin userName={userName} onLogout={handleLogout} />
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
