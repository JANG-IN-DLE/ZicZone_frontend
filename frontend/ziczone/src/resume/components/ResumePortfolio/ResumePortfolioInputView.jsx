import React from 'react';

const ResumePortfolioInputView = ({portfolioData}) => {

    return (
        <div className="resume_portfolio_upload">
            <div className='portfolio_file_upload'>
                <p className="portfolio_file_name">
                    {portfolioData}
                </p>
            </div>
        </div>
    );
};

export default ResumePortfolioInputView;
