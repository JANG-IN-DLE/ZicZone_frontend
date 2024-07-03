import React from "react";
import "../styles/Modal.css";
import berry from "../../common/card/assets/berry.png"

const PickModal = ({ isOpen, onClose, userName, onPick }) => {
    if(!isOpen) return null;

    return(
        <div className="modal">
            <div className="company_modal_body" onClick={(e)=>e.stopPropagation()}>
                <div className="header">
                    <div className="circles">
                        <div className="header_circle red"></div>
                        <div className="header_circle yellow"></div>
                        <div className="header_circle green"></div>
                    </div>
                </div>
                <div className="modal_content">
                    <p className="modal_title">{`${userName}님을 Pick하시겠습니까?`} </p>
                    <p className="modal_subtitle">
                        {userName}님의 개인정보와 연락처가 제공됩니다. 귀사에 최종 합격시에는 소정의 수수료가 부과됩니다.
                    </p>
                    <div className="modal_buttons">
                        <button className="cancel_btn" onClick={onClose}>
                            취소
                        </button>
                        {/* 열람을 클릭하면 pickzone/1로 넘어갈 수 있게 수정 필요 */}
                        <button className="open_btn" onClick={onPick}>
                            Pick
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickModal;
