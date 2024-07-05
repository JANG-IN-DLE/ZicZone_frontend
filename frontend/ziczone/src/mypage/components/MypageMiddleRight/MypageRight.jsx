import React from "react";
import './../../styles/MypageRight.css';
import resume from './../../assets/Resume.png';
import MypageBerryModal from '../MypageModal/MypageBerryModal';
import useModal from "../../hooks/useEditModal";

const MypageRight = ({ berry_point }) => {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

    return (
        <div>
            <div className="mypage_user_right">
                <div className="mypage_right_flex">
                    <div className="mypage_user_resume">
                        <div>내 지원서</div>
                        <div>
                            <img src={resume} alt="Resume" />
                        </div>
                    </div>
                    <div className="mypage_right_flex2">
                        <div className="mypage_user_berry" onClick={handleOpenModal}>
                            <div>나의 베리🫐</div>
                            <div className="mypage_user_point">{berry_point}</div>
                        </div>
                        <div className="mypage_user_charge">
                            <div>베리 충전하기 🫐</div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <MypageBerryModal onClose={handleCloseModal} />}
        </div>
    )
}

export default MypageRight;
