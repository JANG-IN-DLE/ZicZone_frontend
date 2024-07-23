import React, { useEffect, useState } from "react";
import slidImage1 from "../../main/bannerimg/slide_image1.png";
import slidImage2 from "../../main/bannerimg/slide_image2.png";
import slidImage3 from "../../main/bannerimg/slide_image3.png";
import personalMImage from "../../common/card/assets/personal_m_image.png";
import personalFImage from "../../common/card/assets/personal_f_image.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import left from "../../main/left.png";
import right from "../../main/right.png";

const LoginBannerSlide = () => {
  const userId = localStorage.getItem("userId")
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [userImg, setUserImg] = useState([]);
  const [companyLogo, setCompanyLogo] = useState([]);
  const [userRole, setUserRole] = useState();

  const slideItems = [
    { id: 1, src: slidImage1, alt: "배너1" },
    { id: 2, src: slidImage2, alt: "배너2" },
    { id: 3, src: slidImage3, alt: "배너3" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        fetchUserData(decodedToken);
        // console.log(",,,,,,,,,,", decodedToken); // 토큰으로 받는 데이터 확인
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  useEffect(() => {
    const slide = document.querySelector(".slide");
    const slideItems = document.querySelectorAll(".login_slide_item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // slide, slideItems, prevButton, nextButton 하나라도 없으면 함수실행 종료
    // DOM 요소나 배열에 접근하기 전에 유효성을 검사
    if (!slide || !slideItems.length || !prevButton || !nextButton) return;

    const totalSlides = slideItems.length;
    let currentIndex = 0;
    let slideInterval;

    function updateSlidePosition() {
      const slideWidth = slideItems[0].clientWidth;
      const newTransformValue = -currentIndex * slideWidth;
      slide.style.transform = `translateX(${newTransformValue}px)`;
    }

    function nextSlide() {
      currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
      updateSlidePosition();
    }

    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 2500);
    }

    function stopSlideInterval() {
      clearInterval(slideInterval); // 자동 슬라이드 멈추는 함수
    }

    prevButton.addEventListener("click", function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
      updateSlidePosition();
      stopSlideInterval(); // 버튼 클릭하면 자동 슬라이드 멈춤
      startSlideInterval(); // 클릭하면 다시 실행
    });

    nextButton.addEventListener("click", function () {
      currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
      updateSlidePosition();
      stopSlideInterval(); // 버튼 클릭하면 자동 슬라이드 멈춤
      startSlideInterval(); // 클릭하면 다시 실행
    });

    window.addEventListener("resize", updateSlidePosition);

    startSlideInterval(); // 페이지 불러오면 자동 슬라이드 시작
  }, []);

  const fetchUserData = (decodedToken) => {
    const userId = decodedToken.userId;
    const userType = decodedToken.role; // 'company' 또는 'personal'

    if (userType === "COMPANY") {
      axios
        .get(`/api/main/companyUser/${userId}`)
        .then((res) => {
          setUserName(res.data.userName);
          setUserEmail(res.data.email);
          setCompanyLogo(res.data.companyLogo);
          setUserRole(userType);
          console.log(("컴퍼니입니다", res));
        })
        .catch((error) => {
          console.error("Error fetching company user data: ", error);
        });
    } else if (userType === "PERSONAL") {
      axios
        .get(`/api/main/personalUser/${userId}`)
        .then((res) => {
          setUserName(res.data.userName);
          setUserEmail(res.data.email);
          setUserImg(
            res.data.gender === "male" ? personalMImage : personalFImage
          );
          setUserRole(userType);
        })
        .catch((error) => {
          console.error("Error fetching personal user data: ", error);
        });
    }
  };

  return (
    <>
      <div className="slide_container">
        <div className="login_wrap">
          <div
            className="arrow left"
            id="prev"
            style={{ background: "url(" + left + ")" }}
          ></div>
          <div
            className="arrow right"
            id="next"
            style={{ background: "url(" + right + ")" }}
          ></div>
          <ul className="slide">
            <li
              className="login_slide_item"
              style={{ background: "url(" + slidImage1 + ")" }}
            >
              <Link to="/ziczoneintro" style={{ textDecoration: "none" }}>
                <div className="slide_text">
                  <p className="slide_in_text">직존</p>
                  <p className="slide_in_text_sub">
                    기업이 인재를 채용하는 서비스
                  </p>
                </div>
              </Link>
            </li>
            <li
              className="login_slide_item"
              style={{ background: "url(" + slidImage2 + ")" }}
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=sTF55z2i5zI&t=9s")
              }
            >
              <div className="slide_text">
                <p className="slide_in_text">다큐프라임 보러가기</p>
                <p className="slide_in_text_sub">
                  인공지능 AI 발전으로 우리는 생존을 위해 무엇을 준비해야하나
                </p>
              </div>
            </li>
            <li
              className="login_slide_item"
              style={{ background: "url(" + slidImage3 + ")" }}
              onClick={() => window.open("https://www.ncloud.com/")}
            >
              <div className="slide_text">
                <p className="slide_in_text">네이버 클라우드 바로가기</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="login_user_card">
          <div className="login_user_image">
            {userRole === "COMPANY" ? (
              companyLogo ? (
                <img src={companyLogo} alt="Company Logo" />
              ) : null
            ) : (
              <img src={userImg} alt="유저 이미지" />
            )}
          </div>
          <div className="login_user_name">
            <p>{userName}</p>
          </div>
          <div className="login_user_email">{userEmail}</div>
          <div className="main_mypage">
            <Link
              to={
                userRole === "COMPANY" ? `/company/${userId}` : `/personal/${userId}`
              }
              style={{ textDecoration: "none" }}
            >
              <p> 마이페이지</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginBannerSlide;
