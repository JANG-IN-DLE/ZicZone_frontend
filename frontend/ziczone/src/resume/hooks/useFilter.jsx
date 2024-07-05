import { useState } from 'react';

const useFilter = (initialValue = "") => {
    const [filter, setFilter] = useState(initialValue);

    const updateFilter = (newFilter) => {
        setFilter(newFilter);
    };

    return [filter, updateFilter];
};

export default useFilter;
