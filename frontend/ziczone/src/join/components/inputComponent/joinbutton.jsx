import React from 'react';
import '../../styles/form_base.css';
import perjoinbtn from "../../assets/perjoinbtn.png"
import comjoinbtn from "../../assets/comjoinbtn.png"
import { useFormContext } from '../FormContext';
import axios from 'axios';

const JoinButton = ({category}) => {
    const {formData} = useFormContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //회원 유형에 따라서 endpoint다르게
        const endpoint = category === "per" ? '/api/signup/personal' : '/api/signup/company';


        // 모든 필드가 채워져 있는지 확인
        const isFormComplete = Object.values(formData).every(value => 
            typeof value === 'string' ? value.trim() !== '' : value !== null && value !== undefined);

        if (!isFormComplete) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        //Request를 담아서 보낼 곳
        const submitFormData = new FormData();

        //로고를 제외한 데이터 Request에 담음
        const jsonData = {...formData};
        if(jsonData.companyLogo) {
            delete jsonData.companyLogo;
        }
        submitFormData.append('companyUserDTO', JSON.stringify(jsonData));

        //로고(파일) Request에 담음
        if (formData.companyLogo) {
            submitFormData.append('companyLogo', formData.companyLogo);
        }

        try{
            const response = await axios.post(endpoint, submitFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(response.status === 200){
                if(response.data === "Personal user signup successful" || response.data === "Company user signup successful"){
                    console.log("회원가입 성공 : ", response.data);
                    alert(response.data);
                }else{
                    console.log("회원가입 실패 : ", response.data);
                    alert(response.data);
                }
            }else{
                console.log("회원가입 실패 : ", response.status);
                alert(response.statusText);
            }
        }catch (error) {
            console.error('Error:', error);
            if (error.response) {
              console.error('Error status:', error.response.status);
              console.error('Error data:', error.response.data);
            }
          }

    }

    return (
        <button className="com_join_btn" type="submit" onClick={handleSubmit}>
            <img src={category === "com" ? comjoinbtn : perjoinbtn} alt="가입 버튼" />
        </button>
    );
};

export default JoinButton;