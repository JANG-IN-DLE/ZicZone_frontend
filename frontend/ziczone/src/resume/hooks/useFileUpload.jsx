import { useState, useRef, useEffect } from 'react';

const useFileUpload = (initialFileName = '') => {
    const [fileName, setFileName] = useState(initialFileName);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setFileName(initialFileName);
    }, [initialFileName]);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
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
