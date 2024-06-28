import React from "react";
import "../styles/BerryButton.css";

const BerryButton = ({ value, isActive, onClick }) => {
    return (
        <button className={`berry_button ${ isActive ? 'active' : '' }`} onClick={ onClick }>
            { value }
        </button>
    );
}

export default BerryButton;