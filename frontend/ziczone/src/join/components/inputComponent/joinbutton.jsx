import React from 'react';
import '../../styles/form_base.css';
import perjoinbtn from "../../assets/perjoinbtn.png"
import comjoinbtn from "../../assets/comjoinbtn.png"

const JoinButton = ({category}) => {
    return (
        <button className="com_join_btn" type="submit">
            <img src={category === "com" ? comjoinbtn : perjoinbtn} alt="가입 버튼" />
        </button>
    );
};

export default JoinButton;