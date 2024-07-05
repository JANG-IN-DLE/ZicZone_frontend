import { useRef, useState } from 'react';

const useFileUpload = () => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleClearFile = () => {
        setFileName('');
        fileInputRef.current.value = null;
    };

    return {
        fileInputRef,
        fileName,
        handleButtonClick,
        handleFileChange,
        handleClearFile,
    };
};

export default useFileUpload;
