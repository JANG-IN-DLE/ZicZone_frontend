import React from "react";
import github from "./../../assets/GitHub.png";
import notion from "./../../assets/Notion.png";
import blog from "./../../assets/Blog.png";
import "./../../styles/ResumeArchive.css";

const ResumeArchiveInput = ({ updateArchive }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateArchive({ [name]: value });
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
                            name="github"
                            placeholder="https://github.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="archive_notion">
                        <img src={notion} alt="Notion" />
                        <p>Notion</p>
                        <input
                            type="text"
                            name="notion"
                            placeholder="https://notion.so"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="archive_blog">
                        <img src={blog} alt="Blog" />
                        <p>Blog</p>
                        <input
                            type="text"
                            name="blog"
                            placeholder="https://blog.naver.com"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeArchiveInput;
