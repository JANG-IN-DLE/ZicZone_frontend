import React, { useState } from "react";
import "../styles/FilterButtons.css";

const FilterButtons = ({ setFilterType }) => {
    const [activeButton, setActiveButton] = useState('latest');

    const handleButtonClick = (type) => {
        setFilterType(type);
        setActiveButton(type);
    };

    return (
        <div className="filter_buttons">
            <button 
                className={activeButton === 'latest' ? 'active' : ''} 
                onClick={() => handleButtonClick('latest')}
            >
                최신순
            </button>
            <button 
                className={activeButton === 'views' ? 'active' : ''} 
                onClick={() => handleButtonClick('views')}
            >
                조회순
            </button>
            <button 
                className={activeButton === 'berry' ? 'active' : ''} 
                onClick={() => handleButtonClick('berry')}
            >
                베리
            </button>
        </div>
    );
}

export default FilterButtons;