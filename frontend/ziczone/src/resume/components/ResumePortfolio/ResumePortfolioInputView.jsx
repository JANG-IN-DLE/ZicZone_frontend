import React from 'react';
import useFileUpload from './../../hooks/useFileUpload';
import erase from "./../../assets/Delete.png";

const ResumePortfolioInputView = () => {
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
            </div>
        </div>
    );
};

export default ResumePortfolioInputView;
