import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import '../../styles/MypageEdit.css';
import company_edit from './../../assets/Logo_Edit.png';
import { FormProvider } from './../../../join/components/FormContext';
import AddressInput from './AddressInput';

const MypageCompanyModal = ({ setIsModalOpen }) => {
    const handleCloseClick = () => {
        setIsModalOpen(false);
    };

    const userId = localStorage.getItem('userId');
    const [logo, setLogo] = useState(null);  // 변경: 초기값을 null로 설정
    const [userName, setUserName] = useState('');
    const [intro, setIntro] = useState('');
    const [addr, setAddr] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/company/${userId}`);
                const { user, companyAddr, companyLogoUrl } = response.data;
                setUserName(user.userName);
                setIntro(user.userIntro);
                setAddr(companyAddr);
                setLogo(companyLogoUrl);
            } catch (error) {
                console.error("fetchData 오류: ", error);
            }
        };

        fetchData();
    }, [userId]);

    const updateAddress = useCallback((newAddress) => {
        setAddr(newAddress);
    }, []);

    const handleSaveClick = async () => {
        const payload = {
            userName,
            userIntro: intro,
            companyAddr: addr,
            currentPassword,
            ...(changePassword && { changePassword })
        };

        const formData = new FormData();
        formData.append('payload', JSON.stringify(payload));
        if (logo) {
            formData.append('logoFile', logo);  // 파일 객체를 추가
        }

        // FormData의 내용을 콘솔에 출력
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const response = await axios.put(`/api/company/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('response: ', response.data);
            alert("수정사항 저장되었습니다.");
            setIsModalOpen(false);
        } catch (error) {
            console.error("업데이트 오류: ", error);
        }
    };

    const fileInputRef = useRef(null);

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLogo(file);  // 변경: 파일 객체를 상태에 저장
        }
    };

    const handleEditButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <FormProvider formType="company">
            <div className="mypage_company_modal">
                <div className="edit_status_bar">
                    <div></div>
                </div>
                <div className="company_edit_container">
                    <div className="company_edit_logo">
                        <div className="edit_logo_circle">
                            {logo && typeof logo === 'string' && <img src={logo} alt="" />}
                            {logo && logo instanceof File && <img src={URL.createObjectURL(logo)} alt="" />} {/* 파일 객체를 미리보기 */}
                            <div className="edit_logo_button" onClick={handleEditButtonClick}>
                                <img src={company_edit} alt="" />
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleLogoUpload}
                                style={{ display: 'none' }}
                                accept="image/*"
                            />
                        </div>
                    </div>
                    <div className="company_edit_title">
                        <div className="edit_title_left">
                            <p>기업 이름</p>
                        </div>
                        <div className="edit_title_right">
                            <div className="edit_title_input">
                                <textarea
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="company_edit_intro">
                        <div className="edit_intro_left">
                            <p>기업 소개</p>
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
                    <div className="company_edit_addr">
                        <AddressInput initialAddress={addr} updateAddress={updateAddress} />
                    </div>
                    <div className="company_edit_password">
                        <div className="edit_password_left">
                            <p>비밀번호 변경</p>
                        </div>
                        <div className="edit_password_right">
                            <div className="edit_password_input">
                                <label><input type="password" placeholder="현재 비밀번호(* 필수)" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /></label>
                                <label><input type="password" placeholder="변경할 비밀번호(8~16자 영문, 숫자, 특수기호 포함)" value={changePassword} onChange={(e) => setChangePassword(e.target.value)} /></label>
                                <label><input type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label>
                            </div>
                        </div>
                    </div>
                    <div className="user_edit_btn">
                        <button className="edit_save_btn" onClick={handleSaveClick}>저장</button>
                        <button className="edit_cancel_btn" onClick={handleCloseClick}>취소</button>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
};

export default MypageCompanyModal;
