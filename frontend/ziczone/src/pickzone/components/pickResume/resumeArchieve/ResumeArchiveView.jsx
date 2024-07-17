import React from "react";
import "./../../../../resume/styles/ResumeArchive.css"
import ResumeArchiveInputView from "./ResumeArchiveInputView"

const ResumeArchiveView = ({ archives }) => {
    return (
        <div className="resume_archive">
            <div className="resume_archive_title">
                <p className="archive_title">아카이브</p>
            </div>
            <div className="resume_bar"></div>
            {archives.map((archive, index) => {
                const [ blogSrc, gitSrc, notionSrc ] = archive.split(',');
                return (
                    <ResumeArchiveInputView 
                        key={index}
                        blogSrc={blogSrc}
                        gitSrc={gitSrc}
                        notionSrc={notionSrc}
                    />
                );
            })}
        </div>
    );
};

export default ResumeArchiveView