import React from 'react';
import '../../styles/Join_Per.css';
import perjoinbtn from "../../assets/perjoinbtn.png"

const JoinButton = () => {
    return (
        <button className="com_join_btn" type="submit">
            <img src={perjoinbtn} alt="가입 버튼" />
        </button>
    );
};

export default JoinButton;