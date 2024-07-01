import { useState } from 'react';

const useCharacterLimit = (initialValue, maxLength) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value);
        }
    };

    return [value, handleChange];
};

export default useCharacterLimit;