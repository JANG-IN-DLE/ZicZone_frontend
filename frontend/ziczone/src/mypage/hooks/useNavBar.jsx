import { useState } from "react";

const useToggle = (initialItem) => {
    const [activeItem, setActiveItem] = useState(initialItem);

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return {
        activeItem,
        handleClick,
    };
};

export default useToggle;
