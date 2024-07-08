import React from "react";
import "../styles/Modal.css";
import berry from "../../common/card/assets/berry.png"
import axios from "axios";

const Modal = ({ isOpen, onClose, userName, onOpen, selectedCard}) => {
    if(!isOpen) return null;
    // 일단 임시로 로그인한 사람 1
    const loggedInPersonalId = 1;

    // handleOpen을 실행하면 openCardData를 보낸다.
    const handleOpen = () => {
        const openCardData = {
            sellerId: selectedCard.personalId,
            buyerId: loggedInPersonalId,
            payHistoryContent: "이력서 조회",
            payHistoryDate : new Date().toISOString()
        };

        axios.post('/api/open-card', openCardData)
            .then(response => {
                if(response.status === 200){
                    onOpen();
                }
                // pay_history에 buyerId와 sellerId가 존재하면 리다이렉트
                else if(response.status === 303) {
                    alert("이미 결제한 이력서입니다.")
                    setTimeout(() => {
                        window.location.href = response.headers.location;
                    }, 3000);
                    
                }
            })
            .catch(error => {
                console.error("Error opening card:", error);
                if(error.response && error.response.data){
                    alert(error.response.data);
                }
            });
    };

    return(
        <div className="modal">
            <div className="company_modal_body" onClick={(e)=>e.stopPropagation()}>
                <div className="modal_header">
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
                        <button className="open_btn" onClick={handleOpen}>
                            열람
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
