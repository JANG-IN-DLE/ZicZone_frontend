import React from 'react';
import "../../styles/JoinCom/StackInput.css"
import Stacks from '../../../common/stackjob/components/Stacks';
import Selectbtn from './Selectbtn';
import useSelectedStacks from '../../hooks/useSelectedStacks';
import { useFormContext } from '../FormContext';

const StackInput = () => {
    const { formData, updateFormData } = useFormContext();
    const { selectedStacks, handleSelect, techs } = useSelectedStacks(7, formData.techIds, updateFormData);

    const options = techs.map(tech => ({
        value: tech.techId,
        label: tech.techName,
        imageUrl: tech.techUrl
    }));
   

    return (
        <div className="inputform tech">
            <div className="tech_top">
                <p>기술스택</p>
                <Selectbtn options={options} field="techIds" handleSelect={handleSelect}/>
                <span>*최대 7개 선택 가능(클릭하면 삭제됩니다.)</span>
            </div>
            <Stacks selectedStacks={selectedStacks} handleSelect={handleSelect} />
        </div>
    );
};

export default StackInput;