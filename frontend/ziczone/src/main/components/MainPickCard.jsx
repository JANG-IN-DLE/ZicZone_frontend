import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Modal from "../../pickzone/components/Modal";
import api from '../../common/config/axiosInstance';

const PickCard = ({
  userName,
  userIntro,
  gender,
  jobName,
  personalCareer,
  companyId,
  techUrl = [],
  userId,
  personalId,
  berryPoint,
  loggedInUserId,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const techUrlsArray = techUrl.split(",");
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
        navigate(`/pickzone/${loggedInUserId}/${personalId}`);
      } else if (userType === "PERSONAL") {
        setSelectedCard({
          userName,
          userIntro,
          gender,
          jobName,
          personalCareer,
          companyId,
          techUrl,
          userId,
          personalId,
          berryPoint,
        });
        setIsModalOpen(true);
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    // 개인 유저의 경우 처리할 로직 추가
    const loggedInPersonalId = personalId;
    const openCardData = {
      sellerId: selectedCard.personalId,
      buyerId: loggedInPersonalId,
      payHistoryContent: "이력서조회",
      payHistoryDate: new Date().toISOString(),
    };
    api
      .post("/api/personal/open-card", openCardData)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/pickzone/${loggedInPersonalId}/${selectedCard.userId}`);
          setIsModalOpen(false);
        } else if (response.status === 303) {
          alert("이미 결제한 이력서입니다.");
          setTimeout(() => {
            window.location.href = response.headers.location;
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error opening card:", error);
        if (error.response && error.response.data) {
          alert(error.response.data);
        }
      });
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
              <img key={index} src={url} alt={`Tech${index}`} />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          userName={maskName(userName)}
          onOpen={handleModalOpen}
          selectedCard={selectedCard}
          berryPoint={berryPoint}
        />
      )}
    </>
  );
};

export default PickCard;
