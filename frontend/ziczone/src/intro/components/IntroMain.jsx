import React, { useRef, useEffect, useState } from "react";
import "../styles/IntroMain.css";
import Image from "../../intro/introimg0.png";
import introImg1 from "../../intro/introImg1.png";
import introImg2 from "../../intro/introImg2.png";
import introImg3 from "../../intro/introImg3.png";
import introImg4 from "../../intro/introImg4.png";
import introImg5 from "../../intro/introImg5.png";
import CompanySilde from "../../main/components/CompanySilde";
import { Link } from "react-router-dom";
import Layout from "../../common/layout/layout";

const IntroMain = () => {
  // uesRef써서 DOM에 접근할 수 있는 참조 변수 만듬
  // 아래 h2랑 span 가리키는 참조
  const h2Ref = useRef(null);
  const cursorRef = useRef(null);
  // 스크롤Y의 변수값 저장하기 위해 useState사용
  const [scrollY, setScrollY] = useState(0);
  // 지를 스크롤할 때마다 스크롤 위치를 scrollY에 저장
  const thresholds = useRef([700, 1300, 1900, 2500, 2800]); // 각 요소의 스크롤 임계값

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

  useEffect(() => {
    // 현재 스크롤 위치를 setScrollY로 저장
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 윈도우.스크롤에 이벤트리스너, 스크롤할때마다 handleScroll 함수 실행
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Layout>
        <div className="ziczone_intro_container">
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
              <div
                // thresholds.current[0]를 참조해서 스크롤 위치에 따른
                // 삼항연산자 사용. 배열에 등록된 값을 초과하냐?
                // 참이면 textslide_left, 거짓이면 "slideback_left"
                id="intro1"
                className={`intro ${
                  scrollY > thresholds.current[0]
                    ? "textslide_left"
                    : "slideback_left"
                } `}
              >
                <img className="intro_leftani" src={introImg1} alt="" />
                <p className="intro_leftani_text">
                  역량을 보여주고, <br />
                  기업의 관심을 받는 서비스
                  <br />
                  잠재력을 발휘하세요
                </p>
              </div>
            </div>
            <div className="ziczone_introduce_text">
              <div
                id="intro2"
                className={`intro ${
                  scrollY > thresholds.current[1]
                    ? "textslide_right"
                    : "slideback_right"
                }`}
              >
                <img className="intro_rightani" src={introImg2} alt="" />
                <p>
                  <br />
                  포트폴리오 관리와 <br />
                  기업의 직접 연락이
                  <br />
                  가능한 플랫폼
                  <br />
                </p>
              </div>
            </div>
            <div className="ziczone_introduce_text">
              <div
                id="intro3"
                className={`intro ${
                  scrollY > thresholds.current[2]
                    ? "textslide_left"
                    : "slideback_left"
                }`}
              >
                <img className="intro_leftani" src={introImg3} alt="" />
                <p className="intro_leftani_text">
                  <br />
                  기업의 관심을 받는 <br />
                  가장 쉬운 방법
                  <br />
                </p>
              </div>
            </div>
            <div className="ziczone_introduce_text">
              <div
                id="intro4"
                className={`intro ${
                  scrollY > thresholds.current[3]
                    ? "textslide_right"
                    : "slideback_right"
                }`}
              >
                <img className="intro_rightani" src={introImg4} alt="" />
                <p>
                  <br />
                  <br />
                  당신의 기회를 잡으세요
                  <br />
                </p>
              </div>
            </div>
            <div className="ziczone_introduce_text">
              <div
                id="intro5"
                className={`intro1 ${
                  scrollY > thresholds.current[4]
                    ? "textslide_right"
                    : "slideback_right"
                }`}
              >
                경험과 역량을 기업과 공유하세요
              </div>
            </div>
          </div>

          <div className="company_slide">
            <div className="ziczone_sign_company">직존 등록 기업</div>
            <CompanySilde />
            <CompanySilde />
            <CompanySilde />
          </div>
          <div className="ziczone_join">
            <div
              className="ziczone_signup"
              style={{ background: "url(" + introImg5 + ")" }}
            >
              <div className="ziczone_signup_text">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  직존 회원가입 바로가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IntroMain;
