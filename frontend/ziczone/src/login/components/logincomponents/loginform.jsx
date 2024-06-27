import React from 'react';
import './../../styles/loginform.css'


const LoginForm = ({ explain1, explain2, inputs, warningmsg, btntext, links }) => {
    return (
        <div className="rightbox">
            {/* 로고 */}
            <img className="zzlogo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="직존로고" />

            {/* 간단소개 */}
            <p className="explain">{explain1}<br />{explain2}</p>

            {/* Input(2개) */}
            {inputs.map((input, index) => (
                <input key={index} type={input.type} placeholder={input.placeholder} />
            ))}

            {/* 비밀번호 찾기 | 회원가입 */}
            <div className="links">
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <p>|</p>}
                        <p className={link.className} onClick={link.onClick}>{link.text}</p>
                    </React.Fragment>
                ))}
            </div>
            {/* 경고메세지 -> 필요시에만 나타나게 */}
            <p className="warningmsg">{warningmsg}</p>

            {/* 로그인버튼 */}
            <button className="loginbtn"type="submit">{btntext}</button>
        </div>
    );
}

export default LoginForm;