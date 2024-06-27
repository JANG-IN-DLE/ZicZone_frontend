import React from "react";
import { useNavigate } from "react-router-dom";
import LoginIntro from "./logincomponents/loginintro";
import LoginForm from "./logincomponents/loginform";
import "../styles/login.css";

const EmailAuth = () => {
  const nav = useNavigate();
  const emailauthtag = {
    explain1: '비밀번호를 잊으셨나요?',
    explain2: '인증 후 새로운 비밀번호를 설정할 수 있습니다.',
    inputs: [
      { type: 'email', placeholder: '이메일' },
      { type: 'text', placeholder: '인증번호' }
    ],
    warningmsg: '존재하지않는 이메일입니다.', //인증번호가 틀렸습니다.
    btntext: '인증 메일 보내기', //인증하기
    links: [
      { text: '로그인', className: 'find_password', onClick: () => nav('/') },
      { text: '회원가입', className: 'joinbtn', onClick: () => nav('/signup') }
    ]
  };
  return (
    <div className="container">
      <LoginIntro></LoginIntro>
      <LoginForm {...emailauthtag}/>
    </div>
  );
}
  export default EmailAuth;