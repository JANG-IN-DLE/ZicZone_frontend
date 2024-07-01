import React, { useEffect, useState } from "react";
import axios from "axios";

const PickCard = () => {
  return (
    <>
      <div className="user_card">
        <div className="pick_user_image_container">
          <img className="pick_user_image" src="user_image.png" />
        </div>
        <div className="pick_user_info">
          <div className="pick_user_job">
            #풀스택 #devops/시스템 #게임 클라이언트
          </div>
          <div className="pick_user_name">
            전*재
            <span className="pick_user_career"> | 신입</span>
          </div>
          <div className="pick_user_intro">
            클라우드 환경에서 최적의 성능을 구현하는 DevOps 엔지니어입니다.
          </div>
          <div className="pick_user_tech">
            <div className="tech_icon"></div>
            <div className="tech_icon"></div>
            <div className="tech_icon"></div>
            <div className="tech_icon"></div>
            <div className="tech_icon"></div>
            <div className="tech_icon"></div>
            <div className="tech_icon"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PickCard;
