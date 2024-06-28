import React from "react";
import "../styles/Button.css";

const Button = ({ type, onClick, children }) => {
    return(
        <button className={`button ${type}`} onClick={ onClick }>
            { children }
        </button>
    );
}

export default Button;