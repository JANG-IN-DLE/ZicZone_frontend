import React from "react";
import { BrowserRouter, Router, Routes, Link } from "react-router-dom";
import footer from "../assets/Footer.png";
import github from "../assets/GitHub.png";
import notion from "../assets/Notion.png";
import figma from "../assets/Figma.png";
import slack from "../assets/Slack.png";
import award from "../assets/Award.png";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer_list">
        <div className="footer_zz_img">
          <img src={footer} alt="footer_logo" />
        </div>
        <div className="footer_left">
          <div>
            <li>
              직존 고객센터 : 010-2427 - 9672 (평일 09:30 - 18:00, 점심시간
              12:50 - 14:10, 주말 · 공휴일 휴무)
            </li>
            <li>이메일 : ziczoneHelp@gmail.com / Fax : 02-1234-5678</li>
          </div>
          <div className="footer_addr">
            <li>우리 주소 : </li>
            <li>사업자 번호 : </li>
          </div>
          <div>
            <li>Copyright ⓒ 장인들. All rights reserved.</li>
          </div>
          <div className="footer_link">
              <Link to="https://github.com/JANG-IN-DLE">
            <li>
              <img src={github} alt="Github" />
            </li>
            </Link>
              <Link to="https://www.notion.so/b493265bc4a34d48b4cf09b194a5ce85?v=68cfec235bf14faa9deb0887b9182cab&pvs=4">
            <li>
              <img src={notion} alt="Github" />
            </li>
            </Link>
              <Link to="https://www.figma.com/design/vlG01D5qQTAgKAG8A2xN7O/%EC%A7%81%EC%A1%B4?node-id=874-6999&t=cdlUOiFDi7RrTerb-1">
            <li>
              <img src={figma} alt="Github" />
            </li>
            </Link>
            <Link to="https://app.slack.com/client/T0774D3L2QG/C07612QT1LP">
            <li>
              <img src={slack} alt="Github" />
            </li>
            </Link>
          </div>
          <div className="footer_award">
            <li>
              <img src={award} alt="Award" />
            </li>
          </div>
        </div>
        <div className="footer_center">
            <Link to="/ziczoneIntro">
          <li>
            서비스 소개
          </li>
          </Link>
          <li>
            {/* <Link to="/"></Link> */}
            장인들Team
          </li>
            <Link to="/servicepolicy">
          <li>
            서비스 정책
          </li>
          </Link>
        </div>
        <div className="footer_right">
          <li>
            {/* <Link to="/"></Link> */}
            <b>개인정보처리방침</b>
          </li>
          <li>{/* <Link to="/">자주받는 질문 FAQ</Link> */}</li>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
