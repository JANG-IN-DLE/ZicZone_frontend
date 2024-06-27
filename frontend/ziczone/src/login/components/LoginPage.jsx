// import React, { useEffect } from "react";
import LoginIntro from "./logincomponents/loginintro";
import LoginForm from "./logincomponents/loginform";
import "../styles/login.css";
import { useState } from "react";

const Login = () => {
  const [currentForm, setCurrentForm] = useState('login');

  
  // 로그인폼
  const logintag = {
    explain1: '기업이 인재를 채용하는 서비스',
    explain2: '직존에 오신걸 환영합니다',
    inputs: [
      { type: 'email', placeholder: '이메일' },
      { type: 'password', placeholder: '비밀번호' }
    ],
    warningmsg: '다시 입력해주세요',
    btn: {text: '로 그 인', onClick: () => {}},
    links: { text: '비밀번호 찾기', className: 'find_password', onClick: () => setCurrentForm('emailAuth')}
  };

  // 이메일 인증 폼
  const emailauthtag = {
    explain1: '비밀번호를 잊으셨나요?',
    explain2: '인증 후 새로운 비밀번호를 설정할 수 있습니다.',
    inputs: [
      { type: 'email', placeholder: '이메일' },
      { type: 'text', placeholder: '인증번호' }
    ],
    warningmsg: '존재하지않는 이메일입니다.', //인증번호가 틀렸습니다.
    btn: {text: '인증 메일 보내기', onClick: () => {}}, //인증하기
    links: { text: '로그인', className: 'find_password', onClick: () => setCurrentForm('login') }
  };

  // 비밀번호 변경 폼
  const changepasswordtag = {
    explain1: '비밀번호를 잊으셨나요?',
    explain2: '인증 후 새로운 비밀번호를 설정할 수 있습니다.',
    inputs: [
      { type: 'password', placeholder: '새로운 비밀번호' },
      { type: 'password', placeholder: '새로운 비밀번호 확인' }
    ],
    warningmsg: '비밀번호 형식에 맞지 않습니다', //비밀번호가 일치하지 않습니다.
    btn: {text: '비밀번호 변경하기', onClick: () => {}},
    links: { text: '로그인', className: 'find_password', onClick: () => setCurrentForm('login') }
  };

  // 삼항연산자 이용해서 내용바꾸기
  const currentTag = currentForm === 'login' ? logintag : 
  currentForm === 'emailAuth' ? changepasswordtag:emailauthtag;

  return (
    <div className="container">
      <LoginIntro></LoginIntro>
      <LoginForm {...currentTag}/>
    </div>
  );
}
  export default Login;
