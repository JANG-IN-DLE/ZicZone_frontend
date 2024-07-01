import React from 'react';
import "../../styles/JoinCom/CareerGenderInput.css"
import Selectbtn from './Selectbtn';

const CareerGenderInput = () => {
    const options = [
        { value: 'newcomer', label: '신입' },
        { value: 'oneyear', label: '경력 1년' },
        { value: 'twoyear', label: '경력 2년' },
        { value: 'threeyear', label: '경력 3년' },
        { value: 'fouryear', label: '경력 4년' },
        { value: 'fiveyear', label: '경력 5년 이상' },
    ];

    return (
        <div className="inputform career_gender">
            <div className="career">
                <p>경력</p>
                <Selectbtn options={options}/>
            </div>
            <div className="gender">
                <p>성별</p>
                <label>
                    <input type="radio" name="gender" value="남자" /> 남자
                </label>
                <label>
                    <input type="radio" name="gender" value="여자" /> 여자
                </label>
            </div>
        </div>
    );
};

export default CareerGenderInput;