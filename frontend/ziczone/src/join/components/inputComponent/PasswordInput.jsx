import React from 'react';
import '../../styles/Join_Per.css';
import check from '../../assets/check.png'

const PasswordInput = ({ label }) => {
    return (
        <div className="personal password">
            <p>{label}</p>
            <div>
                <input type="password" placeholder="8~16자 영문, 숫자, 특수기호 포함" />
                <img src={check} alt="" />
            </div>
        </div>
    );
};

export default PasswordInput;