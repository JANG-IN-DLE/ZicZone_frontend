import React from 'react';
import '../../styles/form_base.css';
import perjoinbtn from "../../assets/perjoinbtn.png"
import comjoinbtn from "../../assets/comjoinbtn.png"
import { useFormContext } from '../FormContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const JoinButton = ({category}) => {
    const {formData} = useFormContext();
    const navigate = useNavigate();

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

        try {
            let response;
    
            if (category === "per") {
                // JSON 데이터를 사용하여 요청을 보냄
                response = await axios.post(endpoint, formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                const submitFormData = new FormData();
                const companyUserDTO = { ...formData };
                delete companyUserDTO.companyLogo; // companyLogo를 제외한 나머지 데이터를 JSON으로 변환

                submitFormData.append('companyUserDTO', JSON.stringify(companyUserDTO));
                submitFormData.append('companyLogo', formData.companyLogo, formData.companyLogo.name);

                response = await axios.post(endpoint, submitFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
            if(response.status === 200){
                if(response.data === "Personal user signup successful" || response.data === "Company user signup successful"){
                    alert("직존에 오신걸 환영합니다.");
                    navigate('/login');
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