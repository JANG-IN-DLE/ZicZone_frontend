// FormContext.js
import React, { createContext, useState, useContext, useCallback } from 'react';

const FormContext = createContext(); //폼데이터를 공유

//개인 데이터
const initialPersonalState = {
  userName: '',
  email: '',
  password: '',
  userIntro: '',
  personalCareer: '',
  gender: '',
  jobIds: [],
  techIds: []
};

//기업 데이터
const initialCompanyState = {
  companyLogo: '',
  userName: '',
  companyCeo: '',
  companyYear: '',
  companyAddr: '',
  userIntro: '',
  companyNum: '',
  email: '',
  password: ''
};

export const FormProvider = ({ children, formType }) => { //<FormProvider formType="company"> : 폼의 타입을 지정
  const [formData, setFormData] = useState(
    formType === 'personal' ? initialPersonalState : initialCompanyState //formType에 따라서 채워지는 부분(?)이 다름
  );

  //(필드면, 채워지는값)
  //useCallback사용해서 매 렌더링마다 새로 생성되는 것을 방지
  const updateFormData = useCallback((field, value) => {
    setFormData(prev => {
        if (JSON.stringify(prev[field]) === JSON.stringify(value)) {
            return prev;  // 값이 같으면 상태 업데이트 하지 않음
        }
        return { ...prev, [field]: value };
    });
}, []);

  /*
  formData : 현재 폼 데이터 상태
  updateFormData : 폼데이터를 업데이트
  formType : 폼의 타입
  */
  return (
    <FormContext.Provider value={{ formData, updateFormData, formType }}> 
      {children}
    </FormContext.Provider>
  );
};

//자식컴포넌트는 useFormContext훅을 사용하여 접근가능 
export const useFormContext = () => useContext(FormContext);