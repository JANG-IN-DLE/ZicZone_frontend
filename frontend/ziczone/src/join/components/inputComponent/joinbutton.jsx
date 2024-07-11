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
                // FormData를 사용하여 파일과 데이터를 함께 보냄
                const submitFormData = new FormData();
                for (const key in formData) {
                    if (key === 'companyLogo') {
                        submitFormData.append(key, formData[key], formData[key].name); // 파일 이름을 포함해서 추가
                    } else {
                        submitFormData.append(key, formData[key]);
                    }
                }
    
                response = await axios.post(endpoint, submitFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
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