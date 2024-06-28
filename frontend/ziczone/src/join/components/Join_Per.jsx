import "../styles/Join_Per.css"
import CareerGenderInput from "./inputComponent/CareerGenderInput";
import EmailInput from "./inputComponent/EmailInput";
import IntroInput from "./inputComponent/IntroInput";
import JobInput from "./inputComponent/JobInput";
import NameInput from "./inputComponent/NameInput";
import PasswordInput from "./inputComponent/PasswordInput";
import StackInput from "./inputComponent/StackInput";
import JoinButton from "./inputComponent/joinbutton";

const JoinPersonal = () => {
  return (
    <div className="container">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} alt="직존 로고" />
        <div className="logo_text">개인 회원가입 페이지입니다.</div>
            <div className="personal_form">
              <NameInput />
              <EmailInput />
              <PasswordInput label="비밀번호" />
              <PasswordInput label="비밀번호 확인" />
              <IntroInput />
              <CareerGenderInput/>
              <JobInput/>
              <StackInput/>
            </div>
        <JoinButton/>
    </div>
  );
}

export default JoinPersonal;
