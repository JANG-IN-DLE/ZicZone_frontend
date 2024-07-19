import React from "react";
import PickModalstyle from "../styles/PickModal.module.css";
import helpModal from "../../helpzone/assets/helpModal.png";

const PickModal = ({ isOpen, onClose, userName, onPick }) => {
    if(!isOpen) return null;

    return(

        <div className={PickModalstyle.select_modal}>
        <img src={helpModal} alt="모달" />
        <div className={PickModalstyle.sm_modal_content}>
            <p className={PickModalstyle.sm_modal_content_1}>{`${userName}님을 Pick하시겠습니까?`}</p>
            <p className={PickModalstyle.sm_modal_content_2}>{`${userName}님의 개인정보와 연락처가 제공됩니다.`}<br/>
                귀사에 최종 합격시에는 소정의 수수료가 부과됩니다.
            </p>
            <div className={PickModalstyle.sm_modal_buttons}>
                <button onClick={onPick} className={PickModalstyle.confirm_btn}>Pick</button>
                <button onClick={onClose} className={PickModalstyle.cancel_btn}>취소</button>
            </div>
        </div>
    </div>
    )
}

export default PickModal;
