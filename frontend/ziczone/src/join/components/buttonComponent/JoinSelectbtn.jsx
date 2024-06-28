import "../../styles/JoinCom/JoinSelectbtn.css";

import companyimg from "../../assets/company.png"
import personalimg from "../../assets/personal.png"


const JoinSelect = ({title, explain, onClick}) => {
    const imgicon = title === "기업 회원" ? companyimg : personalimg;

  return (
    <div className="join" onClick={onClick}>
        <p className="title">{title}</p>
        <img src={imgicon} alt="" />
        <p className="explain">{explain}</p>
    </div>
  );
}

export default JoinSelect;
