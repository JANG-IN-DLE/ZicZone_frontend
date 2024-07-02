import React from "react";
import './../../styles/Mypage_Edit.css'

const MypageUserModal = ({ setIsModalOpen }) => {
    const handleCloseClick = () => {
        setIsModalOpen(false); // 취소 버튼 클릭 시 모달을 닫도록 상태 변경
    };

    return (
        <div className="mypage_user_modal">
            <div className="edit_status_bar">
                <div>
                </div>
            </div>
            <div className="user_edit_container">
                <div className="user_edit_intro">
                    <div className="edit_intro_left">
                        <p>소개 변경</p>
                    </div>
                    <div className="edit_intro_right">
                        <div className="edit_intro_input">
                            <textarea maxLength={60} placeholder="* 최대 60자"></textarea>
                        </div>
                    </div>
                </div>
                <div className="user_edit_career">
                    <div className="edit_career_left">
                        <p>경력</p>
                    </div>
                    <div className="edit_career_right">
                        <div className="edit_career_radio">
                            <label htmlFor=""><input type="radio" value="신입" name="career" />신입</label>
                            <label htmlFor=""><input type="radio" value="경력 1년" name="career" />경력 1년</label>
                            <label htmlFor=""><input type="radio" value="경력 2년" name="career" />경력 2년</label>
                            <label htmlFor=""><input type="radio" value="경력 3년" name="career" />경력 3년</label>
                            <label htmlFor=""><input type="radio" value="경력 4년" name="career" />경력 4년</label>
                            <label htmlFor=""><input type="radio" value="경력 5년 이상" name="career" />경력 5년 이상</label>
                        </div>
                    </div>
                </div>
                <div className="user_edit_password">
                    <div className="edit_password_left">
                        <p>비밀번호 변경</p>
                    </div>
                    <div className="edit_password_right">
                        <div className="edit_password_input">
                            <label htmlFor=""><input type="password" placeholder="현재 비밀번호" /></label>
                            <label htmlFor=""><input type="password" placeholder="변경할 비밀번호(8~16자 영문, 숫자, 특수기호 포함)" /></label>
                            <label htmlFor=""><input type="password" placeholder="비밀번호 확인" /></label>
                        </div>
                    </div>
                </div>
                <div className="user_edit_toggle">
                    <div className="edit_toggle_left">
                        <p>이력서 공개 여부</p>
                    </div>
                    <div className="edit_toggle_right">
                        <div className="edit_toggle_btn">
                            <div>
                                <span>개인</span>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div>
                                <span>기업</span>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="edit_toggle_warning">
                            <span>* 이력서 조회 허용할 경우, 개인정보가 노출될 수 있습니다.</span>
                        </div>
                    </div>
                </div>
                <div className="user_edit_btn">
                    <button className="edit_save_btn">저장</button>
                    <button className="edit_cancel_btn" onClick={handleCloseClick}>취소</button>
                </div>
            </div>
        </div>
    )
}

export default MypageUserModal;
