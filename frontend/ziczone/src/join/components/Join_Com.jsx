import React from 'react';
import "../styles/form_base.css"
import EmailInput from "./inputComponent/EmailInput";
import IntroInput from "./inputComponent/IntroInput";
import TextInput from "./inputComponent/TextInput";
import PasswordInput from "./inputComponent/PasswordInput";
import JoinButton from "./inputComponent/joinbutton";
import ComNumInput from './inputComponent/ComNumInput';
import LogoInput from './inputComponent/LogoInput';
import AddressInput from './inputComponent/AddressInput';
import { FormProvider } from './FormContext';

const JoinCompany = () => {
  return (
    <FormProvider formType="company">
      <div className="signup_container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="직존 로고" />
        <div className="logo_text">기업 회원가입 페이지입니다.</div>
        <div className="personal_form">
          <LogoInput />
          <TextInput 
            label="기업 이름" 
            type="text" 
            field="userName" 
            placeholder="기업 이름을 작성해주세요."/>
          <TextInput 
            label="대표자명" 
            type="text" 
            field="companyCeo" 
            placeholder="대표자 이름을 작성해주세요."/>
          <TextInput 
            label="설립 연도" 
            type="date" 
            field="companyYear" />
          <AddressInput />
          <IntroInput 
            label="기업 소개" 
            field="userIntro" 
            placeholder="우리 기업을 소개하는 글을 작성해보세요(90자)" 
            limit={90} 
            height={80}
          />
          <ComNumInput/>
          <EmailInput/>
          <PasswordInput/>
        </div>
        <JoinButton category="com"/>
      </div>
    </FormProvider>
  );
}

export default JoinCompany;