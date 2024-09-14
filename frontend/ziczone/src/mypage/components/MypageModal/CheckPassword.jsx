import React, { useState } from "react";
import "./../../styles/CheckPassword.css"
import api from '../../../common/config/axiosInstance';

const CheckPassword = ({ setIsModalOpen, onSuccess }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");


    const handleCloseClick = () => {
        setIsModalOpen(false);
    };
    
    const confirmPassword = () => {

        api.post(`/api/user/pw/${userId}`, {
                password: currentPassword,
                role: userRole
        })
            .then(respoonse => {
                console.log("비밀번호 검증 완료: " + respoonse);
                alert("본인 확인되었습니다.")
                onSuccess();
            })
            .catch(error => {
                console.error("비밀번호 검증 실패: " + error);
                alert("확인되지 않은 비밀번호입니다.")
            });
    }

    return (
        <div className="current_password_check">
            <div className="password_check_container">
                <div className="password_check_left">
                    <p>현재 비밀번호 확인</p>
                </div>
                <div className="passoword_check_right">
                    <input type="password"
                        placeholder="현재 비밀번호 입력"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="passoword_check_cancel">
                <button className="password_check_btn" onClick={confirmPassword}>확인</button>
                <button className="password_cancel_btn" onClick={handleCloseClick}>취소</button>
            </div>
        </div>
    )
}

export default CheckPassword