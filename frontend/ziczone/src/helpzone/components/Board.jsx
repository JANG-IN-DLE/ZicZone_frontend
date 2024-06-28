import React from "react";
import "../styles/Board.css";
import ProfileCard from "./ProfileCard";
import Description from "./Description";
import BerrySelect from "./BerrySelect";
import PostFrom from "./PostForm";
import Button from "./Button";

const Board = () => {
  const userProfile = {
    jobs: ['게임 클라이언트', 'devops/시스템', '게임클라이언트'],
    gender: 'female',
    userName: '이채림',
    career: '신입',
    point: '2000',
    intro: '뽑아주시면 후회안할겁니다뽑아주시면 후회안할겁니다뽑아주시면 후회안할겁니다열심히 하겠습',
    stacks: ['Python', 'NativeScript', 'Spring Boot', 'Microsoft SQL Server', 'MySQL', 'MySQL', 'MyhSQL']
  };

  return (
    <div className="b_section">
       <div className="b_profile_card">
        <ProfileCard
          jobs={userProfile.jobs}
          gender={userProfile.gender}
          userName={userProfile.userName}
          career={userProfile.career}
          point={userProfile.point}
          intro={userProfile.intro}
          stacks={userProfile.stacks}
        />
      </div>
      <div className="b_right">
        <div className="b_description">
          <Description />
          <div className="b_berry_select">
            <BerrySelect />
          </div>
          <div className="b_title_form">
            <PostFrom />
          </div>
          <div className="b_button">
                <Button type="cancel">
                    취소
                </Button>
                <Button type="submit">
                    등록
                </Button>
            </div>
       </div>
     </div>
    </div>
  );
}
  
  export default Board;