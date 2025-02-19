import React from "react";
import "../styles/ProfileCard.css";
import personal_m_image from "../../common/card/assets/personal_m_image.png";
import personal_f_image from "../../common/card/assets/personal_f_image.png";
import berry_image from "../../common/card/assets/berry.png";

const ProfileCard = ({ berry, jobs, gender, userName, career, point, intro, stacks, isViewMode, isOwner }) => {
    // 프로필 이미지
    const personal_image = gender === 'MALE' ? personal_m_image : personal_f_image;

    // 이름 * 부분 처리 
    const maskName = (name) => {
        if (name.length < 2) return name;
        if (name.length === 2) {
            return `${name[0]}*`;
        }
        const maskedLength = name.length - 2;
        const start = name[0];
        const end = name[name.length - 1];
        return `${start}${'*'.repeat(maskedLength)}${end}`;
    };

    return (
        <div>
            {isViewMode && (
                <div>
                    <p className='pc_info'><span>HELP</span> {!isOwner ? maskName(userName) : userName}님!</p>
                    <div className='pc_post_berry'>{berry} 베리</div>
                </div>
            )}
            <div className='profile_card'>
                <p className='pc_jobs'>
                    {jobs.map(job => <span key={job}># {job} </span>)}
                </p>
                <div className='pc_personal_image'>
                    <img src={personal_image} alt='프로필 이미지' />
                </div>
                <p className='pc_name_career'>
                    {isViewMode && !isOwner ? maskName(userName) : userName} | {career}
                </p>
                {(!isViewMode || isOwner) && (
                    <div className='pc_point'>
                        <img src={berry_image} alt='포인트 베리 이미지' />
                        <p className='pc_point_berry'>
                            {point}
                        </p>
                    </div>
                )}
                <p className='pc_intro'>
                    {intro}
                </p>
                <div className='pc_stacks'>
                    {stacks.map((tech, index) => (
                        <img key={index} className="tech_icon" src={tech} alt={`Tech${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;