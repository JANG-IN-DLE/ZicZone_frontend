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
            updateSelectedItems(selectedItems.filter(item => item.techId !== tech.techId));
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
