import React from "react";
import github from "./../../../../resume/assets/GitHub.png"
import notion from "./../../../../resume/assets/Notion.png"
import blog from "./../../../../resume/assets/Blog.png"

const ResumeArchiveInputView = ( { blogSrc, gitSrc, notionSrc }) => {
    return (
        <div className="resume_archive_input">
            <div className="resume_archive_container">
                <div className="archive_input">
                    <div className="archive_github">
                        <img src={github} alt="Github" />
                        <p>GitHub</p>
                        <p>{gitSrc}</p>
                    </div>
                    <div className="archive_notion">
                        <img src={notion} alt="Notion" />
                        <p>Notion</p>
                        <p>{notionSrc}</p>
                    </div>
                    <div className="archive_blog">
                        <img src={blog} alt="Blog" />
                        <p>Blog</p>
                        <p>{blogSrc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResumeArchiveInputView