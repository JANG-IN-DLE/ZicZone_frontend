import React from "react";
import './../../styles/Mypage_Top.css'
import Mypage_User_Modal from "../Mypage_Modal/MypageUserModal";
import useModal from "../../hooks/Use_Modal";  // 커스텀 훅을 임포트

const MypageTop = () => {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();  // 훅 사용

    return (
        <div className="mypage_top">
            <span className="mypage">마이페이지</span>
            <div className="mypage_top_bar">
                <div className="mypage_top_circle">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="mypage_top_edit">
                <button onClick={handleOpenModal}>정보 수정</button>
            </div>

            {/* 모달 컴포넌트를 상태 변수에 따라 조건부로 렌더링 */}
            {isModalOpen && <Mypage_User_Modal setIsModalOpen={handleCloseModal} />}
        </div>
    )
}

export default MypageTop;
