import React, { useEffect, useState } from "react";
import "./../../styles/ResumeArchive.css";
import ResumeArchiveInputView from "./../ResumeArchive/ResumeArchiveInputView";
import axios from "axios";
import config from '../../../config';

const ResumeArchiveView = () => {
    const userId = localStorage.getItem("userId");
    const [archiveData, setArchiveData] = useState(null);

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                setArchiveData(response.data.archive || {
                    archGit: '',
                    archNotion: '',
                    archBlog: ''
                });
            })
            .catch(error => {
                console.log("archiveData 호출 실패", error);
            });
    }, [userId]);

    if (!archiveData) {
        return null; // 데이터가 없으면 아무것도 렌더링하지 않음
    }

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
