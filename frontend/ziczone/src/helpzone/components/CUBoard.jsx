import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CUBoard.css";
import ProfileCard from "./ProfileCard";
import Description from "./Description";
import PostForm from "./PostForm";

const CUBoard = () => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  const userProfile = {
    jobs: ['게임 클라이언트', 'devops/시스템', '게임클라이언트'],
    gender: 'female',
    userName: '이채림',
    career: '신입',
    point: '2000',
    intro: '뽑아주시면 후회안할겁니다뽑아주시면 후회안할겁니다뽑아주시면 후회안할겁니다열심히 하겠습',
    stacks: ['Python', 'NativeScript', 'Spring Boot', 'Microsoft SQL Server', 'MySQL', 'MySQL', 'MyhSQL']
  };

  const initialData = {
    berry: 100,
    title: '',
    content: '',
    file: null
  };

  const handlePostSubmitSuccess = () => {
    navigate('/rdboard');
};

  return (
    <div>
      <div className="b_section">
        <div className="b_profile_card">
          <ProfileCard
            jobs={ userProfile.jobs }
            gender={ userProfile.gender }
            userName={ userProfile.userName } 
            career={ userProfile.career }
            point={ userProfile.point }
            intro={ userProfile.intro }
            stacks={ userProfile.stacks }
          />
        </div>
        <div className="b_right">
          <div className="b_description">
            <Description isEditMode={ isEditMode } />
            <div className="b_title_form">
              <PostForm isEditMode={ isEditMode } initialData={ initialData } onSubmit={ handlePostSubmitSuccess }/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CUBoard;