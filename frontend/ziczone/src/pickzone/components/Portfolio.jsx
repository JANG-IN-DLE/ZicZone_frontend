import React, { useState } from "react";

const Portfolio = ({ data }) => {
    return (
        <div>
            <div className="pdf_viewer" style={{marginTop:"120px"}}>
                <iframe src={data} width="760px" height="600vh" title="pdfViewer"></iframe>
            </div>
        </div>
    );
};

export default Portfolio;