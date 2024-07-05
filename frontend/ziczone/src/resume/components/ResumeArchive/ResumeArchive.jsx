import React from "react";
import "./../../styles/ResumeArchive.css"
import plus_btn from "./../../assets/Plus_btn.png"
import ResumeArchiveInput from "./../ResumeArchive/ResumeArchiveInput"

const ResumeArchive = () => {
    return (
        <div className="resume_archive">
            <div className="resume_archive_title">
                <p className="archive_title">아카이브</p>
            </div>
            <div className="resume_bar"></div>
            <ResumeArchiveInput />
        </div>
    )
}

export default ResumeArchive