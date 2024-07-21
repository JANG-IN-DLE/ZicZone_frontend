import React from "react";
import './../../styles/MypageTop.css'
import MypageUserModal from "../MypageModal/MypageUserModal";
import CheckPassword from "../MypageModal/CheckPassword";
import useModal from "../../hooks/useEditModal";
import maleImg from "../../../common/card/assets/personal_m_image.png"
import femaleImg from "../../../common/card/assets/personal_f_image.png"

const MypageTop = ({ gender }) => {
    const { isPasswordModalOpen, handleOpenPasswordModalOpen, handleClosePasswordModalOpen, isEditModalOpen, handleOpenEditModalOpen, handleCloseEditModalOpen } = useModal();

    const genderImg = gender === 'MALE' ? maleImg : femaleImg;

    const handlePasswordSuccess = () => {
        handleClosePasswordModalOpen();
        handleOpenEditModalOpen();
    }

    return (
        <div className="mypage_top">
            <span className="mypage">마이페이지</span>
            <div className="mypage_top_bar">
                <div className="mypage_top_circle">
                    <img src={genderImg} alt="{gender}" />
                </div>
            </div>
            <div className="mypage_top_edit">
                <button onClick={handleOpenPasswordModalOpen}>정보 수정</button>
            </div>

            {/* 모달 컴포넌트를 상태 변수에 따라 조건부로 렌더링 */}
            {isPasswordModalOpen && <CheckPassword setIsModalOpen={handleClosePasswordModalOpen} onSuccess={handlePasswordSuccess} />}
            {isEditModalOpen && <MypageUserModal setIsModalOpen={handleCloseEditModalOpen} />}
        </div>
    )
}

export default MypageTop;
