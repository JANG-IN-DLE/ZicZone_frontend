import React, { useEffect, useState } from "react";
import axios from 'axios';
import './../../styles/MypageEdit.css'
import edit_modal from './../../assets/Personal_Edit.png'

const MypageUserModal = ({ setIsModalOpen }) => {
    const handleCloseClick = () => {
        setIsModalOpen(false);
    };

    const userId = localStorage.getItem('userId')
    const [intro, setIntro] = useState("");
    const [career, setCareer] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [changePassword, setChangePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [personalVisible, setPersonalVisible] = useState(false);
    const [companyVisible, setCompanyVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/personal/${userId}`);
                const { personalVisible, companyVisible, personalCareer, user } = response.data;
                setPersonalVisible(personalVisible);
                setCompanyVisible(companyVisible);
                setIntro(user.userIntro);
                setCareer(personalCareer);
            } catch (error) {
                console.error("fetchData 오류: ", error);
            }
        };

        fetchData();
    }, [userId]);

    const handleSaveClick = async () => {
        try {
            const updateData = {
                intro: intro,
                personalCareer: career,
                personalVisible,
                companyVisible,
                currentPassword,
                ...(changePassword && { changePassword })
            };

            console.log("Update data:", updateData); // 콘솔 로그 추가

            await axios.put(`/api/personal/${userId}`, updateData);
            setIsModalOpen(false);
        } catch (error) {
            console.error("업데이트 오류: ", error);
        }
    };

    return (
        <div className="mypage_user_modal">
            <div className="edit_status_bar">
                <div></div>
            </div>
            <div className="user_edit_container">
                <div className="user_edit_intro">
                    <div className="edit_intro_left">
                        <p>소개 변경</p>
                    </div>
                    <div className="edit_intro_right">
                        <div className="edit_intro_input">
                            <textarea
                                maxLength={60}
                                placeholder="* 최대 60자"
                                value={intro}
                                onChange={(e) => setIntro(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="user_edit_career">
                    <div className="edit_career_left">
                        <p>경력</p>
                    </div>
                    <div className="edit_career_right">
                        <div className="edit_career_radio">
                            <label><input type="radio" value="신입" name="career" checked={career === "신입"} onChange={(e) => setCareer(e.target.value)} />신입</label>
                            <label><input type="radio" value="경력 1년" name="career" checked={career === "경력 1년"} onChange={(e) => setCareer(e.target.value)} />경력 1년</label>
                            <label><input type="radio" value="경력 2년" name="career" checked={career === "경력 2년"} onChange={(e) => setCareer(e.target.value)} />경력 2년</label>
                            <label><input type="radio" value="경력 3년" name="career" checked={career === "경력 3년"} onChange={(e) => setCareer(e.target.value)} />경력 3년</label>
                            <label><input type="radio" value="경력 4년" name="career" checked={career === "경력 4년"} onChange={(e) => setCareer(e.target.value)} />경력 4년</label>
                            <label><input type="radio" value="경력 5년 이상" name="career" checked={career === "경력 5년 이상"} onChange={(e) => setCareer(e.target.value)} />경력 5년 이상</label>
                        </div>
                    </div>
                </div>
                <div className="user_edit_password">
                    <div className="edit_password_left">
                        <p>비밀번호 변경</p>
                    </div>
                    <div className="edit_password_right">
                        <div className="edit_password_input">
                            <label><input type="password" placeholder="현재 비밀번호" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /></label>
                            <label><input type="password" placeholder="변경할 비밀번호(8~16자 영문, 숫자, 특수기호 포함)" value={changePassword} onChange={(e) => setChangePassword(e.target.value)} /></label>
                            <label><input type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label>
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
                                    <input
                                        type="checkbox"
                                        checked={personalVisible}
                                        onChange={(e) => setPersonalVisible(e.target.checked)}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div>
                                <span>기업</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={companyVisible}
                                        onChange={(e) => setCompanyVisible(e.target.checked)}
                                    />
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
                    <button className="edit_save_btn" onClick={handleSaveClick}>저장</button>
                    <button className="edit_cancel_btn" onClick={handleCloseClick}>취소</button>
                </div>
            </div>
        </div>
    )
}

export default MypageUserModal;
