// import React, { useEffect } from "react";
import LoginIntro from "./logincomponents/loginintro";
import LoginForm from "./logincomponents/loginform";
import "../styles/login.css";
import { useState } from "react";
import Layout from "../../common/layout/layout";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");

  // 로그인폼
  const logintag = {
    title: "login",
    explain1: "기업이 인재를 채용하는 서비스",
    explain2: "직존에 오신걸 환영합니다",
    input1: { type: "email", placeholder: "이메일" },
    input2: { type: "password", placeholder: "비밀번호" },
    links: {
      text: "비밀번호 찾기",
      className: "find_password_login",
      onClick: () => setCurrentForm("emailAuth"),
    },
  };

  // 이메일 인증 폼
  const emailauthtag = {
    title: "emailauth",
    explain1: "비밀번호를 잊으셨나요?",
    explain2: "인증 후 새로운 비밀번호를 설정할 수 있습니다.",
    input1: { type: "email", placeholder: "이메일" },
    input2: { type: "text", placeholder: "인증번호" },
    links: {
      text: "로그인",
      className: "find_password_login",
      onClick: () => setCurrentForm("login"),
    },
  };

  // 비밀번호 변경 폼
  const changepasswordtag = {
    title: "changepassword",
    explain1: "비밀번호를 잊으셨나요?",
    explain2: "인증 후 새로운 비밀번호를 설정할 수 있습니다.",
    input1: { type: "password", placeholder: "새로운 비밀번호" },
    input2: { type: "password", placeholder: "새로운 비밀번호 확인" },
    links: {
      text: "로그인",
      className: "find_password_login",
      onClick: () => setCurrentForm("login"),
    },
  };

  // 삼항연산자 이용해서 내용바꾸기
  const currentTag =
    currentForm === "login"
      ? logintag
      : currentForm === "emailAuth"
      ? emailauthtag
      : changepasswordtag;

  return (
    <Layout>
      <div className="container_login">
        <LoginIntro></LoginIntro>
        <LoginForm {...currentTag} setCurrentForm={setCurrentForm} />
      </div>
    </Layout>
  );
};
export default Login;
