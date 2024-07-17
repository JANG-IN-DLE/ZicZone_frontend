import React, { useState, useEffect } from "react";
import "./../../styles/ResumeArchive.css";
import ResumeArchiveInput from "./ResumeArchiveInput";

const ResumeArchive = ({ setArchive }) => {
    const [archive, setLocalArchive] = useState({
        github: "",
        notion: "",
        blog: ""
    });

    const updateArchive = (newData) => {
        setLocalArchive(prevArchive => ({ ...prevArchive, ...newData }));
    };

    useEffect(() => {
        setArchive(archive);
    }, [archive, setArchive]);

    return (
        <div className="resume_archive">
            <div className="resume_archive_title">
                <p className="archive_title">아카이브</p>
            </div>
            <div className="resume_bar"></div>
            <ResumeArchiveInput updateArchive={updateArchive} />
        </div>
    );
};

export default ResumeArchive;
