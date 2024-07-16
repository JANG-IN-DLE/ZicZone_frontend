import React from "react";
import "../styles/Button.css";

const Button = ({ type, onClick, children, className }) => {
    return (
        <button className={`button ${type} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;