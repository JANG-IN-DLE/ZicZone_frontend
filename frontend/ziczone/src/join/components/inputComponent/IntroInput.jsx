import React from 'react';
import '../../styles/Join_Per.css';
import useCharacterLimit from '../../hooks/useCharacterLimit';

const IntroInput = ({label, placeholder, limit}) => {
    const [value, handleChange] = useCharacterLimit('', limit);

    return (
        <div className="inputform intro">
            <p>{label}</p>
            <textarea 
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            <p className='limit'>{value.length}/{limit}</p>
        </div>
    );
};

export default IntroInput;