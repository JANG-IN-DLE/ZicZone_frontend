import React from 'react';
import useEmailVerification from '../../hooks/useEmailAuth';
import "../../styles/JoinCom/EmailInput.css";

const EmailInput = () => {
    const {
        email,
        inputCode,
        isSend,
        isAuth,
        handleEmailChange,
        handleCodeChange,
        sendVerificationEmail,
        verifyAuthCode
    } = useEmailVerification();

    return (
        <div className="inputform email">
            <p>이메일</p>
            <div className="email_box">
                <div className="email_input_box">
                    <input 
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        readOnly={isAuth === "auth_success" ? true : false}
                        placeholder="이메일을 입력하세요"
                    />
                    <button 
                        onClick={sendVerificationEmail} 
                        className={isAuth === "auth_success" ? "success" : ""} 
                        disabled={isAuth === "auth_success" ? true : false}
                        style={isAuth === "auth_success" ? { cursor : 'default' } : null}>
                        {isAuth === "auth_success" ? "인증 완료" : "인증번호 받기"}
                    </button>
                    <p className='senderror'>
                        {isSend === "send_fail" ? "이메일 전송에 실패하였습니다" : isSend === "send_error" ? "오류가 발생했습니다" : "" }
                    </p>
                </div>
                    <div className={`email_auth_box ${isSend === "send_success" ? 'visible': ''}`}>
                        <p>인증번호</p>
                        <input 
                            type="text" 
                            value={inputCode}
                            onChange={handleCodeChange}
                            readOnly={isAuth === "auth_success" ? true : false}
                            placeholder="인증번호를 입력하세요"
                        />
                        <button 
                            className="auth_btn" 
                            onClick={verifyAuthCode} 
                            disabled={isAuth === "auth_success" ? true : false}
                            style={isAuth === "auth_success" ? { cursor : 'default' } : null}>인증</button>
                        <p className={`auth_msg ${isAuth === "" ? '': isAuth === "auth_success" ? 'auth_success_msg': 'auth_fail_msg'}`}>
                            {isAuth === "auth_success" ? "인증 성공" : "인증 실패" }
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default EmailInput;