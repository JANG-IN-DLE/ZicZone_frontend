import React from "react";
import "../styles/Description.css";

const Description = () => {
    return (
        <div className="d_textarea">
            <p className="d_title">게시물 등록</p>
            <p className="d_content">
                안녕하세요! 이곳은 여러분이 자소서, 이력서, 포트폴리오를 제출하고 첨삭 요청을 할 수 있는 공간입니다.<br />
                첨삭 요청 시 다른 이용자들의 피드백을 받을 수 있습니다. 다양한 의견을 반영하여 문서를 개선해보아요!<br />
                <span className="d_red_text">*** 글 작성으로부터 7일 후 댓글이 없으면 자동 삭제 처리됩니다.(베리 환불)</span>
            </p>
            <p className="d_content">
                <span className="d_bold_text">글 작성 방법</span><br />
                1. 베리 : 채택 베리를 설정해주세요. 채택한 사용자에게 베리가 지급됩니다!(등록후 베리 수정 불가)<br />
                2. 제목 : 요청사항을 간단히 적어주세요.(예: "이력서 첨삭 요청 - 경력 사항 보완 필요")<br />
                3. 본문 : 어떤 부분을 특히 검토받고 싶은지, 피드백이 필요한지 강조해주세요.<br />
                4. 첨부파일 : 하나의 pdf 파일로 묶어 첨부해주세요.<br />
                5. <span className="d_red_text">개인정보 보호</span> : 개인정보가 포함된 부분은 삭제하거나 가려서 제출해주세요. 등록시 이름 가운데는 * 처리됩니다.
            </p>
        </div>
    );
}

export default Description;