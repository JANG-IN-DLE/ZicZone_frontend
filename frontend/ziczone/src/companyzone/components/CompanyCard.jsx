import { useDebugValue, useState } from "react";
import com_logo1 from "../../main/company_logo/img_1.svg";

const CompanyCard = ({ onCardClick }) => {
  return (
    <>
      <div className="company_card" onClick={onCardClick}>
        <div className="company_img">
          <img src={com_logo1} alt="로고1" />
        </div>
        <div className="company_info">
          <div className="company_name">Google</div>
          <div className="company_intro">
            공인인증서를 스마트폰에 넣는 것조차 매우 번거로웠으며, 보안카드
            번호를 착각해 3회 이상 잘못 입력하였을 경우 은행에 방문해 보안카드
            재발급 절차를 밟아야 했다. 한마디로 사용자 갠차나띵링링링링
            갠차나띵링링링링
          </div>
          {/* 유저 인트로로 가지고 와야함 */}
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
