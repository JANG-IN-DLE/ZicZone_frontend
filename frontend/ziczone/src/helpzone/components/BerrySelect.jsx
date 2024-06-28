import React from "react";
import "../styles/BerrySelect.css";
import berry_image from '../assets/berry.png';
import BerryButton from "./BerryButton";
import useBerrySelect from "../hooks/useBerrySelect.js";

const BerrySelect = () => {
    const berryButtonValues = [ 100, 200, 500, 1000, 1500 ];
    const { berry, handleSelect} = useBerrySelect(100);
    return (
        <div>
            <div className="berry_select">
                <p>베리</p>
                <img src={ berry_image } alt='포인트 베리 이미지' />
            </div>
            <div className="bs_berry_buttons">
                    { berryButtonValues.map(value => (
                        <BerryButton
                            key={ value }
                            value={ value }
                            isActive={ value === berry }
                            onClick={() => handleSelect(value)}
                        />
                    ))}
                </div>
        </div>
    );
}

export default BerrySelect;