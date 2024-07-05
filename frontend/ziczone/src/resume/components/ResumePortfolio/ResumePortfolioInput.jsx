import React from 'react';
import useFileUpload from './../../hooks/useFileUpload';
import erase from "./../../assets/Delete.png";

const ResumePortfolioInput = () => {
    const {
        fileInputRef,
        fileName,
        handleButtonClick,
        handleFileChange,
        handleClearFile,
    } = useFileUpload();

    return (
        <div className="resume_portfolio_upload">
            <div className='portfolio_file_upload'>
                {fileName && <span className="portfolio_file_name">{fileName}</span>}
                {fileName && <img src={erase} alt="삭제" onClick={handleClearFile} style={{ cursor: 'pointer' }} />}
            </div>
            <button onClick={handleButtonClick} className="file_upload_button">
                파일첨부
            </button>
            <input
                type="file"
                ref={fileInputRef}
                className="portfolio_input_file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ResumePortfolioInput;
