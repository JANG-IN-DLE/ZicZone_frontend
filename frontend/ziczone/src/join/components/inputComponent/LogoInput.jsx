import React from 'react';
import '../../styles/JoinCom/LogoInput.css';
import zzlogoimg from "../../assets/zzlogoimg.png"
import camera from "../../assets/camera.png"
import useProfileImage from '../../hooks/useProfileImg';

const LogoInput = () => {
    const {
        profile,
        fileInputRef,
        handleCameraClick,
        handleFileChange,
    } = useProfileImage();

    return (
        <div className="company comlogo">
            <div className="logo-container">
                <img className="comlogoimg" src={profile ? profile : zzlogoimg} alt="Company Logo" />
            </div>
            <img className="camera" src={camera} onClick={handleCameraClick} alt="Camera Icon" />
            <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handleFileChange}
            />
        </div>
    );
};

export default LogoInput;