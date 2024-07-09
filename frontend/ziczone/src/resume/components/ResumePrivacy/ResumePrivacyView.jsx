import React from "react";
import "./../../styles/ResumePrivacy.css";
import email from "./../../assets/Email.png";
import phone from "./../../assets/Phone.png";
import birthdate from "./../../assets/Birthdate.png";
import useUploadImage from "../../hooks/useUploadImage";

const ResumePrivacyView = () => {
    const { imageSrc, isImageUploaded, handleImageChange, handleDeleteImage } = useUploadImage();

    const handleImageClick = () => {
        document.getElementById('imageInput').click();
    };

    return (
        <div className="resume_privacy">
            <div className="resume_privacy_left">
                <div className="resume_name">
                    <p>강승규</p>
                </div>
                <div className="resume_email">
                    <img src={email} alt="Email" />
                    <p>kscu7310@naver.com</p>
                </div>
                <div className="resume_phone">
                    <img src={phone} alt="Phone" />
                    <p>010-0000-0000</p>
                </div>
                <div className="resume_birthdate">
                    <img src={birthdate} alt="Birthdate" />
                    <p>0000년 00월 00일</p>
                </div>
            </div>
            <div className="resume_privacy_right">
                <div className="resume_image">
                    <img src={imageSrc} alt="증명사진" />
                </div>
            </div>
        </div>
    );
}

export default ResumePrivacyView;
