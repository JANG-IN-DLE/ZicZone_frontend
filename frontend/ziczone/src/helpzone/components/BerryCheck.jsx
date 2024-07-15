import React from 'react';
import "../styles/BerryCheck.css";

const BerryCheck = ({ label, checked, onChange }) => {
    return (
        <div className='berry_check'>
            <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
            <label>
                {label}
            </label>
        </div>
    );
};

export default BerryCheck;