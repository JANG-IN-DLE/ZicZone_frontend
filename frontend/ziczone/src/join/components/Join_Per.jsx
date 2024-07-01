import React, { useState } from 'react';
import "../styles/form_base.css";
import CareerGenderInput from "./inputComponent/CareerGenderInput";
import EmailInput from "./inputComponent/EmailInput";
import IntroInput from "./inputComponent/IntroInput";
import JobInput from "./inputComponent/JobInput";
import PasswordInput from "./inputComponent/PasswordInput";
import StackInput from "./inputComponent/StackInput";
import JoinButton from "./inputComponent/joinbutton";
import TextInput from './inputComponent/TextInput';

const JoinPersonal = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="직존 로고" />
        <div className="logo_text">개인 회원가입 페이지입니다.</div>
            <div className="personal_form">
              <TextInput label="이름" type="text"/>
              <EmailInput />
              <PasswordInput label="비밀번호" password={password} setPassword={setPassword} />
              <PasswordInput label="비밀번호 확인" password={password} confirmPassword={confirmPassword} setPassword={setConfirmPassword} />
              <IntroInput label="한 줄 소개" placeholder="자신을 어필할 수 있는 간단한 자기소개를 작성해주세요(60자)" limit={60}/>
              <CareerGenderInput/>
              <JobInput/>
              <StackInput/>
            </div>
            <JoinButton category=""/>
    </div>
  );
}

export default JoinPersonal;
