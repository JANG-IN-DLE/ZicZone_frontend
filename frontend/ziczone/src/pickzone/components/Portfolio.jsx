import React, { useState } from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Document, Page } from 'react-pdf';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.js`;

// pdf 표현하는거 수정 필요
const Portfolio = ({data}) => {
    const isPdf = data.endsWith('.pdf');
    const[numPages, setNumPages] = useState(null);
    const[pageNumber, setPageNumber] = useState(1);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // function onDocumentLoadSuccess({numPages}) {
    //     setNumPages(numPages);
    // }

    return (
        <div>
        <h2>포트폴리오</h2>
        {isPdf ? (
            // <div>
            //     <Document
            //         file={data}
            //         onLoadSuccess={onDocumentLoadSuccess}>
            //             <Page pageNumber={pageNumber} />
            //     </Document>
            //     <div>
            //         <button 
            //             onClick={() => 
            //                 pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
            //             }
            //             disabled={pageNumber <= 1}
            //         >
            //             이전페이지
            //         </button>
            //         <span>
            //             Page {pageNumber} of {numPages}
            //         </span>
            //         <button
            //             onClick={() => 
            //                 pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            //             }
            //             disabled={pageNumber >= numPages}
            //         >
            //             다음페이지
            //         </button>
            //     </div>
            // </div>
            <div style={{ height: "750px", margin: "0 auto" }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={data} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
            </div>
        ) : (
            <img className="tech_icon" src={data} alt="포트폴리오" />
        )}
    </div>
    );
};

export default Portfolio;