import React from 'react';
import '../../styles/Join_Per.css';

const NameInput = ({label}) => {
    return (
        <div className="inputform name">
            <p>{label}</p>
            <input type="text" />
        </div>
    );
};

export default NameInput;