import React from "react";
import "../styles/Modal.css";
import berry from "../../common/card/assets/berry.png"

const Modal = ({ isOpen, onClose, userName, onOpen }) => {
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
                    <p className="modal_title">{`${userName}님의 지원서를 열람하시겠습니까?`} </p>
                    <p className="modal_subtitle">
                        *구매 후 해당 회원이 수정, 삭제하기 전까지만 열람 가능합니다.
                    </p>
                    <div className="modal_points">
                        <img src={berry} alt="Berry" />50
                    </div>
                    {/* 나의 베리 값 나중에 수정 필요 */}
                    <p className="modal_user_points">나의 베리: 420</p>
                    <div className="modal_buttons">
                        <button className="cancel_btn" onClick={onClose}>
                            취소
                        </button>
                        {/* 열람을 클릭하면 pickzone/1로 넘어갈 수 있게 수정 필요 */}
                        <button className="open_btn" onClick={onOpen}>
                            열람
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
