import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const HelpZone = ({
  corrModify,
  corrPoint,
  corrTitle,
  corrView,
  personalCareer,
  userName,
  userId,
  corrId,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState();
  const [view, setView] = useState();

  const getPointStyle = (point) => {
    switch (point) {
      case 100:
        return { backgroundColor: "#FFFFFF", color: "#000000" };
      case 200:
        return { backgroundColor: "rgba(0, 81, 186, 0.25)", color: "#FFFFFF" };
      case 500:
        return { backgroundColor: "rgba(0, 81, 186, 0.5)", color: "#FFFFFF" };
      case 1000:
        return { backgroundColor: "rgba(0, 81, 186, 0.75)", color: "#FFFFFF" };
      case 1500:
        return { backgroundColor: "#0051BA", color: "#FFFFFF" };
      default:
        return { backgroundColor: "#FFFFFF", color: "#000000" };
    }
  };

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

  const handleItemClick = async () => {
    if (!isLoggedIn) {
      navigate("/login"); // 로그인 페이지로 이동
      return;
    }
    try {
      await axios.put(`/api/user/board/viewCnt/${userId}/${corrId}`);
      navigate(`/rdboard/${corrId}`, { state: { userId } });
      console.log("ㅇㄹㄴㄼ3ㄷ");
    } catch (error) {
      console.error("오류 메시지: ", error);
    }
  };

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const response = await axios.get(`/api/user/board/${corrId}`);
        setBoardData(response.data);
        setView(response.data.corrView);
        console.log("셋뷰", response.data.corrView);
      } catch (error) {
        console.error("오류 메시지: ", error);
      }
    };

    fetchBoardData();
  }, [corrId]); // corrId가 변경될 때마다 데이터 새로 고침

  return (
    <>
      <div
        className="help_list"
        onClick={handleItemClick}
        style={{ cursor: "pointer" }}
      >
        <div className="help_list_berry" style={getPointStyle(corrPoint)}>
          {corrPoint}
        </div>
        <div className="help_list_content">
          <div className="help_list_title">{corrTitle}</div>
          <div className="help_list_user_name">
            {maskName(userName)}
            <span className="help_list_user_career"> | {personalCareer}</span>
          </div>
        </div>
        <div className="help_list_date">
          <div className="help_list_create_date">{corrModify}</div>
          <div className="help_list_viewcnt">
            조회수
            <span className="help_list_viewcnt_num"> {corrView}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpZone;
