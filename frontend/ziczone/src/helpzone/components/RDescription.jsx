import React from "react";
import "../styles/Description.css";

const Description = () => {
    return (
        <div className="d_textarea">
            <p className="d_title">게시물 조회</p>
            <p className="d_content">
                안녕하세요! 지원서 첨삭 페이지에 오신 것을 환영합니다!<br />
                이곳에서는 여러분이 댓글을 통해 첨삭 피드백을 제공하고,<br />
                작성자가 채택할 경우 베리(포인트)를 받을 수 있는 시스템을 운영하고 있습니다.<br />
                구체적이고 도움이 되는 조언을 통해 작성자가 문서를 개선할 수 있도록 도와주세요!<br />
                포인트 시스템을 통해 유용한 정보를 공유하고, 서로 도우며 함께 성장하는 커뮤니티를 만들어 갑시다.<br /><br />
                여러분의 전문성과 노력이 포인트로 보상받을 수 있는 기회를 놓치지 마세요!
            </p>
        </div>
    );
}

export default Description;