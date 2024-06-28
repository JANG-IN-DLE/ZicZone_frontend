import { useState } from "react";

const useFileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if(selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        } else {
            alert("PDF 파일만 첨부할 수 있습니다.");
        }
    };

    const handleFileRemove = () => {
        setFile(null);
    };

    return {
        handleFileChange,
        handleFileRemove
    };
}

export default useFileUpload;