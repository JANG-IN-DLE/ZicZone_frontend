import React from "react";
import "./../../styles/ResumePrivacy.css";
import email from "./../../assets/Email.png";
import phone from "./../../assets/Phone.png";
import birthdate from "./../../assets/Birthdate.png";
import resumePhotoNull from "../../../pickzone/assets/resumePhotoNull.png";

const ResumePrivacyView = ({resumeName, resumeEmail, phoneNum, resumeDate, resumePhoto, isPicked}) => {

    return (
        <div className="resume_privacy">
            <div className="resume_privacy_left">
                <div className="resume_name">
                    <p>{resumeName}</p>
                </div>
                <div className="resume_email">
                    <img src={email} alt="Email" />
                    <p>{isPicked ? resumeEmail : ' '}</p>
                </div>
                <div className="resume_phone">
                    <img src={phone} alt="Phone" />
                    <p>{isPicked ? phoneNum : ' '}</p>
                </div>
                <div className="resume_birthdate">
                    <img src={birthdate} alt="Birthdate" />
                    <p>{isPicked ? resumeDate : ' '}</p>
                </div>
            </div>
            <div className="resume_privacy_right">
                <div className="resume_image">
                    <img src={isPicked ? resumePhoto : resumePhotoNull} alt="증명사진" />
                </div>
            </div>
        </div>
    );
}

export default ResumePrivacyView;
