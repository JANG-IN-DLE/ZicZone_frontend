import "../styles/JoinSelect.css";
import JoinSelectbtn from "./buttonComponent/JoinSelectbtn"

const JoinSelect = () => {

  const companytag = {
    title: "기업 회원",
    explain: "인재를 찾고 계신가요?",
    onClick: () => {}
  };

  const personaltag = {
    title: "개인 회원",
    explain: "직존에서 취뽀 어쩌궁,,",
    onClick: () => {}
  };

  return (
    <div className="container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} />
        <div className="logo_t">직<span>존</span> 회원가입 페이지입니다.</div>
        <div className="card">
            <JoinSelectbtn {...companytag}/>
            <JoinSelectbtn {...personaltag}/>
        </div>
    </div>
  );
}
  export default JoinSelect;
