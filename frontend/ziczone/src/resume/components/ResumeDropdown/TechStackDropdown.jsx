import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../styles/TechDropdown.css';

const TechDropdown = ({ selectedItems, updateSelectedItems, filter }) => {
    const [techList, setTechList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:12000/api/signup/techs')
            .then(response => {
                setTechList(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch tech data:', error);
            });
    }, []);

    const handleCheckboxChange = (tech) => {
        if (selectedItems.some(item => item.techId === tech.techId)) {
            // 최소 하나 이상 선택하도록 막음
            if (selectedItems.length > 1) {
                updateSelectedItems(selectedItems.filter(item => item.techId !== tech.techId));
            } else {
                alert("최소 한 개 이상의 기술 스택을 선택하셔야 합니다.");
            }
        } else if (selectedItems.length < 7) {
            updateSelectedItems([...selectedItems, tech]);
        }
    };

    const filteredTech = techList.filter(tech =>
        tech.techName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="tech_dropdown_list">
            {filteredTech.map((tech, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={selectedItems.some(item => item.techId === tech.techId)}
                        onChange={() => handleCheckboxChange(tech)}
                    />
                    {tech.techName}
                </div>
            ))}
        </div>
    );
}

export default TechDropdown;
