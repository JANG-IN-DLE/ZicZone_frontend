import React from 'react';
import '../styles/ProfileCard.css';
import personal_m_image from '../assets/personal_m_image.png';
import personal_f_image from '../assets/personal_f_image.png';
import berry_image from '../assets/berry.png';


const ProfileCard = ({ jobs, gender, userName, career, point, intro, stacks }) => {

    const personal_image = gender === 'male' ? personal_m_image : personal_f_image;

    return (
        <div className='profile_card'>
            <p className='pc_jobs'>
                { jobs.map(job => <span key={ job }># { job } </span>) }
            </p>
            <div className='pc_personal_image'>
                <img src={ personal_image } alt='개인회원 이미지'/>
            </div>
            <p className='pc_name_career'>
                { userName} | { career }
            </p>
            <div className='pc_point'>
                <img src={ berry_image } alt='포인트 베리 이미지'/> 
                <p className='pc_point_berry'>
                    { point }
                </p>
            </div>
            <p className='pc_intro'>
                { intro }
            </p>
            <div className='pc_stacks'>
                { stacks.map(stack => <span className='pc_stack' key={ stack }>{ stack }</span>) }
            </div>
        </div>
    );
}

export default ProfileCard;