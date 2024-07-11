import React from "react";
import "../styles/BerrySelect.css";
import berry_image from '../../common/card/assets/berry.png';
import BerryButton from "./BerryButton";

const BerrySelect = ({ selectedBerry, onSelect }) => {
    const berryButtonValues = [100, 200, 500, 1000, 1500];

    return (
        <div>
            <div className="berry_select">
                <p>베리</p>
                <img src={berry_image} alt='포인트 베리 이미지' />
            </div>
            <div className="bs_berry_buttons">
                {berryButtonValues.map(value => (
                    <BerryButton
                        key={value}
                        type="button"
                        value={value}
                        isActive={value === selectedBerry}
                        onClick={() => onSelect(value)}
                    />
                ))}
            </div>
        </div>
    );
}

export default BerrySelect;