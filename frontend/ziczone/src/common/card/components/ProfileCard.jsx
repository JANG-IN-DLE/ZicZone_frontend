import React from 'react';
import '../styles/ProfileCard.css';


const ProfileCard = ({userImage, jobNames=[], userName, userCareer, userIntro, techNames=[]}) => {


    return (
        <div className='profile_card'>
            <p className='pc_jobs'>
                {jobNames.map((job, index)=> (
                    <span key={index}>#{job}</span>
                ))}
            </p>
            <div className='pc_personal_image'>
                <img className="pick_user_image" src={userImage} alt="User" />
            </div>
            <p className='pc_name_career'>
                { userName} | { userCareer }
            </p>
            <p className='pc_intro'>
                { userIntro }
            </p>
            <div className='pc_stacks'>
                {techNames.map((tech, index) => (
                    <img key={index} className="tech_icon" src={tech} alt={`Tech${index}`} />
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;