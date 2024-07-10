import React from "react";
import "./../../styles/ResumePortfolio.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumePortfolioInput from "./../ResumePortfolio/ResumePortfolioInput";
import useAddInput from "./../../hooks/useAddInput"

const ResumePortfolio = () => {
    const [inputs, addInput, removeInput] = useAddInput();

    return (
        <div className="resume_portfolio">
            <div className="resume_portfolio_title">
                <p className="portfolio_title">포트폴리오</p>
                <div className="plus_button" onClick={() => addInput(ResumePortfolioInput)}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => (
                <ResumePortfolioInput key={id} id={id} removeInput={() => removeInput(id)} />
            ))}
        </div>
    );
}

export default ResumePortfolio;
