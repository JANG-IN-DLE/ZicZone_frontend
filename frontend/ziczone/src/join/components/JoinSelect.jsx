import "../styles/JoinSelect.css";
import JoinSelectbtn from "./buttonComponent/JoinSelectbtn";
import { useNavigate } from "react-router-dom";
import Layout from "../../common/layout/layout";

const JoinSelect = () => {
  const navigate = useNavigate();

  const companytag = {
    title: "기업 회원",
    explain: "인재를 찾고 계신가요?",
    onClick: () => navigate("/signup-com"),
  };

  const personaltag = {
    title: "개인 회원",
    explain: "취업 준비 중이신가요?",
    onClick: () => navigate("/signup-per"),
  };

  return (
    <Layout>
      <div className="container_signup_select">
        <img
          className="logo_signup"
          src={`${process.env.PUBLIC_URL}/logo.png`}
        />
        <div className="logo_t_signup">
          직<span>존</span> 회원가입 페이지입니다.
        </div>
        <div className="card_signup">
          <JoinSelectbtn {...companytag} />
          <JoinSelectbtn {...personaltag} />
        </div>
      </div>
    </Layout>
  );
};
export default JoinSelect;
