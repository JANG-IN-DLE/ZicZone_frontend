import React from "react";
import { useNavigate } from "react-router";

const HelpZone = ({
  corrModify,
  corrPoint,
  corrTitle,
  corrView,
  userId,
  personalCareer,
  userName,
}) => {
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
  return (
    <>
      <div className="help_list">
        <div className="help_list_berry" style={getPointStyle(corrPoint)}>
          {corrPoint}
        </div>
        <div className="help_list_content">
          <div className="help_list_title">{corrTitle}</div>
          <div className="help_list_user_name">
            {userName}
            <span className="help_list_user_career"> | {personalCareer}</span>
          </div>
        </div>
        <div className="help_list_date">
          <div className="help_list_create_date">{corrModify}</div>
          <div className="help_list_viewcnt">
            조회수
            <span className="help_list_viewcnt_num">{corrView}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpZone;
