import React from "react";
import PickModalstyle from "../styles/PickModal.module.css";

const PickModal = ({ isOpen, onClose, userName, onPick }) => {
    if(!isOpen) return null;

    return(
        <div className={PickModalstyle.modal}>
            <div className={PickModalstyle.company_modal_body} onClick={(e)=>e.stopPropagation()}>
                <div className={PickModalstyle.pick_modal_header}>
                    <div className={PickModalstyle.circles}>
                        <div className={PickModalstyle.header_circle_red}></div>
                        <div className={PickModalstyle.header_circle_yellow}></div>
                        <div className={PickModalstyle.header_circle_green}></div>
                    </div>
                </div>
                <div className={PickModalstyle.modal_content}>
                    <p className={PickModalstyle.modal_title}>{`${userName}님을 Pick하시겠습니까?`} </p>
                    <p className={PickModalstyle.modal_subtitle}>
                        {userName}님의 개인정보와 연락처가 제공됩니다.<br/>
                        귀사에 최종 합격시에는 소정의 수수료가 부과됩니다.
                    </p>
                    <div className={PickModalstyle.modal_buttons}>
                        {/* 열람을 클릭하면 pickzone/1로 넘어갈 수 있게 수정 필요 */}
                        <button className={PickModalstyle.open_btn} onClick={onPick}>
                            Pick
                        </button>
                        <button className={PickModalstyle.cancel_btn} onClick={onClose}>
                            취소
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickModal;
