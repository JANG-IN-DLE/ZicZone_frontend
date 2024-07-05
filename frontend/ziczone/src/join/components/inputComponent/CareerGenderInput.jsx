import React from 'react';
import "../../styles/JoinCom/CareerGenderInput.css"
import Selectbtn from './Selectbtn';
import { useFormContext } from '../FormContext';

const CareerGenderInput = () => {
    const {formData, updateFormData} = useFormContext();

    const handleGenderChange = (e) => {
        updateFormData('gender', e.target.value);
    }

    const options = [
        { value: '신입', label: '신입' },
        { value: '경력 1년', label: '경력 1년' },
        { value: '경력 2년', label: '경력 2년' },
        { value: '경력 3년', label: '경력 3년' },
        { value: '경력 4년', label: '경력 4년' },
        { value: '경력 5년 이상', label: '경력 5년 이상' },
    ];

    return (
        <div className="inputform career_gender">
            <div className="career">
                <p>경력</p>
                <Selectbtn options={options} field="personalCareer"/>
            </div>
            <div className="gender">
                <p>성별</p>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="MALE" 
                        checked={formData.gender === 'MALE'}
                        onChange={handleGenderChange}
                    /> 남자
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="FEMALE" 
                        checked={formData.gender === 'FEMALE'}
                        onChange={handleGenderChange}
                    /> 여자
                </label>
            </div>
        </div>
    );
};

export default CareerGenderInput;