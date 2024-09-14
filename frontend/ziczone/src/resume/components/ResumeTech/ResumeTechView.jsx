import React, { useState, useEffect } from "react";
import "./../../styles/ResumeTech.css";
import api from '../../../common/config/axiosInstance';

const ResumeTechView = () => {
    const userId = localStorage.getItem('userId');
    const [techUrls, setTechUrls] = useState([]);

    useEffect(() => {
        api.get(`/api/personal/resumes/user/${userId}`)
            .then(response => {
                const techStacks = response.data.techStacks || [];
                const urls = techStacks.map(stack => stack.tech.techUrl);
                setTechUrls(urls);
            })
            .catch(error => {
                console.error("Failed to fetch tech stacks", error);
            });
    }, [userId]);

    return (
        <div className="resume_tech">
            <div className="resume_tech_title">
                <p>기술 스택</p>
                {techUrls && techUrls.length > 0 && (
                    <div className="pk_resume_tech_container">
                        {techUrls.map((tech, index) => (
                            <div key={index} className="selected_tech">
                                <img src={tech} alt={`Tech${index}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeTechView;
