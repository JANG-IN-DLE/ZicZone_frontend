import React from 'react';
import '../../styles/Join_Per.css';
import Stacks from '../../../common/stackjob/components/Stacks';
import Selectbtn from './Selectbtn';
import useSelectedStacks from '../../hooks/useSelectedStacks';

const StackInput = () => {
    const options = [
        { value: 'Java', label: 'Java', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/Java.svg' },
        { value: 'Python', label: 'Python', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/python.svg' },
        { value: 'ASP.NET', label: 'ASP.NET', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/ASP.NET.svg' },
        { value: 'Docker', label: 'Docker', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/Docker.svg' },
        { value: 'React', label: 'React', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/React.svg' },
        { value: 'Vue.js', label: 'Vue.js', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/Vue.js.svg' },
        { value: 'Reactbbb', label: 'Reactbbb', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/React.svg' },
        { value: 'Pythonaaa', label: 'Pythonaaa', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/python.svg' },
        { value: 'ASP.NETaaa', label: 'ASP.NETaaa', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/ASP.NET.svg' },
        { value: 'Dockeraaa', label: 'Dockeraaa', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/Docker.svg' },
        { value: 'Reactaaa', label: 'Reactaaa', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/React.svg' },
        { value: 'Vue.jsaaa', label: 'Vue.jsaaa', imageUrl: 'https://kr.object.ncloudstorage.com/ziczone-bucket/Vue.js.svg' },
    ];

    const { selectedStacks, handleSelect } = useSelectedStacks(7);

    return (
        <div className="inputform tech">
            <div className="tech_top">
                <p>기술스택</p>
                <Selectbtn options={options} handleSelect={handleSelect}/>
                <span>*최대 7개 선택 가능(클릭하면 삭제됩니다.)</span>
            </div>
            <Stacks selectedStacks={selectedStacks} handleSelect={handleSelect} />
        </div>
    );
};

export default StackInput;