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
        const endpoint = category === "per" ? '/api/signup/personal' : '/api/signup/company';
        // 모든 필드가 채워져 있는지 확인
        const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

        if (!isFormComplete) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        try{
            const response = await axios.post(endpoint, formData);
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
        }catch(error){
            console.log("정보전송 실패");
            alert('다시 시도해주세요');
        }

    }

    return (
        <button className="com_join_btn" type="submit" onClick={handleSubmit}>
            <img src={category === "com" ? comjoinbtn : perjoinbtn} alt="가입 버튼" />
        </button>
    );
};

export default JoinButton;