import { useState } from "react";

const useFileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        }
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    const setInitialFile = (initialFile) => {
        setFile({ name: initialFile });
    };

    return {
        file,
        handleFileChange,
        handleFileRemove,
        setInitialFile
    };
}

export default useFileUpload;