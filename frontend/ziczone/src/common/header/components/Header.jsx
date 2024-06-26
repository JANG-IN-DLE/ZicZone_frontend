import React from "react";
import { BrowserRouter, Router, Routes, Link } from "react-router-dom";
import header from '../assets/Header.png'
import './../styles/Header.css'
import NonLogin from "./NonLogin";
import UserLogin from "./UserLogin";
import CompLogin from "./CompLogin";

const Header = () => {

    return (
        <BrowserRouter>
            <header>
                <nav className="header_nav">
                    <ul className="header_nav_list">
                        <div className="header_logo">
                            <Link to="/"><img src={header} alt="Logo" /></Link>
                        </div>
                        <div className="header_pick_zone">
                            <li>
                                <Link to="/">PICK존</Link>
                            </li>
                        </div>
                        <div className="header_help_zone">
                            <li>
                                <Link to="/">HELP존</Link>
                            </li>
                        </div>
                        <div className="header_company_zone">
                            <li>
                                <Link to="/">COMPANY존</Link>
                            </li>
                        </div>
                    </ul>
                    <NonLogin />
                    {/* <UserLogin /> */}
                    {/* <CompLogin /> */}
                </nav>
            </header>
        </BrowserRouter>
    )
}

export default Header;