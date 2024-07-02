import React from "react";

const Portfolio = ({data}) => {
    return (
        <div>
            <h2>포트폴리오</h2>
            <img className="tech_icon" src={data} alt={"포트폴리오"} />
        </div>
    );
};

export default Portfolio;