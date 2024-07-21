import React, { useState } from "react";
import "./../styles/UserLogin.css";
import dropdown from "../assets/Dropdown.png";
import alarm from "../assets/Alarm.png";
import useDropdown from "../hooks/useDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import AlarmList from "./Alarm";

const UserLogin = ({ userName, onLogout }) => {
  const { open, Dropdown, dropdownRef } = useDropdown();
  const userId = localStorage.getItem("userId")

  return (
    <>
      <div className="user_login" ref={dropdownRef}>
        <AlarmList/>
        <div className="user_login_name">
          {userName}
          <div className={`dropdown_list ${open ? "show" : ""}`}>
            <div className="list1">
              <Link to={`/personal/${userId}`}>마이페이지</Link>
            </div>
            <div className="list2">
              <Link to="/" onClick={onLogout}>
                로그아웃
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown" onClick={Dropdown}>
          <img src={dropdown} alt="Dropdown" />
        </div>
      </div>
    </>
  );
};

export default UserLogin;
