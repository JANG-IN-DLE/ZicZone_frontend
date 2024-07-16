import { useRef, useState } from 'react';

const useFileUpload = (initialFileName = '') => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState(initialFileName);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleClearFile = () => {
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
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
