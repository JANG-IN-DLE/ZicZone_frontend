import Image from "../ScrollToTop/ScrollToTop.png";
import ScrollToTopstyle from "../ScrollToTop/ScrollToTopstyle.css";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="STT_container">
        <div className="STT_position">
          <img src={Image} alt="STT" onClick={scrollToTop} />
        </div>
      </div>
    </>
  );
};
export default ScrollToTop;
