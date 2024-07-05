import React from "react";

const ResumeEtcInput = () => {

    return (
        <div className="resume_etc_input">
            <div className="resume_circle"></div>
            <div className="etc_date">
                <input type="text" placeholder="YYYY.MM" />
                <p>~</p>
                <input type="text" placeholder="YYYY.MM" />
            </div>
            <div className="etc_history">
                <input type="text" placeholder="기타" />
            </div>
        </div>
    )
}

export default ResumeEtcInput