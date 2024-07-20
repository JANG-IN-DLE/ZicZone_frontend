import React from "react";
import "../styles/PostForm.css";
import BerrySelect from "./BerrySelect";
import Button from "./Button";
import FileUpload from "./FileUpload";
import usePostForm from "../hooks/usePostForm";

const PostForm = ({ isEditMode = false, initialData = {}, userId, corrId, onSubmit }) => {
  const {
    selectedBerry,
    title,
    content,
    handleBerrySelect,
    handleTitleChange,
    handleContentChange,
    handleFileChange,
    handleSubmit
  } = usePostForm(initialData.berry || 100, initialData, userId, corrId, isEditMode, onSubmit);

  return (
    <form className="post_form" onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}>
      {!isEditMode && (
        <BerrySelect 
          className="pf_berry_select" 
          selectedBerry={selectedBerry} 
          onSelect={handleBerrySelect} 
        />
      )}
      <p className="pf_title">제목</p>
      <div className="pf_title_wrapper">
        <div className="pf_berry_display">{selectedBerry}</div>
        <input
          className="pf_input"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <textarea
        value={content}
        onChange={handleContentChange}
      />
      <p className="pf_pdf">첨부파일 <span>*하나의 PDF 파일로 첨부해주세요</span></p>
      <div className="pf_file_upload">
        <FileUpload
          onFileChange={handleFileChange}
          initialFile={initialData.file}
        />
      </div>
      <div className="pf_button">
        <Button type="submit">
          {isEditMode ? "수정" : "등록"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;