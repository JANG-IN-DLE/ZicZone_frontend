import React from "react";

const ResumeEtcInputView = ({ etcDate, etcContent }) => {
    return (
        <div className="resume_etc_input">
            <div className="resume_circle"></div>
            <div className="etc_date">
                <p>{etcDate}</p>
            </div>
            <div className="etc_history">
                <p>{etcContent}</p>
            </div>
        </div>
    );
}

export default ResumeEtcInputView;
