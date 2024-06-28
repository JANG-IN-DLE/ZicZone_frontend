import React from 'react';
import styled from 'styled-components';
import '../../styles/Join_Per.css';
import Stacks from '../../../common/\bstackjob/components/Stacks';
import Select from 'react-select'
import Selectbtn from './Selectbtn';

const StackInput = () => {
    const options = [
        { value: 'Java', label: 'Java' },
        { value: 'Python', label: 'Python' },
        { value: 'ASP.NET', label: 'ASP.NET' },
        { value: 'Docker', label: 'Docker' },
        { value: 'React', label: 'React' },
        { value: 'Vue.js', label: 'Vue.js' },
    ]
    return (
        <div className="personal tech">
            <div className="tech_top">
                <p>기술스택</p>
                <Selectbtn options={options}/>
                <span>*최대 7개 선택 가능(클릭하면 삭제됩니다.)</span>
            </div>
            <Stacks/>
        </div>
    );
};

export default StackInput;