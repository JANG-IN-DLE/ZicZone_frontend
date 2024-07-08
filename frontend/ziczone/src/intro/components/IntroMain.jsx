import React, { useRef, useEffect } from "react";
import "../styles/IntroMain.css";
import Image from "../../intro/introimg.png";
import CompanySilde from "../../main/components/CompanySilde";

const IntroMain = () => {
  // uesRef써서 DOM에 접근할 수 있는 참조 변수 만듬
  // h2랑 span 가리키는 참조
  const h2Ref = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    let interval;

    // typing 함수 내부에서 txt에 문자열을 한글자씩 출력하게 설정
    // setInterval 함수로 일정 시간에 글자 추가
    const typing = () => {
      const txt = `직존, \n인재와 기업이 만나는\n혁신적인 플랫폼.`;
      // 상수 counter는 현재 출력된 문자의 개수를 설정함. 초기 값 0
      let counter = 0;

      interval = setInterval(() => {
        // 카운터가 텍스트의 길이랑 같아지면 모든 문자열을 출력
        // 같아지면 타이핑 애니메이션 멈추고 깜빡거림
        if (counter === txt.length) {
          cursorRef.current.classList.add("blink_animate");
          clearInterval(interval);
          return;
        }
        h2Ref.current.textContent += txt[counter];
        counter++;
      }, 100);
    };

    // 페이지 요소가 로드되면 타이핑 애니메이션을 수행할 것
    typing();

    // 완료되면 클린인터벌로 멈춤
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <article className="banner">
        <div className="intro_container">
          <p ref={h2Ref} className="blinking_txt"></p>
          <span ref={cursorRef} className="cursor">
            |
          </span>
        </div>
      </article>
      <div className="introimg">
        <img src={Image} alt="" />
      </div>

      <div className="ziczone_introduce">
        <div className="ziczone_introduce_text">
          개인의 역량을 돋보이게 하고, 기업들이 그 능력을 필요로 할 때 그들이
          당신에게 직접 연락할 수 있는 서비스입니다. 당신의 잠재력을 최대한
          발휘하세요
        </div>
        <div className="ziczone_introduce_text">
          개인이 자신의 포트폴리오를 공유하고, 기업들이 직접 컨택을 요청하는
          혁신적인 플랫폼입니다. 당신의 잠재력을 발휘할 기회가 여기 있습니다.
        </div>
        <div className="ziczone_introduce_text">
          개인 포트폴리오를 효과적으로 관리하고, 기업들이 직접 연락을 취할 수
          있는 혁신적인 플랫폼
        </div>
        <div className="ziczone_introduce_text">
          기업들은 인재의 실제 역량을 확인하고 필요에 따라 직접적으로 연락할 수
          있는 플랫폼을 제공합니다
        </div>
        <div className="ziczone_introduce_text">
          개인 포트폴리오를 통해 당신의 독특한 경험과 역량을 기업들과 공유하세요
        </div>
      </div>

      <div className="company_slide">
        <div className="ziczone_sign_company">직존 등록 기업</div>
        <CompanySilde />
        <CompanySilde />
        <CompanySilde />
      </div>
      <div className="ziczone_join">
        <div className="ziczone_signup">직존과 함께하기</div>
        <div className="user_signup">
          <div className="personal_signup"></div>
          <div className="company_signup"></div>
        </div>
      </div>
    </>
  );
};

export default IntroMain;
