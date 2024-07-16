import React from "react";
import github from "./../../assets/GitHub.png";
import notion from "./../../assets/Notion.png";
import blog from "./../../assets/Blog.png";

const ResumeArchiveInputView = ({ archGit, archNotion, archBlog }) => {
    return (
        <div className="resume_archive_input">
            <div className="resume_archive_container">
                <div className="archive_input">
                    <div className="archive_github">
                        <img src={github} alt="Github" />
                        <p>GitHub</p>
                        <p>{archGit}</p>
                    </div>
                    <div className="archive_notion">
                        <img src={notion} alt="Notion" />
                        <p>Notion</p>
                        <p>{archNotion}</p>
                    </div>
                    <div className="archive_blog">
                        <img src={blog} alt="Blog" />
                        <p>Blog</p>
                        <p>{archBlog}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeArchiveInputView;
