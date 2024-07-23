import React from 'react';
import "./../../styles/ResumePortfolio.css";

const ResumePortfolioInputView = ({ portfolio }) => {
    return (
        <div className="resume_portfolio_upload">
            <div className='portfolio_file_upload'>
                <p className="portfolio_file_name">
                    {portfolio.portFileName}
                </p>
            </div>
        </div>
    );
};

export default ResumePortfolioInputView;