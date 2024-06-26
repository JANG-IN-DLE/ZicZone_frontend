import React from "react";
import { BrowserRouter, Router, Routes, Link } from "react-router-dom";
import footer from '../assets/Footer.png'
import github from '../assets/GitHub.png'
import award from '../assets/Award.png'
import './../styles/Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <div className="footer">
                <ul className="footer_list">
                    <div>
                        <img src={footer} alt="footer_logo" />
                    </div>
                    <div className="footer_left">
                        <div>
                            <li>직존 고객센터 : 010-2427 - 9672 (평일 09:30 - 18:00, 점심시간 12:50 - 14:10, 주말 · 공휴일 휴무)</li>
                            <li>이메일 : ziczoneHelp@gmail.com / Fax : 02-1234-5678</li>
                        </div>
                        <div className="footer_addr">
                            <li className>우리 주소 : </li>
                            <li className>사업자 번호 : </li>
                        </div>
                        <div>
                            <li>Copyright ⓒ 장인들. All rights reserved.</li>
                        </div>
                        <div className="footer_link">
                            <li><Link to="/"></Link><img src={github} alt="Github" /></li>
                            <li><Link to="/"></Link><img src={github} alt="Github" /></li>
                            <li><Link to="/"></Link><img src={github} alt="Github" /></li>
                            <li><Link to="/"></Link><img src={github} alt="Github" /></li>
                            <li><Link to="/"></Link><img src={github} alt="Github" /></li>
                        </div>
                        <div className="footer_award">
                            <li><img src={award} alt="Award" /></li>
                        </div>
                    </div>
                    <div className="footer_center">
                        <li><Link to="/">서비스 소개</Link></li>
                        <li><Link to="/">장인들Team</Link></li>
                        <li><Link to="/">서비스 정책</Link></li>
                    </div>
                    <div className="footer_right">
                        <li><Link to="/"><b>개인정보처리방침</b></Link></li>
                        <li><Link to="/">자주받는 질문 FAQ</Link></li>
                    </div>
                </ul>
            </div>
        </BrowserRouter>
    )
}

export default Footer