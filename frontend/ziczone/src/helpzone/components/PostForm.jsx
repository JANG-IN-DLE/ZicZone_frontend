import React from "react";
import "../styles/PostForm.css";
import FileUpload from "./FileUpload";
import BerrySelect from "./BerrySelect";
import Button from "./Button";
import usePostForm from "../hooks/usePostForm";

const PostForm = () => {
    const {
        selectedBerry,
        title,
        content,
        handleBerrySelect,
        handleTitleChange,
        handleContentChange,
        handleFileChange,
        handleSubmit
    } = usePostForm(100);

    return (
        <form className="post_form" onSubmit={(e) => e.preventDefault()}>
            <BerrySelect className="pf_berry_select" selectedBerry={selectedBerry} onSelect={handleBerrySelect} />
            <p className="pf_title">제목</p>
            <div className="pf_title_wrapper">
                <div className="pf_berry_display">{selectedBerry}</div>
                <input 
                    className="pf_input"
                    value={ title }
                    onChange={ handleTitleChange }
                 />
            </div>
            <textarea
                value={ content }
                onChange={ handleContentChange }
             />
            <p className="pf_pdf">첨부파일 <span>*하나의 PDF 파일로 첨부해주세요</span></p>
            <div className="pf_file_upload">
                <FileUpload 
                    onFileChange={ handleFileChange }
                />
            </div>
            <div className="pf_button">
                <Button type="submit" onClick={ handleSubmit }>
                    등록
                </Button>
             </div>
        </form>
    );
}

export default PostForm;