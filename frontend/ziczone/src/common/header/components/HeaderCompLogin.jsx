import React, { useState } from "react";
import "./../styles/CompLogin.css";
import dropdown from "../assets/Dropdown.png";
import useDropdown from "../hooks/useDropdown";
import { Link } from "react-router-dom";

const CompLogin = ({ companyLogo, userName, onLogout }) => {
  const { open, Dropdown, dropdownRef } = useDropdown();
  const userId = localStorage.getItem("userId")

  return (
    <div className="comp_login" ref={dropdownRef}>
      <div className="comp_login_logo">
        {/* 컴퍼니로고가 있다면 이미지에 로고 띄우고 없으면 공백 처리 */}
        {companyLogo ? <img src={companyLogo} alt="Company Logo" /> : null}
      </div>
      <div className="comp_login_name" onClick={Dropdown}>
        {userName}
        <div className={`dropdown_list ${open ? "show" : ""}`}>
          <div className="list1">
            <Link to={`/company/${userId}`}>마이페이지</Link>
          </div>
          <div className="list2">
            <Link to="/" onClick={onLogout}>
              로그아웃
            </Link>
          </div>
        </div>
        <div className="dropdown">
          <img src={dropdown} alt="Dropdown" />
        </div>
      </div>

    </div>
  );
};

export default CompLogin;
