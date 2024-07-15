import React, { useState } from "react";
import "./../styles/CompLogin.css";
import dropdown from "../assets/Dropdown.png";
import useDropdown from "../hooks/useDropdown";
import { Link } from "react-router-dom";
import axios from "axios";

const CompLogin = ({ companyLogo, userName }) => {
  const { open, Dropdown } = useDropdown();

  return (
    <div className="comp_login">
      <div className="comp_login_logo">
        {/* 컴퍼니로고가 있다면 이미지에 로고 띄우고 없으면 공백 처리 */}
        {companyLogo ? <img src={companyLogo} alt="Company Logo" /> : null}
      </div>
      <div className="comp_login_name">
        {userName}
        <div className={`dropdown_list ${open ? "show" : ""}`}>
          <div className="list1">
            <Link to="/mypage">마이페이지</Link>
          </div>
          <div className="list2">
            <Link to="/">로그아웃</Link>
          </div>
        </div>
      </div>
      <div className="dropdown" onClick={Dropdown}>
        <img src={dropdown} alt="Dropdown" />
      </div>
    </div>
  );
};

export default CompLogin;
