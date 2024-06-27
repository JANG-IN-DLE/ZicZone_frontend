import React from "react";
import { useNavigate } from "react-router-dom";
import LoginIntro from "./logincomponents/loginintro";
import LoginForm from "./logincomponents/loginform";
import "../styles/login.css";

const ChangePassword = () => {
  const nav = useNavigate();
  const changepasswordtag = {
    explain1: '비밀번호를 잊으셨나요?',
    explain2: '인증 후 새로운 비밀번호를 설정할 수 있습니다.',
    inputs: [
      { type: 'password', placeholder: '새로운 비밀번호' },
      { type: 'password', placeholder: '새로운 비밀번호 확인' }
    ],
    warningmsg: '비밀번호 형식에 맞지 않습니다', //비밀번호가 일치하지 않습니다.
    btntext: '비밀번호 변경하기',
    links: [
      { text: '로그인', className: 'find_password', onClick: () => nav('/') },
      { text: '회원가입', className: 'joinbtn', onClick: () => nav('/signup') }
    ]
  };
  return (
    <div className="container">
      <LoginIntro></LoginIntro>
      <LoginForm {...changepasswordtag}/>
    </div>
  );
}
  export default ChangePassword;