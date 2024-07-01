import React, { useEffect, useState }from 'react';
import "../../styles/JoinCom/PasswordInput.css"
import check from '../../assets/check.png'
import usePasswordValidation from '../../hooks/usePasswordValidation';

const PasswordInput = ({ label, password, setPassword, confirmPassword }) => {
    const [isValid, handleChange] = usePasswordValidation(label, password, setPassword, confirmPassword);

    return (
        <div className="inputform password">
            <p>{label}</p>
            <div>
                <input
                    type="password"
                    placeholder="8~16자 영문, 숫자, 특수기호 포함"
                    value={label === "비밀번호 확인" ? confirmPassword : password}
                    onChange={handleChange}
                />
                <img
                    src={check}
                    alt=""
                    style={{ visibility: isValid ? 'visible' : 'hidden' }}
                />
            </div>
        </div>
    );
};

export default PasswordInput;