
const CompanyCard = ({ onCardClick, companyLogo, userName, userIntro }) => {
  return (
    <>
      <div className="company_card" onClick={onCardClick}>
        <div className="company_img">
          <img src={companyLogo} alt="로고" />
        </div>
        <div className="company_info">
          <div className="company_name">{userName}</div>
          <div className="company_intro">{userIntro}</div>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
