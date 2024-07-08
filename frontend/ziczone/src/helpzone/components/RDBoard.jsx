import React from "react";
import "../styles/RDBoard.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import RDescription from "./RDescription";
import PostView from "./PostView";

const RDBoard = () => {
  const { corrId } = useParams();

  const [userProfile, setUserProfile] = useState({
    jobs: [],
    gender: '',
    userName: '',
    career: '',
    point: '',
    intro: '',
    stacks: []
  });

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    fileUrl: ''
  });

  useEffect(() => {
    const fetchProfileAndPost = async () => {
      try {
        const profileResponse = await axios.get(`/api/board/profile/${corrId}`);
        const postResponse = await axios.get(`/api/board/${corrId}`);

        const profileData = profileResponse.data;
        setUserProfile({
          jobs: profileData.jobName.split(','),
          gender: profileData.gender,
          userName: profileData.userName,
          career: profileData.personalCareer,
          point: profileData.berryPoint,
          intro: profileData.userIntro,
          stacks: profileData.techName ? profileData.techName.split(',') : []
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

    fetchProfileAndPost();
  }, [corrId]);

  return (
    <div>
      <div className="b_section">
        <div className="b_profile_card">
          <ProfileCard { ...userProfile } isViewMode={true} />
        </div>
        <div className="b_right">
          <div className="b_description">
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