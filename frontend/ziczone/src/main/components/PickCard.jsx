const PickCard = () => {
  return (
    <>
      <div class="user_card">
        <div class="pick_user_image_container">
          <img class="pick_user_image" src="user_image.png" />
        </div>
        <div class="pick_user_info">
          <div class="pick_user_job">
            #풀스택 #devops/시스템 #게임 클라이언트
          </div>
          <div class="pick_user_name">
            전*재
            <span class="pick_user_career"> | 신입</span>
          </div>
          <div class="pick_user_intro">
            클라우드 환경에서 최적의 성능을 구현하는 DevOps 엔지니어입니다.
          </div>
          <div class="pick_user_tech">
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
            <div class="tech_icon"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PickCard;
