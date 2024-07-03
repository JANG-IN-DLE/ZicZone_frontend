import React from "react";
import { useNavigate } from "react-router";

const HelpZone = ({
  userId,
  corrTitle,
  corrPoint,
  corrModify,
  corrViewcnt,
  userCareer,
}) => {
  return (
    <>
      <div className="help_list">
        <div className="help_list_berry">{corrPoint}</div>
        <div className="help_list_content">
          <div className="help_list_title">{corrTitle}</div>
          <div className="help_list_user_name">
            {userId}
            <span className="help_list_user_career"> | {userCareer}</span>
          </div>
        </div>
        <div className="help_list_date">
          <div className="help_list_create_date">{corrModify}</div>
          <div className="help_list_viewcnt">
            조회수
            <span className="help_list_viewcnt_num">{corrViewcnt}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpZone;
