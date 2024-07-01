import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/JoinCom/ComNumInput.css';
import "../../styles/form_base.css";
import useCompanyAuth from '../../hooks/useCompanyAuth';

const ComNumInput = () => {
    // 커스텀 훅을 사용하여 필요한 상태와 함수를 가져옵니다.
    const { comNum, isValid, isVerified, handleInputChange, handleVerification } = useCompanyAuth();

    return (
        <div className="inputform num">
            <p>사업자등록번호</p>
            <div className="num_input">
                <input 
                    type="text" 
                    value={comNum} 
                    onChange={handleInputChange} 
                    placeholder="사업자등록번호를 입력하세요.(숫자만 입력하세요)"
                    readOnly={isVerified} 
                />
                <button className={isVerified ? 'valid' : ''} onClick={isVerified ? ()=> {} : handleVerification}>
                    {isVerified ? '인증 완료' : '인증하기'}
                </button>
                {isValid === false && (
                <p className="verification-result invalid">
                    유효하지 않은 사업자등록번호입니다.
                </p>
                )}
            </div>
        </div>
    );
};

export default ComNumInput;