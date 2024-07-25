import React, { useState } from "react";
import "../styles/main.css";
import chargeimg from "../../payment/chargeimg.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChargeMain = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const navigate = useNavigate();

  const batteries = [
    { id: 1, amount: 100, price: 1000 },
    { id: 2, amount: 300, price: 3000 },
    { id: 3, amount: 500, price: 5000 },
    { id: 4, amount: 1000, price: 10000 },
  ];

  // 'selectedAmount' 상태를 'price'로 설정
  // 매개변수 프리이스는 클릭된 충전 가격을 받아서 아래에 온클릭에서 전달
  // setSelectedAmount(price)는 useState 훅에서 제공하는 함수
  // selectedAmount 상태를 업데이트, 클릭된 충전 옵션의 가격(price)으로 selectedAmount 값을 설정
  const handleBatteryClick = (price) => {
    setSelectedAmount(price);
  };

  const openTossPage = (url) => {
    if (selectedAmount > 0) {
      navigate(`/toss?amount=${selectedAmount}`);
    } else {
      alert("충전할 금액을 선택해주세요.");
    }
  }

  return (
    <div className="main_container">
      <div className="charge_main_container">
        <div className="charge_left">
          <div className="charege_zone_text">
            <span>
              충<span className="text_blue">Zone</span>
            </span>
            <div className="image">
              <img src={chargeimg} alt="이미지" />
            </div>
          </div>
          <div className="charge_amount">
            <span>결제 금액</span>
            <div className="charge_amount_select">
              {/* toLocaleString()은 천단위를 콤마로 끊어줌 */}
              {selectedAmount.toLocaleString()} <span>원</span>
            </div>
          </div>
        </div>
        <div className="charge_right">
          <div className="charge_right_container">
            <div className="charge_select">
              {/* 맵으로 배열 돌면서 충전 배터리 생성
             handleBatteryClick 호출해서 상태 업데이트 
             
             selected */}
              {batteries.map((battery) => (
                <div
                  key={battery.id}
                  // 조건문 사용으로 selectedAmount === battery.price(선택된 충전 금액과 현재 배터리의 가격이 일치할 때)
                  // 셀렉티드 클래스 추가
                  className={`battery ${selectedAmount === battery.price ? "selected" : ""
                    }`}
                  // 클릭 이벤트, 배터리 클릭시 handleBatteryClick 호출
                  // battery.price로 인자 전달, 선택된 충전 금액으로 설정
                  onClick={() => handleBatteryClick(battery.price)}
                >
                  <div className="battery_top"></div>
                  <div className="berry">{battery.amount}베리</div>
                  <div className="won">{battery.price.toLocaleString()}원</div>
                </div>
              ))}
            </div>
            <div className="Conditions">
              <div className="Conditions_left">이용약관</div>
              <div className="Conditions_right">
                <div className="text_area">
                  전자결제서비스 이용 약관 제 1 장 [총 칙] 제 1 조 (목적) 이
                  약관은 “회사”가 “고객사” 에게 제공하는 “서비스”의 이용조건 및
                  절차에 관한 사항을 규정하는데 있습니다. 제 2 조 (용어의 정의)
                  이 계약에 공통적으로 적용되는 용어의 정의는 다음과 같습니다. ①
                  서비스 : “고객사”가 전자적 방법으로 “이용자”에게 “상품”을
                  판매하거나 제공할 때 “이용자”가 “결제기관”으로부터 발급받은
                  “결제수단”을 “회사”와 “결제기관”과의 계약 등에 따라 “회사”가
                  제공하는 시스템을 이용하여 사용·조회·관리할 수 있도록 하고,
                  “결제정보”를 송·수신하거나 “거래승인”·”매입”·”대금정산”을
                  대행하거나 매개하는 행위 또는 이에 관련된 행위 일체를 말하며,
                  다음 각 호의 서비스 및 기타 부가서비스를 포함합니다.
                  전자결제서비스 이용 약관 제 1 장 [총 칙] 제 1 조 (목적) 이
                  약관은 “회사”가 “고객사” 에게 제공하는 “서비스”의 이용조건 및
                  절차에 관한 사항을 규정하는데 있습니다. 제 2 조 (용어의 정의)
                  이 계약에 공통적으로 적용되는 용어의 정의는 다음과 같습니다. ①
                  서비스 : “고객사”가 전자적 방법으로 “이용자”에게 “상품”을
                  판매하거나 제공할 때 “이용자”가 “결제기관”으로부터 발급받은
                  “결제수단”을 “회사”와 “결제기관”과의 계약 등에 따라 “회사”가
                  제공하는 시스템을 이용하여 사용·조회·관리할 수 있도록 하고,
                  “결제정보”를 송·수신하거나 “거래승인”·”매입”·”대금정산”을
                  대행하거나 매개하는 행위 또는 이에 관련된 행위 일체를 말하며,
                  다음 각 호의 서비스 및 기타 부가서비스를 포함합니다.
                </div>
              </div>
            </div>
            <div className="precautions">
              <div className="precautions_left">주의 사항</div>
              <div className="precautions_right">
                <div className="text_area">
                  포인트 충전은 Toss 앱이 설치되어 있어야만 결제 가능합니다.{" "}
                  <br />
                  Toss서비스 이용을 위해서는 해당 서비스의 회원가입이
                  필요합니다.
                  <br />
                  Toss는 휴대폰에서 간편하게 송금할 수 있는 (주)비바리퍼블리카의
                  서비스 입니다.
                </div>
              </div>
            </div>
            {/* <Link to={"/toss"}> */}
            <div className="payment_btn_container"
              onClick={() => openTossPage("/toss")}
              disabled={selectedAmount === 0}
            >
              <button className="payment_btn">결제하기</button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargeMain;
