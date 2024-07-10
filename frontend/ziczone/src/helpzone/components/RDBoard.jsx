import React from "react";
import "../styles/RDBoard.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import RDescription from "./RDescription";
import PostView from "./PostView";
import Button from "./Button";

const RDBoard = () => {
  const { corrId } = useParams();
  const userId = 13; // 로그인 구현되면 실제 로그인된 사용자의 userId를 사용
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  const [userProfile, setUserProfile] = useState({
    berry: '',
    jobs: [],
    gender: '',
    userName: '',
    career: '',
    point: '',
    intro: '',
    stacks: [],
    isOwner: false // 게시물 작성자인지 여부 확인
  });

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    fileUrl: ''
  });

  const handleEdit = () => {
    navigate('/cuboard', { state: { postData, isEditMode: true } });
    setIsEditMode(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/board/${userId}/${corrId}`);
      navigate('/helpzone');
    } catch (error) {
      console.error("오류 메시지: ", error);
    }
  };

  useEffect(() => {
    const ProfileAndPost = async () => {
      try {
        const profileResponse = await axios.get(`/api/board/profile/${corrId}`);
        const postResponse = await axios.get(`/api/board/${corrId}`);

        const profileData = profileResponse.data;
        setUserProfile({
          berry: profileData.corrPoint,
          jobs: profileData.jobName.split(','),
          gender: profileData.gender,
          userName: profileData.userName,
          career: profileData.personalCareer,
          point: profileData.berryPoint,
          intro: profileData.userIntro,
          stacks: profileData.techUrl ? profileData.techUrl.split(',') : [],
          isOwner: profileData.userId === userId // 현재 사용자가 게시물 작성자인지 여부 확인
        });

        const postData = postResponse.data;
        setPostData({
          title: postData.corrTitle,
          content: postData.corrContent,
          fileUrl: postData.corrPdf
        });
      } catch (error) {
        console.error("오류 메시지: ", error);
      }
    };

    ProfileAndPost();
  }, [corrId]);

  return (
    <div>
      <div className="b_section">
        <div className="b_profile_card">
          <ProfileCard {...userProfile} isViewMode={true} />
        </div>
        <div className="b_right">
          <div className="b_description">
            <div className="b_display_btn">
              <p className="d_title">게시물 조회</p>
              {userProfile.isOwner && (
                <div className="b_edit_delete">
                  <Button type="button" className="b_edit" onClick={handleEdit}>
                    수정
                  </Button>
                  <Button type="button" className="b_delete" onClick={handleDelete}>
                    삭제
                  </Button>
                </div>
              )}
            </div>
            <RDescription />
            <div className="b_title_form">
              <PostView
                title={postData.title}
                content={postData.content}
                fileUrl={postData.fileUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RDBoard;