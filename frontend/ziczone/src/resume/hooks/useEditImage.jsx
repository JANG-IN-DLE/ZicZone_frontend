import { useState } from 'react';
import resume_image from "./../assets/Resume_Image.png";

const useUploadImage = (onImageChange) => {
    const [imageSrc, setImageSrc] = useState(resume_image);
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImageSrc = e.target.result;
                setImageSrc(newImageSrc);
                setIsImageUploaded(true);
                if (onImageChange) onImageChange(newImageSrc);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setImageSrc(resume_image);
        setIsImageUploaded(false);
        document.getElementById('imageInput').value = "";
        if (onImageChange) onImageChange(resume_image);
    };

    return {
        imageSrc,
        isImageUploaded,
        handleImageChange,
        handleDeleteImage
    };
};

export default useUploadImage;