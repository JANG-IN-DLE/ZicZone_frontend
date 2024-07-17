import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/CUBoard.css";
import ProfileCard from "./ProfileCard";
import Description from "./Description";
import PostForm from "./PostForm";

const CUBoard = () => {
  const location = useLocation();
  const { postData: initialPostData, isEditMode: initialEditMode, userId, corrId, fileName } = location.state || {};
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

  const handlePostSubmitSuccess = (corrId, fileName) => {
    console.log("Navigating to rdboard with corrId:", corrId, "and fileName:", fileName); // 확인용 로그 추가
    navigate(`/rdboard/${corrId}`, { state: { userId, fileName } });
};

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileResponse = await axios.get(`/api/personal/board/myProfile/${userId}`);

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
    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  return (
    <div>
      <div className="b_section">
        <div className="b_profile_card">
          <ProfileCard
            {...userProfile}
            userId={userId}
          />
        </div>
        <div className="b_right">
          <div className="b_description">
            <Description
              isEditMode={isEditMode}
            />
            <div className="b_title_form">
              <PostForm
                isEditMode={isEditMode}
                initialData={initialData}
                userId={userId}
                fileName={fileName}
                corrId={corrId}
                onSubmit={handlePostSubmitSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CUBoard;