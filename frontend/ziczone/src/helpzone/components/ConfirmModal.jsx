import React from "react";
import helpModal from "../assets/helpModal.png";
import berry from "../../common/card/assets/berry.png";
import "../styles/ConfirmModal.css";

const ConfirmModal = ({ isOpen, onClose, onConfirm, userName, corrPoint, mode, userPoint }) => {
    if (!isOpen) return null;

    const isDeleteMode = mode === 'delete';
    const isLoginMode = mode === 'login';
    const isBerryCheckMode = mode === 'berryCheck';

    return (
        <div className="select_modal">
            <img src={helpModal} alt="모달" />
            <div className="sm_modal_content">
                {isDeleteMode ? (
                    <p>정말로 삭제하시겠습니까?</p>
                ) : isLoginMode ? (
                    <p>댓글을 작성하시려면<br /> 로그인이 필요합니다.</p>
                ) : isBerryCheckMode ? (
                    <p>글을 쓰려면<br /> 100베리이상 필요합니다.</p>
                ) : (
                    <p>{`${userName}님의 댓글을 채택하시겠습니까?`}</p>
                )}
                <div className="sm_point_info">
                    {isDeleteMode ? (
                        <p>게시물 등록시 사용한 베리는 환불되지 않습니다.</p>
                    ) : isLoginMode ? null
                        : isBerryCheckMode ? 
                        <div className="sm_board_point">
                            <img src={berry} alt="베리 아이콘" />{`${userPoint ?? 0}`}
                        </div> :
                            (
                                <div className="sm_board_point">
                                    <img src={berry} alt="베리 아이콘" />{`${corrPoint}`}
                                </div>
                            )}
                </div>
                <div className="sm_modal_buttons">
                    <button onClick={onClose} className="cancel_btn">취소</button>
                    {isDeleteMode ? (
                        <button onClick={onConfirm} className="confirm_btn">삭제</button>
                    ) : isLoginMode ? (
                        <button onClick={() => onConfirm('/login')} className="confirm_btn">로그인하러가기</button>
                    ) : isBerryCheckMode ? (
                        <button onClick={() => onConfirm('/charge')} className="confirm_btn">충전하러가기</button>
                    ) : (
                        <button onClick={onConfirm} className="confirm_btn">채택</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;