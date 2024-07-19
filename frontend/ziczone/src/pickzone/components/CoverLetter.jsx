import React from "react";

const CoverLetter = ({data}) => {
    return(
        <div>
            <div className="cover_viewer" style={{marginTop:"120px"}}>
                <iframe src={data} width="760px" height="1080vh" title="coverViewer"></iframe>
            </div>
        </div>
    );
};

export default CoverLetter;