import React, { useEffect, useState } from "react";
import "./../../styles/ResumePortfolio.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumePortfolioInputView from "./../ResumePortfolio/ResumePortfolioInputView";
import useAddInput from "./../../hooks/useAddInput"
import axios from "axios";

const ResumePortfolioView = () => {
    const userId = localStorage.getItem("userId")
    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const portFileName = response.data.portfolios.map(port => port.portFileName)
                console.log("로그: " + portFileName)
                setPortfolioData(portFileName)
            })
            .catch(error => {
                console.log("portfolioData 호출 실패", error);
            })
    }, [userId])

    useEffect(() => {
        console.log("포트: ", JSON.stringify(portfolioData));
    }, [portfolioData]);


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
