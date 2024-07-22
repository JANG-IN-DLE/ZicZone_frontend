import React, { useState, useEffect } from "react";
import "./../../styles/ResumePrivacy.css";
import email from "./../../assets/Email.png";
import phone from "./../../assets/Phone.png";
import birthdate from "./../../assets/Birthdate.png";
import useUploadImage from "../../hooks/useUploadImage";
import axios from "axios";

const ResumePrivacy = ({ setPrivacy }) => {
    const { imageSrc, isImageUploaded, handleImageChange, handleDeleteImage, imageFile } = useUploadImage();

    const [resumeName, setResumeName] = useState('');
    const [resumeEmail, setResumeEmail] = useState('');
    const [phone_num, setResumePhone] = useState('');
    const [resumeDate, setResumeBirth] = useState('');

    useEffect(() => {
        setPrivacy({ resumeName, resumeEmail, phone_num, resumeDate, resumePhotoUrl: imageFile });
    }, [resumeName, resumeEmail, phone_num, resumeDate, imageFile, setPrivacy]);

    const handleImageClick = () => {
        document.getElementById('imageInput').click();
    };

    // axios.get(`/api/resumes/${userId}`)
    // .then(response.data)

    return (
        <div className="resume_privacy">
            <div className="resume_privacy_left">
                <div className="resume_name">
                    <input type="text" placeholder="이름" value={resumeName} maxLength={3} onChange={(e) => setResumeName(e.target.value)} />
                </div>
                <div className="resume_email">
                    <img src={email} alt="Email" />
                    <input type="text" placeholder="ziczone@email.com" value={resumeEmail} onChange={(e) => setResumeEmail(e.target.value)} />
                </div>
                <div className="resume_phone">
                    <img src={phone} alt="Phone" />
                    <input type="text" placeholder="010-0000-0000" value={phone_num} maxLength={13} onChange={(e) => setResumePhone(e.target.value)} />
                </div>
                <div className="resume_birthdate">
                    <img src={birthdate} alt="Birthdate" />
                    <input type="date" placeholder="YYYY년 MM월 DD일" value={resumeDate} onChange={(e) => setResumeBirth(e.target.value)} />
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
                    onChange={handleImageChange}
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
