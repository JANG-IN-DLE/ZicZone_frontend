import React from 'react';
import "../../styles/JoinCom/PasswordInput.css"
import check from '../../assets/check.png'
import usePasswordValidation from '../../hooks/usePasswordValidation';

const PasswordInput = () => {
    
    const {
        password,
        confirmPassword,
        isPasswordValid,
        isConfirmValid,
        handlePasswordChange,
        handleConfirmChange
    } = usePasswordValidation();

    return (
        <div className='passwordbox'>
            <div className="inputform password">
                <p>비밀번호</p>
                <div>
                    <input
                        type="password"
                        placeholder="8~16자 영문, 숫자, 특수기호 포함"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <img
                        src={check}
                        alt=""
                        style={{ visibility: isPasswordValid ? 'visible' : 'hidden' }}
                    />
                </div>
            </div>
            <div className="inputform password">
                <p>비밀번호 확인</p>
                <div>
                    <input
                        type="password"
                        placeholder="8~16자 영문, 숫자, 특수기호 포함"
                        value={confirmPassword}
                        onChange={handleConfirmChange}
                    />
                    <img
                        src={check}
                        alt=""
                        style={{ visibility: isConfirmValid ? 'visible' : 'hidden' }}
                    />
                </div>
            </div>
            {!isConfirmValid && password !== '' && confirmPassword !== '' && isPasswordValid && <p className="error-message-wrong">비밀번호가 일치하지 않습니다.</p>}
        </div>
    );
};

export default PasswordInput;