import React from 'react';
import "../../styles/JoinCom/EmailInput.css"

const EmailInput = () => {
    return (
        <div className="inputform email">
            <p>이메일</p>
            <div className="email_box">
                <div className="email_input_box">
                    <input type="email" />
                    {/*  className="seccess" */}
                    <button>인증번호 받기</button>
                </div>
                <div className="email_auth_box">
                    <p>인증번호</p>
                    <input type="text" />
                    <button className="auth_btn">인증</button>
                    <p className="wrongtext">인증번호가 일치하지 않습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default EmailInput;