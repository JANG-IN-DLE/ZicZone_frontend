import React from "react";
import header from '../assets/Header.png'
import './../styles/Header.css'
import NonLogin from "./NonLogin";
import UserLogin from "./UserLogin";
import CompLogin from "./CompLogin";

const Header = () => {

    return (
        <header>
            <nav className="header_nav">
                <ul className="header_nav_list">
                    <div className="header_logo">
                        <a href=""><img src={header} alt="Logo" /></a>
                    </div>
                    <div className="header_pick_zone">
                        <li>
                            <a href="">PICK존</a>
                        </li>
                    </div>
                    <div className="header_help_zone">
                        <li>
                            <a href="">HELP존</a>
                        </li>
                    </div>
                    <div className="header_company_zone">
                        <li>
                            <a href="">COMPANY존</a>
                        </li>
                    </div>
                </ul>
                {/* <NonLogin /> */}
                <UserLogin />
                {/* <CompLogin /> */}
            </nav>
        </header>
    )
}

export default Header;