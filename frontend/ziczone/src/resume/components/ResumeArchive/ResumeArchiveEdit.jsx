import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../styles/ResumeArchive.css";
import ResumeArchiveInputEdit from "./ResumeArchiveInputEdit";
import config from '../../../config';

const ResumeArchiveEdit = ({ setArchive }) => {
    const userId = localStorage.getItem("userId");
    const [archiveData, setArchiveData] = useState({
        archId: null,
        git: '',
        notion: '',
        blog: ''
    });

    const api = axios.create({
        baseURL: config.baseURL
      });

    useEffect(() => {
        // 서버로부터 데이터 가져오기
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.archive;
                const updatedData = {
                    archId: data.archId,
                    git: data.archGit,
                    notion: data.archNotion,
                    blog: data.archBlog
                };
                setArchiveData(updatedData);
                setArchive(updatedData); // 초기 상태 설정
            })
            .catch(error => {
                console.error("Error fetching archive data", error);
            });
    }, [userId, setArchive]);

    const updateArchiveData = (newData) => {
        setArchiveData(prevData => {
            const updatedData = { ...prevData, ...newData };
            setArchive(updatedData);
            return updatedData;
        });
    };

    return (
        <div className="resume_archive">
            <div className="resume_archive_title">
                <p className="archive_title">아카이브</p>
            </div>
            <div className="resume_bar"></div>
            <ResumeArchiveInputEdit
                archiveData={archiveData}
                updateArchiveData={updateArchiveData}
            />
        </div>
    );
};

export default ResumeArchiveEdit;
