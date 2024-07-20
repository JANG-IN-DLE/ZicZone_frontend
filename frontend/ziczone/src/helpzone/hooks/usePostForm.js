import { useState, useEffect } from "react";
import axios from "axios";

const usePostForm = (initialBerry = 100, initialData = {}, userId, corrId, isEditMode, onSubmitSuccess) => {
    const [selectedBerry, setSelectedBerry] = useState(initialBerry);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userPoint, setUserPoint] = useState(0);

    useEffect(() => {
        setSelectedBerry(initialData.berry || initialBerry);
        setTitle(initialData.title || '');
        setFile(initialData.file || null);
        setContent(initialData.content || '');

        const fetchUserPoint = async () => {
            try {
                const response = await axios.get(`/api/personal/board/myProfile/${userId}`);
                setUserPoint(response.data.point);
            } catch (error) {
                console.error('사용자 포인트를 가져오는 중 오류 발생:', error);
            }
        };

        fetchUserPoint();
    }, [initialData, initialBerry, userId]);

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
        if (isSubmitting) {
            return;
        }

        if (!title || !content || !file) {
            alert('제목, 내용 및 첨부파일을 모두 입력해 주세요.');
            return;
        }

        if (selectedBerry > userPoint) {
            alert('보유한 베리가 부족합니다.');
            return;
        }

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
            setIsSubmitting(true);
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
            alert(error.response?.data?.message || "게시물 등록 중 오류가 발생했습니다.");
            console.error("게시물 등록/수정 중 에러 발생", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        selectedBerry,
        title,
        content,
        file,
        userPoint,
        handleBerrySelect,
        handleTitleChange,
        handleContentChange,
        handleFileChange,
        handleSubmit
    };
}

export default usePostForm;