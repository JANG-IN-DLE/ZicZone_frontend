import { useState } from "react";

const useModal = () => {
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleOpenPasswordModalOpen = () => {
        setIsPasswordModalOpen(true);
    }

    const handleClosePasswordModalOpen = () => {
        setIsPasswordModalOpen(false);
    }

    const handleOpenEditModalOpen = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModalOpen = () => {
        setIsEditModalOpen(false);
    };

    return {
        isPasswordModalOpen,
        handleOpenPasswordModalOpen,
        handleClosePasswordModalOpen,
        isEditModalOpen,
        handleOpenEditModalOpen,
        handleCloseEditModalOpen
    };
};

export default useModal;
