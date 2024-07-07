import React from "react";
import './../../styles/MypageTop.css'
import MypageUserModal from "../MypageModal/MypageUserModal";
import useModal from "../../hooks/useEditModal";
import maleImg from "../../../common/card/assets/personal_m_image.png"
import femaleImg from "../../../common/card/assets/personal_f_image.png"

const MypageTop = ({gender}) => {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

    const genderImg = gender === 'MALE' ? maleImg : femaleImg;

    return (
        <div className="mypage_top">
            <span className="mypage">마이페이지</span>
            <div className="mypage_top_bar">
                <div className="mypage_top_circle">
                    <img src={genderImg} alt="{gender}" />
                </div>
            </div>
            <div className="mypage_top_edit">
                <button onClick={handleOpenModal}>정보 수정</button>
            </div>

            {/* 모달 컴포넌트를 상태 변수에 따라 조건부로 렌더링 */}
            {isModalOpen && <MypageUserModal setIsModalOpen={handleCloseModal} />}
        </div>
    )
}

export default MypageTop;
