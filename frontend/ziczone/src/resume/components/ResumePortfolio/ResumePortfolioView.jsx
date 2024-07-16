import React, { useEffect, useState } from "react";
import "./../../styles/ResumePortfolio.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumePortfolioInputView from "./../ResumePortfolio/ResumePortfolioInputView";
import useAddInput from "./../../hooks/useAddInput"
import axios from "axios";

const ResumePortfolioView = () => {
    const userId = 7; // 사용자 ID
    const [portfolioData, setPortfolioData] = useState('');

    useEffect(() => {
        axios.get(`/api/resumes/${userId}`)
        .then(response => {
            setPortfolioData(response.data.portfolioData)
        })
        .catch(error => {
            console.log("portfolioData 호출 실패", error);
        })
    }, [userId])

    return (
        <div className="resume_portfolio">
            <div className="resume_portfolio_title">
                <p className="portfolio_title">포트폴리오</p>
            </div>
            <div className="resume_bar"></div>
            <ResumePortfolioInputView personalState={portfolioData} />
        </div>
    );
}

export default ResumePortfolioView;
