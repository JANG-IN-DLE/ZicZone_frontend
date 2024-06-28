import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select)`
  & .custom-react-select__control {
    width: 180px;
    height: 30px
    padding: 4px 8px;
    background-color: #ffffff;
    border: 1px solid #0051BA;
    border-radius: 8px;
    color: #0051BA;
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

const Selectbtn = ({ options }) => {
  return (
    <CustomSelect
      options={options}
      placeholder="선택해주세요"
      isClearable
      classNamePrefix="custom-react-select"
    />
  );
};

export default Selectbtn;