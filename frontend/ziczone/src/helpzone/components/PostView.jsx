import React from "react";
import "../styles/PostView.css";

const PostView = ({ title, content, fileUrl }) => {
    return (
        <div>
            <p className="pv_title">{title}</p>
            <p className="pv_content">{content}</p>
            {fileUrl && (
                <div className="pdf_viewer">
                    <iframe src={fileUrl} width="100%" height="665px" title="pdfViewer"></iframe>
                </div>
            )}
        </div>
    );
}

export default PostView;