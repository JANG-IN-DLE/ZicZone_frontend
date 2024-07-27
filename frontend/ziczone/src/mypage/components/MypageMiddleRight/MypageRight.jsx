import React from "react";
import './../../styles/MypageRight.css';
import resume from './../../assets/Resume.png';
import MypageBerryModal from '../MypageModal/MypageBerryModal';
import useModal from "../../hooks/useBerryModal";
import { Link } from "react-router-dom";

const MypageRight = ({ berry_point }) => {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

    const userId = localStorage.getItem('userId')

    return (
        <div>
            <div className="mypage_user_right">
                <div className="mypage_right_flex">
                    <Link to={`/personal/resumes/${userId}`} style={{textDecoration: "none"}}>
                    <div className="mypage_user_resume">
                        <div style={{color: "#5d5d5d"}}>내 지원서</div>
                        <div>
                            <img src={resume} alt="Resume" />
                        </div>
                    </div>
                    </Link>
                    <div className="mypage_right_flex2">
                        <div className="mypage_user_berry" onClick={handleOpenModal}>
                            <div>나의 베리🫐</div>
                            <div className="mypage_user_point">{berry_point}</div>
                        </div>
                        <Link to="/charge" target="_blank" style={{textDecoration: "none"}}>
                        <div className="mypage_user_charge">
                            <div>베리 충전하기 🫐</div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            {isModalOpen && <MypageBerryModal onClose={handleCloseModal} />}
        </div>
    )
}

export default MypageRight;
