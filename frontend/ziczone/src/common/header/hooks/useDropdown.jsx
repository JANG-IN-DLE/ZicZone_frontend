import { useState, useEffect, useRef } from 'react';

const useDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const Dropdown = () => {
        setOpen(!open);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return { open, Dropdown, dropdownRef };
}

export default useDropdown;
