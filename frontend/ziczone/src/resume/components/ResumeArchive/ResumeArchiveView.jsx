import React, { useEffect, useState } from "react";
import "./../../styles/ResumeArchive.css";
import ResumeArchiveInputView from "./../ResumeArchive/ResumeArchiveInputView";
import axios from "axios";

const ResumeArchiveView = () => {
    const userId = 7; // 사용자 ID
    const [archiveData, setArchiveData] = useState({
        arch_git: '',
        arch_notion: '',
        arch_blog: ''
    });

    useEffect(() => {
        axios.get(`/api/resumes/${userId}`)
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
                archGit={archiveData.arch_git}
                archNotion={archiveData.arch_notion}
                archBlog={archiveData.arch_blog}
            />
        </div>
    );
}

export default ResumeArchiveView;
