import React, { useEffect } from "react";
import "../styles/FileUpload.css";
import useFileUpload from "../hooks/useFileUpload.js";

const FileUpload = ({ onFileChange, initialFile }) => {
    const { file, handleFileChange, handleFileRemove, setInitialFile } = useFileUpload();

    useEffect(() => {
        if (initialFile) {
            const initialFileObject = { name: initialFile };
            setInitialFile(initialFileObject);
            onFileChange(initialFileObject);
        }
    }, [initialFile, setInitialFile, onFileChange]);

    const onChange = (event) => {
        handleFileChange(event);
        onFileChange(event.target.files[0]);
    };

    const onRemove = () => {
        handleFileRemove();
        onFileChange(null);
    };

    return (
        <div className="file_upload">
            <label htmlFor="pdf_input" className="fu_label">
                <input
                    type="file"
                    id="pdf_input"
                    accept=".pdf"
                    onChange={onChange}
                    style={{ display: "none" }}
                />
                <div className="fu_display">
                    {file ? file.name : "PDF 파일을 선택해주세요"}
                    {file && <span className="fu_remove" onClick={onRemove}>X</span>}
                </div>
            </label>
        </div>
    );
}

export default FileUpload;