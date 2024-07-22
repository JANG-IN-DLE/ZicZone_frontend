import { useState } from 'react';

const useDropdown = (initialVisible) => {
    const [dropdownVisible, setDropdownVisible] = useState(initialVisible);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleDropdown = (value) => setDropdownVisible(value);

    const updateSelectedItems = (items) => setSelectedItems(items);

    return [dropdownVisible, toggleDropdown, selectedItems, updateSelectedItems];
};

export default useDropdown;