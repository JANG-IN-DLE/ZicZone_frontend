import React from 'react';
import '../../styles/form_base.css';
import { useFormContext } from '../FormContext';

const TextInput = ({label, type, placeholder, field}) => {
    const { formData, updateFormData } = useFormContext();

    //formData 업데이트
    const handleChange = (e) => {
        //props로받은 FormData field값에 입력된 값 저장(입력시마다)
        updateFormData(field, e.target.value);
    };

    return (
        <div className="inputform name">
            <p>{label}</p>
            <input
                type={type}
                placeholder={placeholder}
                value={formData[field] || ''} // formData[field]가 정의되지 않았을 때 빈 문자열을 기본값으로
                onChange={handleChange} //바뀔때마다 formData업데이트
            />
        </div>
    );
};

export default TextInput;