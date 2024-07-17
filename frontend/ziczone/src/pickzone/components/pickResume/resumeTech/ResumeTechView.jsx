import React from "react";
import "./../../../../resume/styles/ResumeTech.css"

const ResumeTechView = ({techUrls=[]}) => {
    // const [selectedItems] = useDropdown(false);


    return (
        <div className="resume_tech">
            <div className="resume_tech_title">
                <p>기술 스택</p>
                {techUrls && techUrls.length > 0 && (
                    <div className="pk_resume_tech_container">
                        {techUrls.map((tech, index) => (
                            <img key={index} className="pk_resume_tech" src={tech} alt={`Tech${index}`} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default ResumeTechView;