import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/CUBoard.css";
import ProfileCard from "./ProfileCard";
import Description from "./Description";
import PostForm from "./PostForm";

const CUBoard = () => {
  const location = useLocation();
  const { postData: initialPostData, isEditMode: initialEditMode } = location.state || {};
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(initialEditMode || false);

  const [userProfile, setUserProfile] = useState({
    berry: '',
    jobs: [],
    gender: '',
    userName: '',
    career: '',
    point: '',
    intro: '',
    stacks: []
  });

  const initialData = {
    berry: initialPostData?.berry || 100,
    title: initialPostData?.title || '',
    content: initialPostData?.content || '',
    file: initialPostData?.fileUrl || null
  };

  const handlePostSubmitSuccess = () => {
    navigate('/rdboard');
  };

  useEffect(() => {
    const UserProfile = async () => {
      try {
        const profileResponse = await axios.get(`/api/board/myProfile`);
        
        const profileData = profileResponse.data;
        setUserProfile({
          jobs: profileData.jobName.split(','),
          gender: profileData.gender,
          userName: profileData.userName,
          career: profileData.personalCareer,
          point: profileData.berryPoint,
          intro: profileData.userIntro,
          stacks: profileData.techUrl ? profileData.techUrl.split(',') : []
        });

      } catch (error) {
        console.error("오류 메시지: ", error);
      }
    };
    UserProfile();
  }, []);

  return (
    <div>
      <div className="b_section">
        <div className="b_profile_card">
          <ProfileCard {...userProfile} />
        </div>
        <div className="b_right">
          <div className="b_description">
            <Description isEditMode={ isEditMode } />
            <div className="b_title_form">
              <PostForm isEditMode={ isEditMode } initialData={ initialData } onSubmit={ handlePostSubmitSuccess } />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CUBoard;