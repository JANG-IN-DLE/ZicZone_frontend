import React from 'react';
import '../styles/ProfileCard.css';
import personal_m_image from '../../common/card/assets/personal_m_image.png';
import personal_f_image from '../../common/card/assets/personal_f_image.png';
import berry_image from '../../common/card/assets/berry.png';

const ProfileCard = ({ jobs, gender, userName, career, point, intro, stacks, isViewMode }) => {

    const personal_image = gender === 'male' ? personal_m_image : personal_f_image;

    const maskName = (name) => {
        if (name.length < 2) return name;
        if (name.length === 2) {
            return `${name[0]}*`;
        }
        const maskedLength = Math.floor(name.length / 2);
        const start = name.slice(0, Math.ceil((name.length - maskedLength) / 2));
        const end = name.slice(Math.ceil((name.length + maskedLength) / 2));
        return `${start}${'*'.repeat(maskedLength)}${end}`;
    };

    return (
        <div>
            { isViewMode && (
                <div>
                  <p className='pc_info'><span>HELP</span> { maskName(userName) }님!</p>
                  <div className='pc_post_berry'></div>
                </div>
            )}
            <div className='profile_card'>
            <p className='pc_jobs'>
                { jobs.map(job => <span key={ job }># { job } </span>) }
            </p>
            <div className='pc_personal_image'>
                <img src={ personal_image } alt='개인회원 이미지'/>
            </div>
            <p className='pc_name_career'>
                { isViewMode ? maskName(userName) : userName } | { career }
            </p>
            {!isViewMode && (
                <div className='pc_point'>
                    <img src={ berry_image } alt='포인트 베리 이미지'/> 
                    <p className='pc_point_berry'>
                        { point }
                    </p>
                </div>
            )}
            <p className='pc_intro'>
                { intro }
            </p>
            {/* 백엔드 진행 후 다시 */}
            {/* <div className='pc_stacks'>
                { stacks.map((tech, index) => (
                                <img key={index} className="tech_icon" src={tech} alt={`Tech${index}`} />
                            ))
                }
            </div> */}
            </div>
        </div>
    );
}

export default ProfileCard;