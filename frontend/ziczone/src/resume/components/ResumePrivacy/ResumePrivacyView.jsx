import React, { useState, useEffect } from "react";
import "./../../styles/ResumePrivacy.css";
import email from "./../../assets/Email.png";
import phone from "./../../assets/Phone.png";
import birthdate from "./../../assets/Birthdate.png";
import useUploadImage from "../../hooks/useUploadImage";
// import Resume from "../Resume";
import api from '../../../common/config/axiosInstance';




const ResumePrivacyView = () => {
    const { imageSrc } = useUploadImage();
    
    const userId = localStorage.getItem("userId")
    const [privacyData, setPrivacyData] = useState({
        resumeName: "",
        resumeEmail: "",
        resumePhone: "",
        resumeDate: "",
        resumePhoto: ""
    });

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data;
                setPrivacyData({
                    resumeName: data.resumeName,
                    resumeDate: data.resumeDate,
                    phoneNum: data.phoneNum,
                    resumeEmail: data.resumeEmail,
                    resumePhoto: data.resumePhotoUrl
                });
            })
            .catch(error => {
                console.log("privacyData 호출 실패", error)
            })
    }, [userId])

    return (
        <div className="resume_privacy">
            <div className="resume_privacy_left">
                <div className="resume_name">
                    <p>{privacyData.resumeName}</p>
                </div>
                <div className="resume_email">
                    <img src={email} alt="Email" />
                    <p>{privacyData.resumeEmail}</p>
                </div>
                <div className="resume_phone">
                    <img src={phone} alt="Phone" />
                    <p>{privacyData.phoneNum}</p>
                </div>
                <div className="resume_birthdate">
                    <img src={birthdate} alt="Birthdate" />
                    <p>{privacyData.resumeDate}</p>
                </div>
            </div>
            <div className="resume_privacy_right">
                <div className="resume_image">
                    <img src={privacyData.resumePhoto || imageSrc} alt="증명사진" />
                </div>
            </div>
        </div>
    );
}

export default ResumePrivacyView;
