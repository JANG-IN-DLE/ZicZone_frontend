import React from "react";
import { useNavigate } from "react-router-dom";
import LoginIntro from "./logincomponents/loginintro";
import LoginForm from "./logincomponents/loginform";
import "../styles/login.css";

const Login = () => {
  const nav = useNavigate();
  const logintag = {
    explain1: '기업이 인재를 채용하는 서비스',
    explain2: '직존에 오신걸 환영합니다',
    inputs: [
      { type: 'email', placeholder: '이메일' },
      { type: 'password', placeholder: '비밀번호' }
    ],
    warningmsg: '다시 입력해주세요',
    btntext: '로 그 인',
    links: [
      { text: '비밀번호 찾기', className: 'find_password', onClick: () => nav('/email-auth') },
      { text: '회원가입', className: 'joinbtn', onClick: () => nav('/') }
    ]
  };
  return (
    <div className="container">
      <LoginIntro></LoginIntro>
      <LoginForm {...logintag}/>
    </div>
  );
}
  export default Login;