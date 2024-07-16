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
import { FormProvider } from './FormContext';

const JoinPersonal = () => {
  return (
    <FormProvider formType="personal">
      <div className="signup_container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="직존 로고" />
        <div className="logo_text">개인 회원가입 페이지입니다.</div>
        <div className="personal_form">
          <TextInput label="이름" type="text" field="userName" placeholder="실명으로 작성해주세요."/>
          <EmailInput />
          <PasswordInput/>
          <IntroInput 
            label="한 줄 소개" 
            field="userIntro"
            placeholder="자신을 어필할 수 있는 간단한 자기소개를 작성해주세요(60자)" 
            limit={60}
          />
          <CareerGenderInput/>
          <JobInput/>
          <StackInput/>
        </div>
        <JoinButton category="per"/>
      </div>
    </FormProvider>
  );
}

export default JoinPersonal;
