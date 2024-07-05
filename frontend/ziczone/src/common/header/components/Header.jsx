import React from "react";
import { Link } from "react-router-dom"; // 리액트 라우터의 Link 컴포넌트 import
import header from "../assets/Header.png";
import "./../styles/Header.css";
import NonLogin from "./NonLogin";
import UserLogin from "./UserLogin";
import CompLogin from "./CompLogin";

const Header = () => {
  return (
    <div className="header">
      <nav className="header_nav">
        <div className="header_logo">
          <Link to="/">
            <img src={header} alt="Logo" />
          </Link>
        </div>
        <div className="header_nav_list">
          <div className="header_pick_zone">
            <div>
              <Link to="/pickzone">PICK존</Link>
            </div>
          </div>
          <div className="header_help_zone">
            <div>
              <Link to="/">HELP존</Link>
            </div>
          </div>
          <div className="header_company_zone">
            <div>
              <Link to="/">COMPANY존</Link>
            </div>
          </div>
        </div>
        <div className="login_component_div">
          <NonLogin />
          {/* <UserLogin /> */}
          {/* <CompLogin /> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
