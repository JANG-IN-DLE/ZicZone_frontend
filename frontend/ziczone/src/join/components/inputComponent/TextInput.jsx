import React from 'react';
import '../../styles/form_base.css';

const TextInput = ({label, type}) => {
    return (
        <div className="inputform name">
            <p>{label}</p>
            <input type={type} />
        </div>
    );
};

export default TextInput;