import React from "react";
import "./../../../../resume/styles/ResumeEtc.css"
import ResumeEtcInputView from "./ResumeEtcInputView";

const ResumeEtcView = ({ etcs }) => {
    return (
        <div className="resume_etc">
            <div className="resume_etc_title">
                <p className="etc_title">기타사항</p>
                <p className="etc_warning">* 대외활동, 수상경력 등 자신의 능력을 마음껏 보여주세요!</p>
            </div>
            <div className="resume_bar"></div>
            {etcs.map((etc, index) => {
                const [ content, date ] = etc.split(',');
                return (
                    <ResumeEtcInputView
                        key={index}
                        content={content}
                        date={date}
                    />
                );
            })}
        </div>
    );
};

export default ResumeEtcView;