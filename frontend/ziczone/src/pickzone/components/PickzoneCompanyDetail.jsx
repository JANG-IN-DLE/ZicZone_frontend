import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import UserProfile from "./UserProfile";
import PickModal from "./PickModal";
import Layout from "../../common/layout/layout";
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

export default function PickzoneCompanyDetail() {
  const { loggedInUserId, personalId } = useParams();
  // 회원 정보 담는 hook
  const [userCard, setUserCard] = useState(null);
  // resume 정보 담는 hook
  const [userResume, setUserResume] = useState(null);
  // 선택 섹션 추적hook
  const [selectedSection, setSelectedSection] = useState("resume");
  // modal open hook
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Pick 상테 추적 hook
  const [isPicked, setIsPicked] = useState(false);

  // localStorage에서 userRole 값을 가져와 isCompany 설정
  const userRole = localStorage.getItem("userRole");
  const isCompany = userRole === "COMPANY";

  const api = axios.create({
    baseURL: config.baseURL
  });

  useEffect(() => {
    // (CompanyId로 로그인되어을때) personalId가지고 해당하는 회원 정보 가져오기(pickDetail  왼쪽 회원 정보)
    api
      .get(`/api/company/pickcards/${loggedInUserId}/${personalId}`)
      .then((response) => {
        const maskedUserCard = {
          ...response.data,
          userName: maskName(response.data.userName),
        };
        setUserCard(maskedUserCard);
        setIsPicked(response.data.pick); // pick 상태 저장
      })
      .catch((error) => {
        console.log("Error fetching user details: ", error);
      });
    // (CompanyId로 로그인되었을때) personalId가지고 해당하는 회원 resume 정보 가져오기(pickDetail 오른쪽 정보)
    api
      .get(`/api/company/pickresume/${personalId}`)
      .then((response) => {
        const maskedUserResume = {
          ...response.data,
          resumeName: maskName(response.data.resumeName),
        };
        setUserResume(maskedUserResume);
      })
      .catch((error) => {
        console.log("Error fetching user resume details: ", error);
      });
  }, [loggedInUserId, personalId]);
  // pick이 되어있으면 userName을 정확하게 표시
  useEffect(() => {
    if (userCard && isPicked) {
      setUserCard((prevUserCard) => ({
        ...prevUserCard,
        userName: userCard.userName,
      }));
    }
  }, [isPicked]);

  if (!userCard || !userResume) {
    return <div>Loading...</div>;
  }
  const jobNames = userCard.jobName ? userCard.jobName.split(",") : [];
  const techUrls = userCard.techUrl ? userCard.techUrl.split(",") : [];

  // "pick {userName}" 클릭 시
  const handlePickClick = () => {
    setIsModalOpen(true);
  };
  // "취소" 클릭 시
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  // "Pick" 클릭시
  const handlePickConfirm = () => {
    api
      .post("/api/company/pick", {
        userId: loggedInUserId,
        personalId: personalId,
      })
      .then((response) => {
        console.log("Pick성공:", response.data);
        setIsPicked(response.data.pick); // pick 저장
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log("Error picking user: ", error);
      });
  };

  return (
    <div>
      <Layout>
        <UserProfile
          userCard={userCard}
          jobNames={jobNames}
          techUrls={techUrls}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          userResume={userResume}
          isCompany={isCompany}
          onPickClick={handlePickClick}
          isScrap={userCard.scrap}
          isPicked={isPicked} // pick 상태 전달
        />
        <PickModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          userName={userCard.userName}
          onPick={handlePickConfirm}
        />
      </Layout>
    </div>
  );
}
