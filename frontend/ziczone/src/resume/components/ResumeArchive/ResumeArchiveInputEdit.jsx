import React from "react";
import github from "./../../assets/GitHub.png";
import notion from "./../../assets/Notion.png";
import blog from "./../../assets/Blog.png";

const ResumeArchiveInputEdit = ({ archiveData, updateArchiveData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateArchiveData({ [name]: value });
    };

    return (
        <div className="resume_archive_input">
            <div className="resume_archive_container">
                <div className="archive_input">
                    <div className="archive_github">
                        <img src={github} alt="Github" />
                        <p>GitHub</p>
                        <input
                            type="text"
                            name="git"
                            value={archiveData.git}
                            onChange={handleChange}
                            placeholder="https://github.com"
                        />
                    </div>
                    <div className="archive_notion">
                        <img src={notion} alt="Notion" />
                        <p>Notion</p>
                        <input
                            type="text"
                            name="notion"
                            value={archiveData.notion}
                            onChange={handleChange}
                            placeholder="https://www.notion.so"
                        />
                    </div>
                    <div className="archive_blog">
                        <img src={blog} alt="Blog" />
                        <p>Blog</p>
                        <input
                            type="text"
                            name="blog"
                            value={archiveData.blog}
                            onChange={handleChange}
                            placeholder="https://blog.naver.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeArchiveInputEdit;
