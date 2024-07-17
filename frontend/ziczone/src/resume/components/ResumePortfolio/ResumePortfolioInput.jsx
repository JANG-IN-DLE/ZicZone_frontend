import React, { useEffect, useState } from 'react';
import useFileUpload from './../../hooks/useFileUpload';
import file_delete from "./../../assets/Delete.png";
import resume_delete from "./../../assets/Minus.png";
import "./../../styles/ResumePortfolio.css";

const ResumePortfolioInput = ({ id, removeInput, updatePortfolio }) => {
    const {
        fileInputRef,
        fileName,
        handleButtonClick,
        handleFileChange,
        handleClearFile,
    } = useFileUpload();

    const [file, setFile] = useState(null);

    useEffect(() => {
        updatePortfolio(id, { file });
    }, [file, id, updatePortfolio]);

    const handleFileUploadChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file);
            handleFileChange(event);
        }
    };

    const handleFileClear = () => {
        setFile(null);
        handleClearFile();
    };

    return (
        <div className="resume_portfolio_upload">
            <div className='portfolio_file_upload'>
                {fileName && <span className="portfolio_file_name">{fileName}</span>}
                {fileName && <img src={file_delete} alt="삭제" onClick={handleFileClear} style={{ cursor: 'pointer' }} />}
            </div>
            <button onClick={handleButtonClick} className="port_upload_button">
                파일첨부
            </button>
            <input
                type="file"
                ref={fileInputRef}
                className="portfolio_input_file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileUploadChange}
            />
            <div className="port_delete" onClick={removeInput}>
                <img src={resume_delete} alt="delete" />
            </div>
        </div>
    );
};

export default ResumePortfolioInput;
