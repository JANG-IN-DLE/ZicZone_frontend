import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import PickCard from "./PickCard";
import HelpZone from "./HelpZone";
import CompanySilde from "./CompanySilde";
import NoLoginBannerSlide from "./NoLoginBannerSlide";

const NoLoginMainComponent = () => {
  return (
    <div className="main_container">
      <NoLoginBannerSlide />
      <div className="pickzone">
        <h1>PICK 존</h1>
        <div className="user_card_container">
          <PickCard />
          <PickCard />
          <PickCard />
          <PickCard />
        </div>
      </div>
      <div className="helpzone">
        <h1>HELP 존</h1>
        <HelpZone />
        <HelpZone />
        <HelpZone />
        <HelpZone />
        <HelpZone />
      </div>
      <div className="company_slide">
        <CompanySilde />
        <CompanySilde />
        <CompanySilde />
      </div>
    </div>
  );
};

export default NoLoginMainComponent;
