import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../../styles/TechDropdown.css';

const TechDropdown = ({ selectedItems, handleTechSelect, filter }) => {
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
                        onChange={() => handleTechSelect(tech)}
                    />
                    {tech.techName}
                </div>
            ))}
        </div>
    );
}

export default TechDropdown;
