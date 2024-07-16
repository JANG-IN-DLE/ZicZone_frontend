import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const PickCard = ({
  userName,
  userIntro,
  gender,
  jobName,
  personalCareer,
  companyId,
  techUrl,
  userId,
  personalId,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  // 이름 마스킹
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

  // 맵을 위한 문자열 변수 선언
  const techUrlsArray = techUrl.split(" ");
  const jobNameArray = jobName.split(",");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
          setIsLoggedIn(true);
          setUserType(decodedToken.role);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Invalid token", error);
        setIsLoggedIn(false);
      }
    }
  }, []);

  const cardClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (userType === "COMPANY") {
        navigate(`/pickzone/${companyId}/${personalId}`);
      } else if (userType === "PERSONAL") {
        navigate(`/pickzone/${userId}/${personalId}`);
      }
    }
  };

  return (
    <>
      <div className="user_card" onClick={cardClick}>
        <div className="pick_user_image_container">
          <img src={gender} alt="User Image" />
        </div>
        <div className="pick_user_info">
          <div className="pick_user_job">
            {jobNameArray.map((job, index) => (
              <span key={index}>#{job} </span>
            ))}
          </div>
          <div className="pick_user_name">
            {maskName(userName)}
            <span className="pick_user_career"> | {personalCareer}</span>
          </div>
          <div className="pick_user_intro">{userIntro}</div>
          <div className="pick_user_tech">
            {techUrlsArray.map((url, index) => (
              <img key={index} src={url} alt={`Tech Icon ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickCard;
