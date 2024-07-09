import React from "react";
import "./../../styles/ResumePortfolio.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumePortfolioInputView from "./../ResumePortfolio/ResumePortfolioInputView";
import useAddInput from "./../../hooks/useAddInput"

const ResumePortfolioView = () => {
    const [inputs, addInput] = useAddInput(<ResumePortfolioInputView key={0} />);

    return (
        <div className="resume_portfolio">
            <div className="resume_portfolio_title">
                <p className="portfolio_title">포트폴리오</p>
            </div>
            <div className="resume_bar"></div>
            {inputs}
        </div>
    );
}

export default ResumePortfolioView;
