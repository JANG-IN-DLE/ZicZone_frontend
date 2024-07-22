import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/MainMain.css"; // CSS 파일 임포트

const CompanySilde = () => {
  const [logoImgs, setLogoImgs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/main/companylogolist")
      .then((res) => {
        // 필터 사용해서 0, 1 인덱스 제외
        // 현재 요소가 인덱스 0이 아니고 1도 아닌경우 트루 반환
        const filteredLogos = res.data.filter(
          (_, index) => index !== 0 && index !== 1
        ); // 인덱스 0과 1을 제외한 필터링
        setLogoImgs(filteredLogos);
        console.log("컴퍼니 로고", res);
      })
      .catch((error) => {
        console.error("companyErr", error);
      });
  }, []);

  return (
    <div className="company_slide_container">
      <ul className="boxes">
        {/* 상태 변수 logoImgs의 처음 6개의 이미지를 반복 */}
        {/* array.slice(startIndex, endIndex) <<로 사용됨 인덱스 필수로 기입
            앞을 짜르고 뒤는 다 사용하고싶다면 그냥 slice(앞에 자를 인덱스 수)로 사용
            ex) slice(2) => 인덱스 2부터 끝까지 */}
        {logoImgs.slice(9).map((logo, index) => (
          <li key={index}>
            <img className="logo_img" src={logo} alt={`로고${index + 8}`} />
          </li>
        ))}
      </ul>
      <ul className="boxes list2">
        {logoImgs.slice(9).map((logo, index) => (
          <li key={index + logoImgs.length}>
            <img className="logo_img" src={logo} alt={`로고${index + 17}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanySilde;
