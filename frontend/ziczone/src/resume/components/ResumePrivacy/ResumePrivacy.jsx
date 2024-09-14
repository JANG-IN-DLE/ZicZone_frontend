import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./../../styles/ResumePrivacy.css";
import email from "./../../assets/Email.png";
import phone from "./../../assets/Phone.png";
import birthdate from "./../../assets/Birthdate.png";
import useUploadImage from "../../hooks/useUploadImage";
import api from '../../../common/config/axiosInstance';

const ResumePrivacy = ({ setPrivacy }) => {
    const { imageSrc, isImageUploaded, handleImageChange, handleDeleteImage, imageFile } = useUploadImage();
    const userId = localStorage.getItem("userId")
    const [resumeName, setResumeName] = useState('');
    const [resumeEmail, setResumeEmail] = useState('');
    const [resumePhone, setResumePhone] = useState('');
    const [resumeDate, setResumeBirth] = useState('');

    useEffect(() => {
        // 데이터베이스에서 값을 불러오는 비동기 함수
        const fetchData = async () => {
            try {
                const response = await api.get(`/api/personal/${userId}`); // API 엔드포인트를 여기에 입력하세요
                const data = response.data;
                
                setResumeName(data.user.userName);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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

    useEffect(() => {
        setPrivacy({ resumeName, resumeEmail, resumePhone, resumeDate, resumePhoto: imageFile });
    }, [resumeName, resumeEmail, resumePhone, resumeDate, imageFile, setPrivacy]);

    const handleImageClick = () => {
        document.getElementById('imageInput').click();
    };

    return (
        <div className="resume_privacy">
            <div className="resume_privacy_left">
                <div className="resume_name">
                    <input 
                        type="text" 
                        placeholder="이름" 
                        value={resumeName} 
                        maxLength={3} 
                        readOnly  // 읽기 전용 설정
                    />
                </div>
                <div className="resume_email">
                    <img src={email} alt="Email" />
                    <input 
                        type="text" 
                        placeholder="ziczone@email.com" 
                        value={resumeEmail} 
                        onChange={(e) => setResumeEmail(e.target.value)} 
                    />
                </div>
                <div className="resume_phone">
                    <img src={phone} alt="Phone" />
                    <input 
                        type="text" 
                        placeholder="010-0000-0000" 
                        value={resumePhone} 
                        maxLength={13} 
                        onChange={(e) => setResumePhone(e.target.value)} 
                    />
                </div>
                <div className="resume_birthdate">
                    <img src={birthdate} alt="Birthdate" />
                    <input 
                        type="date" 
                        placeholder="YYYY년 MM월 DD일" 
                        value={resumeDate} 
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
                        <button onClick={handleDeleteImage}>사진 삭제하기</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResumePrivacy;
