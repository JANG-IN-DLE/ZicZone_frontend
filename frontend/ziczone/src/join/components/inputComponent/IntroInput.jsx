import React from 'react';
import "../../styles/JoinCom/IntroInput.css"
import useCharacterLimit from '../../hooks/useCharacterLimit';
import { useFormContext } from '../FormContext';

const IntroInput = ({label, placeholder, limit, height, field}) => {
    const { formData, updateFormData } = useFormContext();
    //value : 현재 입력된 값, handleChange : 입력값이 변경될 때 호춣
    const [value, handleChange] = useCharacterLimit(formData[field] || '', limit);//form의 필드값이 undefined일 경우를 대시하여 빈문자열 사용

    const handleInputChange = (e) => {
        handleChange(e); //글자 수 제한 처리
        updateFormData(field, e.target.value);//글자 수 처리 후 form에 값 업데이트
    };

    return (
        <div className="inputform intro">
            <p>{label}</p>
            <textarea 
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                style={{height: height}}
            />
            <p className='limit'>{value.length}/{limit}</p>
        </div>
    );
};

export default IntroInput;