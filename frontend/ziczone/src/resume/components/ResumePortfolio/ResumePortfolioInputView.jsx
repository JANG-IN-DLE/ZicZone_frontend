import React from 'react';

const ResumePortfolioInputView = ({ personalState }) => {

    return (
        <div className="resume_portfolio_upload">
            {personalState.map((port, index) => (
                <div className='portfolio_file_upload' key = {index}>
                    <p className="portfolio_file_name">
                        {port}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ResumePortfolioInputView;
