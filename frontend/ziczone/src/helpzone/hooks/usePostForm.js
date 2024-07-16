import { useState, useEffect } from "react";
import axios from "axios";

const usePostForm = (initialBerry = 100, initialData = {}, userId, corrId, isEditMode, onSubmitSuccess) => {
    const [selectedBerry, setSelectedBerry] = useState(initialBerry);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        setSelectedBerry(initialData.berry || initialBerry);
        setTitle(initialData.title || '');
        setFile(initialData.file || null);
        setContent(initialData.content || '');
    }, [initialData, initialBerry]);

    const handleBerrySelect = (value) => {
        setSelectedBerry(value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("berry", selectedBerry);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("userId", userId);
        if (file) {
            formData.append("file", file);
        } else {
            const defaultFile = new Blob(["default content"], { type: "application/pdf" });
            formData.append("file", defaultFile, "default.pdf");
        }
    
        try {
            const response = isEditMode 
                ? await axios.put(`/api/personal/board/${corrId}/${userId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                : await axios.post('/api/personal/board/post', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
    
            if (response.status === 200) {
                const { corrId, fileName } = response.data;
                if (corrId) {
                    onSubmitSuccess(corrId, fileName);
                } else {
                    console.error("등록/수정 후 corrId를 받아오지 못했습니다.");
                }
            } else {
                console.error("게시물 등록/수정 실패");
            }
        } catch (error) {
            console.error("게시물 등록/수정 중 에러 발생", error);
        }
    };
    
    return {
        selectedBerry,
        title,
        content,
        handleBerrySelect,
        handleTitleChange,
        handleContentChange,
        handleFileChange,
        handleSubmit
    };
}

export default usePostForm;