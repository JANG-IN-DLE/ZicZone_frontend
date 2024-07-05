import React from "react";
import github from "./../../assets/GitHub.png"
import notion from "./../../assets/Notion.png"
import blog from "./../../assets/Blog.png"

const ResumeArchiveInput = () => {
    return (
        <div className="resume_archive_input">
            <div className="resume_archive_container">
                <div className="archive_input">
                    <div className="archive_github">
                        <img src={github} alt="Github" />
                        <p>GitHub</p>
                        <input type="text" placeholder="https://github.com"/>
                    </div>
                    <div className="archive_notion">
                        <img src={notion} alt="Notion" />
                        <p>Notion</p>
                        <input type="notion" placeholder="https://notion.so"/>
                    </div>
                    <div className="archive_blog">
                        <img src={blog} alt="Blog" />
                        <p>Blog</p>
                        <input type="text" placeholder="https://blog.naver.com"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeArchiveInput