import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./../../styles/ResumePrivacy.css";
import emailIcon from "./../../assets/Email.png";
import phoneIcon from "./../../assets/Phone.png";
import birthdateIcon from "./../../assets/Birthdate.png";
import useUploadImage from "../../hooks/useUploadImage";

const ResumePrivacyEdit = ({ setPrivacy }) => {
    const userId = localStorage.getItem("userId")
    const [resumeId, setResumeId] = useState(0)
    const [resumeName, setResumeName] = useState('');
    const [resumeEmail, setResumeEmail] = useState('');
    const [resumePhone, setResumePhone] = useState('');
    const [resumeBirth, setResumeBirth] = useState('');
    const { imageSrc, isImageUploaded, handleImageChange, handleDeleteImage, imageFile, setImageSrc, setIsImageUploaded } = useUploadImage();

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const { resumeId, resumeName, resumeDate, phoneNum, resumePhotoUrl, resumeEmail } = response.data;
                setResumeId(resumeId);
                setResumeName(resumeName);
                setResumeBirth(resumeDate);
                setResumePhone(phoneNum);
                setResumeEmail(resumeEmail);
                if (resumePhotoUrl) {
                    setImageSrc(resumePhotoUrl);
                    setIsImageUploaded(true);
                }
            })
            .catch(error => {
                console.error('Error fetching privacy data', error);
            });
    }, [userId, setImageSrc, setIsImageUploaded]);

    useEffect(() => {
        setPrivacy({ resumeId, resumeName, resumeEmail, resumePhone, resumeBirth, resumePhoto: imageFile });
    }, [resumeId, resumeName, resumeEmail, resumePhone, resumeBirth, imageFile, setPrivacy]);

    const handleImageClick = () => {
        document.getElementById('imageInput').click();
    };

    const resizeImage = useCallback((file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const targetWidth = 124;
                    const targetHeight = 158;
                    let newWidth = img.width;
                    let newHeight = img.height;

                    if (newWidth > targetWidth || newHeight > targetHeight) {
                        const ratio = Math.min(targetWidth / newWidth, targetHeight / newHeight);
                        newWidth *= ratio;
                        newHeight *= ratio;
                    }

                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, targetWidth, targetHeight);
                    ctx.drawImage(img, (targetWidth - newWidth) / 2, (targetHeight - newHeight) / 2, newWidth, newHeight);

                    canvas.toBlob((blob) => {
                        resolve(new File([blob], file.name, { type: 'image/jpeg' }));
                    }, 'image/jpeg', 0.95);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }, []);

    const handleImageChangeWithResize = useCallback(async (e) => {
        const file = e.target.files[0];
        if (file) {
            const resizedFile = await resizeImage(file);
            handleImageChange({ target: { files: [resizedFile] } });
        }
    }, [handleImageChange, resizeImage]);

    return (
        <div className="resume_privacy">
            <div className="resume_privacy_left">
                <div className="resume_name">
                    <input
                        type="text"
                        placeholder="이름"
                        value={resumeName}
                        onChange={(e) => setResumeName(e.target.value)}
                    />
                </div>
                <div className="resume_email">
                    <img src={emailIcon} alt="Email" />
                    <input
                        type="text"
                        placeholder="ziczone@email.com"
                        value={resumeEmail}
                        onChange={(e) => setResumeEmail(e.target.value)}
                    />
                </div>
                <div className="resume_phone">
                    <img src={phoneIcon} alt="Phone" />
                    <input
                        type="text"
                        placeholder="010-0000-0000"
                        value={resumePhone}
                        onChange={(e) => setResumePhone(e.target.value)}
                    />
                </div>
                <div className="resume_birthdate">
                    <img src={birthdateIcon} alt="Birthdate" />
                    <input
                        type="date"
                        placeholder="YYYY년 MM월 DD일"
                        value={resumeBirth}
                        onChange={(e) => setResumeBirth(e.target.value)}
                    />
                </div>
            </div>
            <div className="resume_privacy_right">
                <div className="resume_image" onClick={handleImageClick}>
                    <img src={imageSrc} alt="증명사진" />
                </div>
                <input
                    type="file"
                    id="imageInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageChangeWithResize}
                />
                {isImageUploaded && (
                    <div className="privacy_delete_btn">
                        <button onClick={handleDeleteImage}>사진 되돌리기</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResumePrivacyEdit;