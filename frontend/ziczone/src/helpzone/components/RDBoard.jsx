import React from "react";
import Header from "../../common/header/components/Header";
import "../styles/RDBoard.css";
import ProfileCard from "./ProfileCard";
import RDescription from "./RDescription";
import PostView from "./PostView";

const RDBoard = () => {
  const userProfile = {
    jobs: ['게임 클라이언트', 'devops/시스템', '게임클라이언트'],
    gender: 'female',
    userName: '이채림',
    career: '신입',
    point: '2000',
    intro: '뽑아주시면 후회안할겁니다뽑아주시면 후회안할겁니다뽑아주시면 후회안할겁니다열심히 하겠습',
    stacks: ['Python', 'NativeScript', 'Spring Boot', 'Microsoft SQL Server', 'MySQL', 'MySQL', 'MyhSQL']
  };

  const postData = {
    title: '자소서 첨삭 요청',
    content: '경력사항에 아르바이트 적어도 되나요?',
    fileUrl: '이채림.pdf'
   };
    
  return (
    <div>
      <Header />
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