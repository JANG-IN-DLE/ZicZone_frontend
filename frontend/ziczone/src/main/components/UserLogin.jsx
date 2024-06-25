import React, { useState } from "react";
import './../styles/UserLogin.css'
import dropdown from '../assets/Dropdown.png'
import alarm from'../assets/Alarm.png'
import useDropdown from "../hooks/useDropdown";

const UserLogin = () => {
    const {open, Dropdown} = useDropdown();

    return (
        <div className="user_login">
            <div className="user_login_alarm">
                <img src={alarm} alt="Alarm" />
            </div>
            <div className="user_login_name">
                강승규님
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

export default UserLogin