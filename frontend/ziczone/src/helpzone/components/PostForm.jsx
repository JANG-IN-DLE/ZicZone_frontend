import React from "react";
import Button from "./Button";
import "../styles/PostForm.css";
import FileUpload from "./FileUpload";

const PostForm = () => {
    return (
        <div className="post_form">
            <p>제목</p>
            <input className="pf_input" />
            <textarea />
            <p className="pf_pdf">첨부파일 <span>*하나의 PDF 파일로 첨부해주세요</span></p>
            <div className="pf_file_upload">
                <FileUpload />
            </div>
        </div>
    );
}

export default PostForm;