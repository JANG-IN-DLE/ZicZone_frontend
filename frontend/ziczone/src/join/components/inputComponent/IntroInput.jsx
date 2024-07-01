import React from 'react';
import "../../styles/JoinCom/IntroInput.css"
import useCharacterLimit from '../../hooks/useCharacterLimit';

const IntroInput = ({label, placeholder, limit, height}) => {
    const [value, handleChange] = useCharacterLimit('', limit);

    return (
        <div className="inputform intro">
            <p>{label}</p>
            <textarea 
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                style={height={height}}
            />
            <p className='limit'>{value.length}/{limit}</p>
        </div>
    );
};

export default IntroInput;