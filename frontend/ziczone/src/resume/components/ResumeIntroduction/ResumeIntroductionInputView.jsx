import React from 'react';
import useFileUpload from './../../hooks/useFileUpload';
import erase from "./../../assets/Delete.png";

const ResumeIntroductionInput = () => {
    const {
        fileInputRef,
        fileName,
        handleButtonClick,
        handleFileChange,
        handleClearFile,
    } = useFileUpload();

    return (
        <div className="resume_introduction_upload">
            <div className='introduction_file_upload'>
                {fileName && <span className="introduction_file_name">{fileName}</span>}
            </div>
        </div>
    );
};

export default ResumeIntroductionInput;
