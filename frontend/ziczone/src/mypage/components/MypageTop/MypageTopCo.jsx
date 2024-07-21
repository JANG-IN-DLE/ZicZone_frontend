import React from "react";
import './../../styles/MypageTop.css'
import CheckPassword from "../MypageModal/CheckPassword";
import MypageCompanyModal from "../MypageModal/MypageCompanyModal";
import useModal from "../../hooks/useEditModal";

const MypageTopCo = ({companyLogo}) => {
    const { isPasswordModalOpen,
        handleOpenPasswordModalOpen, handleClosePasswordModalOpen, isEditModalOpen, handleOpenEditModalOpen, handleCloseEditModalOpen } = useModal();

    const genderImg = companyLogo

    const handlePasswordSuccess = () => {
        handleClosePasswordModalOpen();
        handleOpenEditModalOpen();
    }

    return (
        <div className="mypage_top">
            <span className="mypage">마이페이지</span>
            <div className="mypage_top_bar">
                <div className="mypage_company_circle">
                    <img src={genderImg} alt="기업 로고" />
                </div>
            </div>
            <div className="mypage_top_edit">
                <button onClick={handleOpenPasswordModalOpen}>정보 수정</button>
            </div>

            {/* 모달 컴포넌트를 상태 변수에 따라 조건부로 렌더링 */}
            {isPasswordModalOpen && <CheckPassword setIsModalOpen={handleClosePasswordModalOpen} onSuccess={handlePasswordSuccess} />}
            {isEditModalOpen && <MypageCompanyModal setIsModalOpen={handleCloseEditModalOpen} />}
        </div>
    )
}

export default MypageTopCo;
