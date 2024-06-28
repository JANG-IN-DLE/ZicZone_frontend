import React from "react";
import useFileUpload from "../hooks/useFileUpload.js";
import "../styles/FileUpload.css";

const FileUpload = () => {
    const { file, handleFileChange, handleFileRemove } = useFileUpload();

    return (
        <div className="file_upload">
            <label htmlFor="pdf_input" className="fu_label">
                <input
                    type="file"
                    id="pdf_input"
                    accept=".pdf"
                    onChange={ handleFileChange }
                    style={{ display: "none" }}
                />
                <div className="fu_display">
                    {file ? file.name : "PDF 파일을 선택해주세요"}
                    {file && <span className="fu_remove" onClick={ handleFileRemove }>X</span>}
                </div>
            </label>
        </div>
    );
}

export default FileUpload;