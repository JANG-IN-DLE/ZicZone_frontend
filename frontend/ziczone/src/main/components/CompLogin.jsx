import React, { useState } from "react";
import './../styles/CompLogin.css'
import dropdown from '../assets/Dropdown.png'
import comp_logo from'../assets/Comp_Logo.png'
import useDropdown from "../hooks/useDropdown";

const CompLogin = () => {
    const {open, Dropdown} = useDropdown();

    return (
        <div className="comp_login">
            <div className="comp_logo">
                <img src={comp_logo} alt="Comp_Logo" />
            </div>
            <div className="comp_login_name">
                토스페이먼츠
                <ul className={`dropdown_list ${open ? "show" : ""}`}>
                    <div><li>마이페이지</li></div>
                    <div><li>로그아웃</li></div>
                </ul>
            </div>
            <div className="dropdown" onClick={Dropdown}>
                    <img src={dropdown} alt="Dropdown" />
                </div>
        </div>
    )

}

export default CompLogin