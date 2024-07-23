import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./../../styles/ResumePortfolio.css";
import plus_btn from "./../../assets/Plus_btn.png";
import ResumePortfolioInputEdit from "./ResumePortfolioInputEdit";

const ResumePortfolioEdit = ({ setPortfolio }) => {
    const userId = localStorage.getItem("userId");
    const [inputs, setInputs] = useState([]);
    const [portfolioList, setPortfolioList] = useState([]);

    useEffect(() => {
        axios.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const data = response.data.portfolios.map(port => ({
                    id: port.portId,
                    fileName: port.portFileName,
                    fileUrl: port.portFileUrl,
                    fileUuid: port.portFileUuid,
                    file: null // 파일 객체를 초기화
                }));
                setPortfolioList(data);
                setInputs(data.map(port => port.id));
                setPortfolio(data);
            })
            .catch(error => {
                console.log("portfolioData 호출 실패: " + error);
            });
    }, [userId, setPortfolio]);

    const updatePortfolio = (id, newPortfolio) => {
        setPortfolioList((prevList) => {
            const updatedList = prevList.map((portfolio) =>
                portfolio.id === id ? { ...portfolio, ...newPortfolio } : portfolio
            );
            setPortfolio(updatedList);
            return updatedList;
        });
    };

    const addPortfolioInput = () => {
        const id = new Date().getTime();
        const newPortfolio = { id, fileName: "", file: null };
        setInputs((prevInputs) => [...prevInputs, id]);
        setPortfolioList((prevList) => [...prevList, newPortfolio]);
        setPortfolio((prevList) => [...prevList, newPortfolio]);
    };

    const removePortfolioInput = (id) => {
        setInputs((prevInputs) => prevInputs.filter(inputId => inputId !== id));
        const updatedList = portfolioList.filter((portfolio) => portfolio.id !== id);
        setPortfolioList(updatedList);
        setPortfolio(updatedList);
    };

    return (
        <div className="resume_portfolio">
            <div className="resume_portfolio_title">
                <p className="portfolio_title">포트폴리오</p>
                <div className="plus_button" onClick={addPortfolioInput}>
                    <img src={plus_btn} alt="Plus_btn" />
                </div>
            </div>
            <div className="resume_bar"></div>
            {inputs.map((id) => {
                const portfolio = portfolioList.find(port => port.id === id);
                return (
                    <ResumePortfolioInputEdit
                        key={id}
                        id={id}
                        fileName={portfolio?.fileName || ""}
                        removeInput={() => removePortfolioInput(id)}
                        updatePortfolio={updatePortfolio}
                    />
                );
            })}
        </div>
    );
};

export default ResumePortfolioEdit;
