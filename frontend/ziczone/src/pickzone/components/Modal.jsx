import React from "react";
import { useNavigate } from "react-router-dom";
import Modalstyle from "../styles/Modal.module.css";
import berry from "../../common/card/assets/berry.png";
import axios from "axios";
import helpModal from "../../helpzone/assets/helpModal.png";

const Modal = ({
  isOpen,
  onClose,
  userName,
  onOpen,
  selectedCard,
  berryPoint,
  loggedInUserId,
}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  // handleOpen을 실행하면 openCardData를 보낸다.
  const handleOpen = () => {
    if (berryPoint < 500) {
      window.open('/charge', '_blank');
      return;
    }

    const openCardData = {
      sellerId: selectedCard.personalId,
      buyerId: loggedInUserId,
      payHistoryContent: "이력서구매",
      payHistoryDate: new Date().toISOString(),
    };

    axios
      .post("/api/personal/open-card", openCardData)
      .then((response) => {
        if (response.status === 200) {
          onOpen();
        }
      })
      .catch((error) => {
        console.error("Error opening card:", error);
        if (error.response && error.response.data === 400) {
          window.open('/charge', '_blank');
        } else if (error.response && error.response.data) {
          alert(error.response.data);
        }
      });
  };

  return (
    <div className={Modalstyle.select_modal}>
      <img src={helpModal} alt="모달" />
      <div className={Modalstyle.sm_modal_content}>
        <p
          className={Modalstyle.sm_modal_content_1}
        >{`${userName}님의 지원서를 열람하시겠습니까?`}</p>
        <p className={Modalstyle.sm_modal_content_2}>
          *구매 후 해당 회원이 수정, 삭제하기 전까지만 열람 가능합니다.
        </p>
        <div className={Modalstyle.sm_point_info}>
          <div className={Modalstyle.sm_board_point}>
            <img src={berry} alt="베리 아이콘" /> 500
          </div>
          <p>{`나의 베리 : ${berryPoint}베리`} </p>
        </div>
        <div className={Modalstyle.sm_modal_buttons}>
          <button onClick={onClose} className={Modalstyle.cancel_btn}>
            취소
          </button>
          <button onClick={handleOpen} className={Modalstyle.confirm_btn}>
            열람
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
