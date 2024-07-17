import React from "react";

const ResumeEtcInputView = ( { content, date }) => {

    return (
        <div className="resume_etc_input">
            <div className="resume_circle"></div>
            <div className="etc_date">
                <p>{date}</p>
            </div>
            <div className="etc_history">
                <p>{content}</p>
            </div>
        </div>
    )
}
export default ResumeEtcInputView