import React from "react";
import "../styles/BerryButton.css";

const BerryButton = ({ value, isActive, onClick }) => {
    return (
        <div>
            <div className={`berry_button ${isActive ? 'active' : ''}`} onClick={onClick}>
                { value }
            </div>
        </div>
    );
}

export default BerryButton;