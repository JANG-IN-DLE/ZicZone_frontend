import { useState } from "react";

const useBerryModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return {
        isModalOpen,
        handleOpenModal,
        handleCloseModal
    };
};

export default useBerryModal;
