import React from 'react';
import '../../styles/form_base.css';

const TextInput = ({label, type, placeholder}) => {
    return (
        <div className="inputform name">
            <p>{label}</p>
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default TextInput;