import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserProfile from "./UserProfile";
import Layout from "../../common/layout/layout";
import api from "../../common/config/axiosInstance";

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

export default function PickZoneUserDetail() {
  const { loggedInUserId, personalId } = useParams();
  // 회원 정보 담는 hook
  const [userCard, setuserCard] = useState(null);
  // resume 정보 담는 hook
  const [userResume, setUserResume] = useState(null);
  // 선택 섹션 추적hook
  const [selectedSection, setSelectedSection] = useState("resume");
  // 사용자 유형을 추적하는 hook
  const [isCompany, setIsCompany] = useState(false);

  useEffect(() => {
    // 사용자 유형 가져오기
    const userType = localStorage.getItem("userRole");
    setIsCompany(userType === "COMPANY");

    // pickDetail에서 왼쪽에 회원정보 가져오는 axios
    api
      .get(`/api/personal/pickcards/${loggedInUserId}/${personalId}`)
      .then((response) => {
        const maskedUserCard = {
          ...response.data,
          userName: maskName(response.data.userName),
        };
        setuserCard(maskedUserCard);
      })
      .catch((error) => {
        console.log("Error fetching user details: ", error);
      });
    // pickDetail에서 resume 데이터 가져오는 axios
    api
      .get(`/api/personal/pickresume/${personalId}`)
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
  // 2개 api 같이 가져올 때 밑에 구문 작성해야 rendering 할때 같이 가져와진다.
  if (!userCard || !userResume) {
    return <div>Loading...</div>;
  }
  // 직무 가져오기
  const jobNames = userCard.jobName ? userCard.jobName.split(",") : [];
  // 기술 가져오기
  const techUrls = userCard.techUrl ? userCard.techUrl.split(",") : [];

  return (
    <Layout>
      <UserProfile
        userCard={userCard}
        jobNames={jobNames}
        techUrls={techUrls}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        userResume={userResume}
        isCompany={isCompany}
      />
    </Layout>
  );
}
