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
    axios
      .get(`/api/board/${corrId}`)
      .then((response) => {
        const data = response.data;
        // setUserProfile({
        //   jobs: data.jobs,
        //   gender: data.gender,
        //   userName: data.userName,
        //   career: data.personalCareer,
        //   point: data.berryPoint,
        //   intro: data.userIntro,
        //   stacks: data.techName ? data.techName.split(',') : []
        // });
        setPostData({
          title: data.corrTitle,
          content: data.corrContent,
          fileUrl: data.corrPdf
        });
      })
      .catch((error) => {
        console.error("오류 메시지: ", error);
      });
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