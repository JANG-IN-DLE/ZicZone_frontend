import React, { useState, useEffect } from "react";
import './../../styles/MypageTop.css'
import MypageUserModal from "../MypageModal/MypageUserModal";
import CheckPassword from "../MypageModal/CheckPassword";
import useModal from "../../hooks/useEditModal";
import maleImg from "../../../common/card/assets/personal_m_image.png";
import femaleImg from "../../../common/card/assets/personal_f_image.png";

const MypageTop = ({ gender }) => {
    const { isPasswordModalOpen, handleOpenPasswordModalOpen, handleClosePasswordModalOpen, isEditModalOpen, handleOpenEditModalOpen, handleCloseEditModalOpen } = useModal();
    const [genderImg, setGenderImg] = useState(null); // 초기 상태를 null로 설정

    useEffect(() => {
        if (gender) { // gender가 유효한 경우에만 실행
            // 데이터 로드 후 성별에 따라 이미지를 설정
            if (gender === 'FEMALE') {
                setGenderImg(femaleImg);
            } else if (gender === 'MALE') {
                setGenderImg(maleImg);
            }
        }
    }, [gender]); // gender가 변경될 때마다 실행

    const handlePasswordSuccess = () => {
        handleClosePasswordModalOpen();
        handleOpenEditModalOpen();
    };

    return (
        <div className="mypage_top">
            <span className="mypage">마이페이지</span>
            <div className="mypage_top_bar">
                <div className="mypage_top_circle">
                    {genderImg ? (
                        <img src={genderImg} alt={gender} /> // 데이터가 로드된 후에만 이미지 표시
                    ) : (
                        <div>Loading...</div> // 데이터 로드 전 로딩 문구 표시
                    )}
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
