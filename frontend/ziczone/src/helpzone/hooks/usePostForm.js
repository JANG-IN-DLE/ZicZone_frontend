import { useState } from "react";

const usePostForm = (initialBerry=100) => {
    const [selectedBerry, setSelectedBerry] = useState(initialBerry);
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [content, setContent] = useState('');

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

    const handleSubmit = () => {
        console.log("게시물 데이터:", {
            selectedBerry,
            title,
            content,
            file
        });
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