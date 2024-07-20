import React, { useEffect } from 'react';
import useFileUpload from './../../hooks/useFileUpload';
import erase from "./../../assets/Delete.png";

const ResumeIntroductionInputEdit = ({ initialFileName, updateIntroduction }) => {
    const setFile = (file) => {
        updateIntroduction(file);
    };

    const {
        fileInputRef,
        fileName,
        handleButtonClick,
        handleFileChange,
        handleClearFile,
    } = useFileUpload(setFile, initialFileName);

    useEffect(() => {
    }, [initialFileName]);

    return (
        <div className="resume_introduction_upload">
            <div className='introduction_file_upload'>
                {fileName && <span className="introduction_file_name">{fileName}</span>}
                {fileName && <img src={erase} alt="삭제" onClick={handleClearFile} style={{ cursor: 'pointer' }} />}
            </div>
            <button onClick={handleButtonClick} className="intro_upload_button">
                파일첨부
            </button>
            <input
                type="file"
                ref={fileInputRef}
                className="introduction_input_file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ResumeIntroductionInputEdit;
