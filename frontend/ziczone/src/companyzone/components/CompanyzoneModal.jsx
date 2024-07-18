import React from "react";
// import "../";

const Modal = ({
  isOpen,
  onClose,
  children,
  companyLogo,
  userName,
  userIntro,
  companyCeo,
  companyNum,
  companyAddr,
  email,
  companyYear,
}) => {
  if (!isOpen) return null;

  const backClick = (e) => {
    if (e.target.classList.contains("background")) {
      onClose();
    }
  };

  function formatDate() {
    const [year, month, day] = companyYear.split("-");
    const formattedMonth = parseInt(month, 10);
    const formattedDay = parseInt(day, 10);

    return `${year}년 ${formattedMonth}월 ${formattedDay}일`;
  }

  function formatNum(companyNum) {
    const part1 = companyNum.slice(0, 3);
    const part2 = companyNum.slice(3, 5);
    const part3 = companyNum.slice(5, 10);

    return `${part1}-${part2}-${part3}`;
  }

  function removeAddr(companyAddr) {
    return companyAddr.split("||").join(" ");
  }

  return (
    <div className="background" onClick={backClick}>
      <div className="company_modal">
        <div className="company_modal_body">
          <div className="company_modal_header">
            <div className="circles">
              <div className="header_circle red"></div>
              <div className="header_circle yellow"></div>
              <div className="header_circle green"></div>
            </div>
          </div>
          <div className="header_backcolor"></div>
          <div className="modal_body">
            <div className="modal_com_logo">
              <div className="com_logo_img">
                <img src={companyLogo} alt="컴퍼니 로고" />
              </div>
            </div>
            <div className="modal_com_name">{userName}</div>
            <div className="modal_com_intro">{userIntro}</div>
            <div className="com_info">
              <div className="com_ceo">
                <div className="ceo">대표</div>
                <div className="ceo_content">{companyCeo}</div>
              </div>
              <div className="com_num">
                <div className="num">사업자등록번호</div>
                <div className="num_content">{formatNum(companyNum)}</div>
              </div>
              <div className="com_addr">
                <div className="addr">기업 주소</div>
                <div className="addr_content">{removeAddr(companyAddr)}</div>
              </div>
              <div className="com_email">
                <div className="email">이메일</div>
                <div className="email_content">{email}</div>
              </div>
              <div className="com_year">
                <div className="year">설립 연도</div>
                <div className="year_cotent">{formatDate(companyYear)}</div>
              </div>
              <button className="modal_close_btn" onClick={onClose}>
                닫기
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
