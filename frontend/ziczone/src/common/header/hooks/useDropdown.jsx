import {useState} from 'react';

const useDropdown = () => {
    const [open, setOpen] = useState(false);

    const Dropdown = () => {
        setOpen(!open)
    }

    return {open, Dropdown};
}

export default useDropdown;