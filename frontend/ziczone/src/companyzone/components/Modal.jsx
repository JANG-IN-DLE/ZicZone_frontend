import React from "react";
// import "../";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="company_modal_body" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <div className="circles">
            <div className="header_circle red"></div>
            <div className="header_circle yellow"></div>
            <div className="header_circle green"></div>
          </div>
        </div>
        <div className="header_backcolor"></div>
        <div className="modal_body">
          <div className="modal_com_logo">
            <div className="com_logo_img"></div>
          </div>
          <div className="modal_com_name">토스페이먼츠</div>
          <div className="modal_com_intro">
            공인인증서를 스마트폰에 넣는 것조차 매우 번거로웠으며, 보안카드
            번호를 착각해 3회 이상 잘못 입력하였을 경우 은행에 방문해 보안카드
            재발급 절차를 밟아야 했다. 한마디로 사용자 갠차나띵링링링링
            갠차나띵링링링링
          </div>
          <div className="com_info">
            <div className="com_ceo">
              <div className="ceo">대표</div>
              <div className="ceo_content">김똥개</div>
            </div>
            <div className="com_num">
              <div className="num">사업자등록번호</div>
              <div className="num_content">14123</div>
            </div>
            <div className="com_addr">
              <div className="addr">기업 주소</div>
              <div className="addr_content">
                어쩌구 1234호 9341032호 역삼동 어쩌구 저쩌구
              </div>
            </div>
            <div className="com_email">
              <div className="email">이메일</div>
              <div className="email_content">ㅇㄴ러닝런@naver.com</div>
            </div>
            <div className="com_year">
              <div className="year">설립 연도</div>
              <div className="year_cotent">2012년 13월 42일</div>
            </div>
            <button className="close_btn" onClick={onClose}>
              닫기
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
