import React, { useState, useEffect } from "react";
import CompanyHeader from "./CompanyHeader";
import CompanyCard from "./CompanyCard";
import CompanyzoneModal from "./CompanyzoneModal";
import "../styles/CompanyMain.css";
import axios from "axios";
import Layout from "../../common/layout/layout";
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";
import config from "../../config";

const CompanyzoneMain = () => {
  const [openModalInfo, setOpenModalInfo] = useState(null);
  const [companyData, setCompanyData] = useState([]);

  const api = axios.create({
    baseURL: config.baseURL
  });

  // 클릭했을때 인덱스 변수 받아서 클릭된 카드 인덱스를 받음
  const handleCardClick = (index) => {
    setOpenModalInfo(companyData[index]);
  };

  const handleCloseModal = () => {
    setOpenModalInfo(null);
  };

  useEffect(() => {
    api
      .get("/api/companyzone")
      .then((res) => {
        setCompanyData(res.data);
      })
      .catch((error) => {
        console.error("컴퍼니존 에러 : ", error);
      });
  }, []);

  return (
    <Layout>
      <div className="com_main_container">
        <ScrollToTop />
        <CompanyHeader />
        <div className="company_container">
          {companyData.slice(2).map((company, index) => (
            <CompanyCard
              key={index}
              companyLogo={company.companyLogoUrl}
              userName={company.user.userName}
              userIntro={company.user.userIntro}
              // 온클릭 => 매핑중인 인덱스 요소
              onCardClick={() => handleCardClick(index + 2)}
            />
          ))}
          {/* openModalInfo가 존재할때 렌더링  */}
          {openModalInfo && (
            <CompanyzoneModal
              // 열린상태
              isOpen={true}
              // 모달 닫기 이벤트 핸들러 설정
              onClose={handleCloseModal}
              companyLogo={openModalInfo.companyLogoUrl}
              userName={openModalInfo.user.userName}
              userIntro={openModalInfo.user.userIntro}
              companyCeo={openModalInfo.companyCeo}
              companyNum={openModalInfo.companyNum}
              companyAddr={openModalInfo.companyAddr}
              email={openModalInfo.user.email}
              companyYear={openModalInfo.companyYear}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CompanyzoneMain;
