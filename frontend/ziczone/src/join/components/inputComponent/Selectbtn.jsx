import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useFormContext } from '../FormContext';

const CustomSelect = styled(Select)`
  & .custom-react-select__control {
    width: 180px;
    height: 30px
    padding: 4px 4px;
    background-color: #ffffff;
    border: 1px solid #0051BA;
    border-radius: 8px;
    color: #0051BA;
    font-size: 14px;
  }
  
  & .custom-react-select__placeholder {
    color: #0051BA;
  }
  
  & .custom-react-select__indicator-separator {
    display: none;
  }
  
  & .custom-react-select__dropdown-indicator {
    color: #0051BA;
  }

  & .custom-react-select__clear-indicator {
    display: none;
  }

  & .custom-react-select__option {
    color: #5d5d5d; /* 옵션 텍스트 색상 */
  }

  & .custom-react-select__option--is-focused {
    background-color: #e6f0ff; /* 옵션이 포커스될 때의 배경색 */
    color: #0051BA; /* 옵션이 포커스될 때의 텍스트 색상 */
    cursor: pointer;
  }

  & .custom-react-select__option--is-selected {
    background-color: #dce5ff; /* 선택된 옵션의 배경색 */
    color: #0051BA; /* 선택된 옵션의 텍스트 색상 */
  }

  & .custom-react-select__single-value {
    color: #0051BA; /* 선택된 텍스트 색상 */
  }
`;

/*
options : 선택할 값
field : FormContext의 필드
handleSelect : */
const Selectbtn = ({ options = [], field, handleSelect }) => {
  const { updateFormData} = useFormContext();

  const handleChange = (selectedOption) => {
    if(field==="techIds"){
      handleSelect(selectedOption ? selectedOption : []);
    }else if(field==="personalCareer"){
      updateFormData(field, selectedOption ? selectedOption.value : null);
    }
    
  }

  return (
    <CustomSelect
      options={options}
      placeholder="선택해주세요"
      isClearable
      classNamePrefix="custom-react-select"
      onChange={handleChange}
    />
  );
};

export default Selectbtn;