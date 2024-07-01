import React, { useState } from 'react';
import "../styles/form_base.css"
import EmailInput from "./inputComponent/EmailInput";
import IntroInput from "./inputComponent/IntroInput";
import TextInput from "./inputComponent/TextInput";
import PasswordInput from "./inputComponent/PasswordInput";
import JoinButton from "./inputComponent/joinbutton";
import ComNumInput from './inputComponent/ComNumInput';
import LogoInput from './inputComponent/LogoInput';
import AddressInput from './inputComponent/AddressInput';

const JoinCompany = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="직존 로고" />
        <div className="logo_text">기업 회원가입 페이지입니다.</div>
            <div className="personal_form">
              <LogoInput />
              <TextInput label="기업 이름" type="text" />
              <TextInput label="설립 연도" type="date" />
              <AddressInput />
              <IntroInput label="기업 소개" placeholder="우리 기업을 소개하는 글을 작성해보세요(90자)" limit={90} height={80}/>
              <ComNumInput/>
              <EmailInput/>
              <PasswordInput label="비밀번호" password={password} setPassword={setPassword} />
              <PasswordInput label="비밀번호 확인" password={password} confirmPassword={confirmPassword} setPassword={setConfirmPassword} />
            </div>
        <JoinButton category="com"/>
    </div>
  );
}

export default JoinCompany;
