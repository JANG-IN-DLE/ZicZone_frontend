import React, { useEffect, useState } from 'react';
import './../../styles/TechDropdown.css';
import api from '../../../common/config/axiosInstance';

const TechDropdown = ({ selectedItems, handleTechSelect, filter }) => {
    const [techList, setTechList] = useState([]);


    useEffect(() => {
        api.get('http://localhost:12000/api/signup/techs')
            .then(response => {
                setTechList(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch tech data:', error);
            });
    }, []);

    const filteredTech = techList.filter(tech =>
        tech.techName.toLowerCase().includes(filter.toLowerCase())
    );

    const handleCheckboxChange = (tech) => {
        const isSelected = selectedItems.some(item => item.techId === tech.techId);

        if (isSelected) {
            // Allow deselection if more than 1 item is selected
            if (selectedItems.length > 1) {
                handleTechSelect(tech);
            }
        } else {
            // Allow selection if less than 7 items are selected
            if (selectedItems.length < 7) {
                handleTechSelect(tech);
            }
        }
    };

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
