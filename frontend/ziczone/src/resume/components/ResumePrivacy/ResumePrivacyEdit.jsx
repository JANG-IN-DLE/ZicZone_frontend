import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../styles/ResumePrivacy.css";
import emailIcon from "./../../assets/Email.png";
import phoneIcon from "./../../assets/Phone.png";
import birthdateIcon from "./../../assets/Birthdate.png";
import useUploadImage from "../../hooks/useUploadImage";

const ResumePrivacyEdit = ({ setPrivacy }) => {
    const userId = 7;
    const [resumeName, setResumeName] = useState('');
    const [resumeEmail, setResumeEmail] = useState('');
    const [resumePhone, setResumePhone] = useState('');
    const [resumeBirth, setResumeBirth] = useState('');
    const [resumePhoto, setResumePhoto] = useState('');

    const { imageSrc, isImageUploaded, handleImageChange, handleDeleteImage } = useUploadImage((newImageSrc) => {
        setResumePhoto(newImageSrc);
    });

    useEffect(() => {
        axios.get(`/api/resumes/${userId}`)
            .then(response => {
                const { resumeName, resumeDate, phoneNum, resumePhoto, resumeEmail } = response.data;
                setResumeName(resumeName);
                setResumeBirth(resumeDate);
                setResumePhone(phoneNum);
                setResumePhoto(resumePhoto);
                setResumeEmail(resumeEmail);
            })
            .catch(error => {
                console.error('Error fetching privacy data', error);
            });
    }, []);

    useEffect(() => {
        setPrivacy({ resumeName, resumeEmail, resumePhone, resumeBirth, resumePhoto });
    }, [resumeName, resumeEmail, resumePhone, resumeBirth, resumePhoto, setPrivacy]);

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
                        type="text" 
                        placeholder="YYYY년 MM월 DD일" 
                        value={resumeBirth} 
                        onChange={(e) => setResumeBirth(e.target.value)} 
                    />
                </div>
            </div>
            <div className="resume_privacy_right">
                <div className="resume_image" onClick={handleImageClick}>
                    <img src={isImageUploaded ? imageSrc : resumePhoto} alt="증명사진" />
                </div>
                <input
                    type="file"
                    id="imageInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageChange}
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
