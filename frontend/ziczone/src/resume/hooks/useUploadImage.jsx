import { useState } from 'react';
import resume_image from "./../assets/Resume_Image.png";  // 기본 이미지를 임포트합니다.

const useUploadImage = () => {
    const [imageSrc, setImageSrc] = useState(resume_image);
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
                setIsImageUploaded(true); // 이미지 업로드 상태 변경
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setImageSrc(resume_image); // 기본 이미지로 변경
        setIsImageUploaded(false); // 이미지 업로드 상태 변경
        document.getElementById('imageInput').value = ""; // 파일 입력 필드 초기화
    };

    return {
        imageSrc,
        isImageUploaded,
        handleImageChange,
        handleDeleteImage
    };
};

export default useUploadImage;
