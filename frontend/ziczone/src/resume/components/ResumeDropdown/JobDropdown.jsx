import React from 'react';
import './../../styles/JobDropdown.css';

const JobDropdown = ({ selectedItems, updateSelectedItems }) => {
    const JobDropdownContent = [
        "서버/백엔드",
        "크로스플랫폼",
        "HW/임베디드",
        "프론트엔드",
        "웹 풀스택",
        "빅데이터",
        "인공지능/머신러닝",
        "develop/시스템",
        "SW/솔루션",
        "개발 PM",
        "DBA",
        "게임 서버",
        "정보 보안",
        "안드로이드",
        "웹 퍼블리셔",
        "블록체인",
        "기술지원",
        "QA",
        "IOS",
        "게임 클라이언트"
    ];

    const handleCheckboxChange = (job) => {
        if (selectedItems.includes(job)) {
            updateSelectedItems(selectedItems.filter(item => item !== job));
        } else if (selectedItems.length < 3) {
            updateSelectedItems([...selectedItems, job]);
        }
    };

    return (
        <div className="job_dropdown_list">
            {JobDropdownContent.map((job, index) => (
                <div key={index}>
                    <input
                        type='checkbox'
                        checked={selectedItems.includes(job)}
                        onChange={() => handleCheckboxChange(job)}
                    />
                    {job}
                </div>
            ))}
        </div>
    );
}

export default JobDropdown;
