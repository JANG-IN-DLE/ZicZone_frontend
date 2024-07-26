import { useState, useRef, useEffect } from 'react';

const useFileUpload = (setFile, initialFileName = '') => {
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
            const file = e.target.files[0];
            setFileName(file.name);
            setFile(file); // 부모 컴포넌트로 파일을 전달합니다.
        }
    };

    const handleClearFile = () => {
        setFileName('');
        setFile(null); // 파일을 초기화합니다.
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
