import React from "react";
import helpModal from "../assets/helpModal.png";
import berry from "../../common/card/assets/berry.png";
import "../styles/SelectModal.css";

const SelectModal = ({ isOpen, onClose, onConfirm, userName, corrPoint }) => {
    if (!isOpen) return null;

    return (
        <div className="select_modal">
            <img src={helpModal} alt="모달" />
            <div className="sm_modal_content">
                <p>{`${userName}님의 댓글을 채택하시겠습니까?`}</p>
                <div className="sm_point_info">
                    <div className="sm_board_point">
                        <img src={berry} alt="베리 아이콘" />{`${corrPoint}`}
                    </div>
                </div>
                <div className="sm_modal_buttons">
                    <button onClick={onClose} className="cancel_btn">취소</button>
                    <button onClick={onConfirm} className="confirm_btn">채택</button>
                </div>
            </div>
        </div>
    );
};

export default SelectModal;