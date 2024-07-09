import React from "react";
import "./../../styles/ResumeArchive.css"
import plus_btn from "./../../assets/Plus_btn.png"
import ResumeArchiveInputView from "./../ResumeArchive/ResumeArchiveInputView"

const ResumeArchiveView = () => {
    return (
        <div className="resume_archive">
            <div className="resume_archive_title">
                <p className="archive_title">아카이브</p>
            </div>
            <div className="resume_bar"></div>
            <ResumeArchiveInputView />
        </div>
    )
}

export default ResumeArchiveView