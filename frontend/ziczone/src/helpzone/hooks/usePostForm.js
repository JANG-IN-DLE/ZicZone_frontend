import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const usePostForm = (initialBerry = 100, initialData = {}, onSubmitSuccess) => {
    const [selectedBerry, setSelectedBerry] = useState(initialBerry);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

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
        console.log("첨삭 게시물 데이터 : ", {
            selectedBerry,
            title,
            content,
            file
        });
    
        const formData = new FormData();
        formData.append("berry", selectedBerry);
        formData.append("title", title);
        formData.append("content", content);
        if (file) {
            formData.append("file", file);
        } else {
            const defaultFile = new Blob(["default content"], { type: "application/pdf" });
            formData.append("file", defaultFile, "default.pdf");
        }
    
        try {
            const response = await axios.post('http://localhost:12000/api/board/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                console.log("첨삭 게시물 등록 성공", response.data);
                const { corrId } = response.data;
                console.log("Received corrId:", corrId); // 로그로 corrId 확인
                if (corrId) {
                    window.location.href = `/rdboard/${corrId}`;
                } else {
                    console.error("등록 후 corrId를 받아오지 못했습니다.");
                }
            } else {
                console.error("첨삭 게시물 등록 실패");
            }
        } catch (error) {
            console.error("첨삭 게시물 등록 중 에러 발생", error);
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