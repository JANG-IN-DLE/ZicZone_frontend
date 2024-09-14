import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PickCard from "../../common/card/components/PickCard";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";
import PickZoneJobstyle from "../../pickzone/styles/PickZoneJob.module.css";
import Modal from "../../pickzone/components/Modal";
import PickCardCommstyle from "../../common/card/styles/PickCardComm.module.css";
import config from "../../config";

// 이름 마스킹 함수
const maskName = (name) => {
  if (name.length === 2) {
    return `${name[0]}*`; // 이름이 2글자면 마지막 *
  } else if (name.length > 2) {
    const first = name[0];
    const last = name[name.length - 1];
    const masked = name.slice(1, -1).replace(/./g, "*");
    return `${first}${masked}${last}`;
  }
  return name;
};

function UserPickzone() {
  const [pickCards, setPickCards] = useState([]);
  const [jobs, setJobs] = useState([]);
  // 모달의 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(false);
  // 선택된 카드를 저장하는 상태
  const [selectedCard, setSelectedCard] = useState(null);
  // 선택된 Job을 저장하는 상태
  const [selectedJobs, setSelectedJobs] = useState(["전체"]);
  // pickzoneDetail로 가는 hook
  const navigate = useNavigate();
  // localStroage에서 userId, userRole을 가져옴
  const loggedInUserId = localStorage.getItem("userId");
  const userRole = localStorage.getItem("userRole");

  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [userImg, setUserImg] = useState([]);

  const api = axios.create({
    baseURL: config.baseURL
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // PickCards 데이터 가져옴
        const pickCardsResponse = await api.get(
          `/api/personal/pickcards?loggedInUserId=${loggedInUserId}`
        );
        const maskedData = pickCardsResponse.data.map((card) => ({
          ...card,
          userName: maskName(card.userName),
        }));
        setPickCards(maskedData);

        // Jobs 데이터를 가져옴
        const jobsResponse = await api.get("/api/jobs");
        setJobs([{ jobId: "all", jobName: "전체" }, ...jobsResponse.data]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [loggedInUserId]);

  const handleCardClick = (card) => {
    if (card.payHistoryId && card.payHistoryId.length > 0) {
      navigate(`/pickzone/${loggedInUserId}/${card.personalId}`);
    } else {
      setSelectedCard(card);
      setIsOpen(true);
    }
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };
  const handleOpenCard = () => {
    if (selectedCard) {
      // 로그인된 userId도 보낸다
      navigate(`/pickzone/${loggedInUserId}/${selectedCard.personalId}`);
    }
  };

  // 선택된 job이 있으면 pickcard의 job과 일치하는 것 걸러서 보여줄거야
  const filteredPickCards = selectedJobs.includes("전체")
    ? pickCards
    : pickCards
        .filter((card) => {
          return (
            card.jobName &&
            selectedJobs.some((job) => card.jobName.split(",").includes(job))
          );
        })
        // 각 카드가 선택된 직업과 얼마나 많이 겹치는지를 계산하여 점수화하고, 점수가 높은 순서대로 정렬합니다.
        .sort((a, b) => {
          const aMatches = a.jobName
            .split(",")
            .filter((job) => selectedJobs.includes(job)).length;
          const bMatches = b.jobName
            .split(",")
            .filter((job) => selectedJobs.includes(job)).length;
          return bMatches - aMatches;
        });

  api
    .get(`/api/main/personalUser/${loggedInUserId}`)
    .then((res) => {
      setUserName(res.data.userName);
      setUserEmail(res.data.email);
      setUserImg(res.data.gender === "male" ? personalMImage : personalFImage);
    })
    .catch((error) => {
      console.error("Error fetching personal user data: ", error);
    });

  return (
    <div>
      <div className={PickCardCommstyle.user_card_container}>
        {selectedCard && (
          <Modal
            isOpen={isOpen}
            onClose={handleCloseModal}
            userName={selectedCard.userName}
            onOpen={handleOpenCard}
            selectedCard={selectedCard}
            loggedInUserId={loggedInUserId}
            berryPoint={selectedCard.berryPoint}
          />
        )}

        {filteredPickCards.slice(0, 4).map((card) => {
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
              userName={card.userName}
              userCareer={card.personalCareer}
              userIntro={card.userIntro}
              techUrls={techUrls}
              onClick={() => handleCardClick(card)}
              isCompany={userRole === "COMPANY"}
            />
          );
        })}
      </div>
    </div>
  );
}
export default UserPickzone;
