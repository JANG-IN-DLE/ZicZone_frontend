import React from "react";
import './../styles/NonLogin.css'
import { Link } from "react-router-dom";

const NonLogin = () => {
    return (
        <div className="non_login">
            <Link to="/"><button className="non_login_btn">
                로그인
            </button>
            </Link>
        </div>
    )
}

export default NonLogin