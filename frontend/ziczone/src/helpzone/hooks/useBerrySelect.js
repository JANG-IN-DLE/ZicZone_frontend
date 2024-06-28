import { useState } from 'react';

const useBerrySelect = (initialValue) => {
    const [berry, setBerry] = useState(initialValue);

    const handleSelect = (value) => {
        setBerry(value);
    };

    return {
        berry,
        handleSelect
    };
};

export default useBerrySelect;