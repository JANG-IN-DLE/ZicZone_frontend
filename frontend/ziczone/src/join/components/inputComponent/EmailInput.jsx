import React, { useEffect } from 'react';
import useEmailVerification from '../../hooks/useEmailAuth';
import "../../styles/JoinCom/EmailInput.css";

const EmailInput = () => {
    const {
        email,
        inputCode,
        isSend,
        isAuth,
        timeLeft,
        handleEmailChange,
        handleCodeChange,
        sendVerificationEmail,
        verifyAuthCode,
        formatTime,
        formData
    } = useEmailVerification();

    useEffect(() => {
        console.log('Current formData in EamilInput:', formData)
    }, [formData]);

    return (
        <div className="inputform email">
            <p>이메일</p>
            <div className="email_box">
                <div className="email_input_box">

                    {/* 이메일 입력칸 -> 인증완료(readonly) */}
                    <input 
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        readOnly={isAuth === "auth_success" ? true : false}
                        placeholder="이메일을 입력하세요"
                    />

                    {/* 인증번호전송 버튼 -> 인증완료(readonly) */}
                    <button 
                        onClick={sendVerificationEmail} 
                        className={isAuth === "auth_success" ? "success" : ""} 
                        disabled={isAuth === "auth_success" ? true : false}
                        style={isAuth === "auth_success" ? { cursor : 'default' } : null}>
                        {isAuth === "auth_success" ? "인증 완료" : "인증번호 받기"}
                    </button>

                    {/* 전송오류메세지 */}
                    <p className='senderror'>
                        {isSend === "send_fail" ? "이메일 전송에 실패하였습니다" 
                        : isSend === "send_error" ? "오류가 발생했습니다" 
                        : isSend === "invalid_email" ? "유효하지 않은 이메일 형식입니다" 
                        : "" }
                    </p>
                </div>
                    {/* 전송완료시에 인증박스 보이게 */}
                    <div className={`email_auth_box ${isSend === "send_success" ? 'visible': ''}`}>
                        <p>인증번호</p>

                        {/* 인증번호 입력칸 */}
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
                            style={isAuth === "auth_success" ? { cursor : 'default' } : null}
                        >인증</button>
                        <p className={`auth_msg ${isAuth === "" ? ''
                                                 : isAuth === "auth_success" ? 'auth_success_msg'
                                                 : 'auth_fail_msg'}`}>
                            {isAuth === "auth_success" ? "인증 성공" 
                            : isAuth === "auth_fail" ? "인증 실패" 
                            : isAuth === "auth_expired" ? "시간 만료" 
                            : ""}
                        </p>
                        {/* 전송완료 && 인증완료안됨 시에 나타나게함 타이머 */}
                        {isSend === "send_success" && isAuth !== "auth_success" && (
                            <p className="timer_active">
                                {formatTime(timeLeft)}
                            </p>
                        )}
                    </div>
            </div>
        </div>
    );
};

export default EmailInput;