import React from "react";
import "./../../styles/ResumeEtc.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumeEtcInputView from "./../ResumeEtc/ResumeEtcInputView";
import useAddInput from "./../../hooks/useAddInput"

const ResumeEtcView = () => {
    const [inputs, addInput] = useAddInput(<ResumeEtcInputView key={0} />);

    return (
        <div className="resume_etc">
            <div className="resume_etc_title">
                <p className="etc_title">기타사항</p>
                <p className="etc_warning">* 대외활동, 수상경력 등 자신의 능력을 마음껏 보여주세요!</p>
            </div>
            <div className="resume_bar"></div>
            {inputs}
        </div>
    );
}

export default ResumeEtcView;
