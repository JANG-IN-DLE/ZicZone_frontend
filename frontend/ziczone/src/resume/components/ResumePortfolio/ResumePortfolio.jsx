import React, { useState, useEffect } from "react";
import "./../../styles/ResumePortfolio.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumePortfolioInput from "./ResumePortfolioInput";
import useAddInput from "./../../hooks/useAddInput";

const ResumePortfolio = ({ setPortfolio }) => {
    const [inputs, addInput, removeInput] = useAddInput();
    const [portfolioList, setPortfolioList] = useState([]);

    const updatePortfolio = (id, newPortfolio) => {
        setPortfolioList((prevList) => {
            const updatedList = prevList.map((portfolio) =>
                portfolio.id === id ? { ...portfolio, ...newPortfolio } : portfolio
            );
            return updatedList;
        });
    };

    const addPortfolioInput = () => {
        const id = addInput();
        setPortfolioList((prevList) => [...prevList, { id, file: null }]);
    };

    const handleRemoveInput = (id) => {
        removeInput(id);
        setPortfolioList((prevList) => prevList.filter((portfolio) => portfolio.id !== id));
    };

    useEffect(() => {
        setPortfolio(portfolioList);
    }, [portfolioList, setPortfolio]);

    return (
        <div className="resume_portfolio">
            <div className="resume_portfolio_title">
                <p className="portfolio_title">포트폴리오</p>
                <div className="plus_button" onClick={addPortfolioInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => (
                <ResumePortfolioInput
                    key={id}
                    id={id}
                    removeInput={() => handleRemoveInput(id)}
                    updatePortfolio={updatePortfolio}
                />
            ))}
        </div>
    );
}

export default ResumePortfolio;
