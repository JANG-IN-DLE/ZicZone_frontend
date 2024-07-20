import React, { useEffect, useState } from "react";
import "./../../styles/ResumeArchive.css";
import ResumeArchiveInputView from "./../ResumeArchive/ResumeArchiveInputView";
import axios from "axios";

const ResumeArchiveView = () => {
    const userId = localStorage.getItem("userId")
    const [archiveData, setArchiveData] = useState({
        arch_git: '',
        arch_notion: '',
        arch_blog: ''
    });

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setArchiveData(response.data.archive);
            })
            .catch(error => {
                console.log("archiveData 호출 실패", error);
            });
    }, [userId]);

    return (
        <div className="resume_archive">
            <div className="resume_archive_title">
                <p className="archive_title">아카이브</p>
            </div>
            <div className="resume_bar"></div>
            <ResumeArchiveInputView
                archGit={archiveData.archGit}
                archNotion={archiveData.archNotion}
                archBlog={archiveData.archBlog}
            />
        </div>
    );
}

export default ResumeArchiveView;
