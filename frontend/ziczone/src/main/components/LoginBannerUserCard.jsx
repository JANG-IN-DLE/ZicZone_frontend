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
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [userImg, setUserImg] = useState([]);
  const [companyLogo, setCompanyLogo] = useState([]);
  const [userRole, setUserRole] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [personalCareer, setPersonalCareer] = useState([]);
  const [userIntro, setUserIntro] = useState([]);

  const slideItems = [
    {
      id: 1,
      src: slidImage1,
      alt: "배너1",
      text: "직존",
      subText: "기업이 인재를 채용하는 서비스",
      link: "/ziczoneintro",
    },
    {
      id: 2,
      src: slidImage2,
      alt: "배너2",
      text: "다큐프라임 보러가기",
      subText: "인공지능 AI 발전으로 우리는 생존을 위해 무엇을 준비해야하나",
      link: "https://www.youtube.com/watch?v=sTF55z2i5zI&t=9s",
    },
    {
      id: 3,
      src: slidImage3,
      alt: "배너3",
      text: "네이버 클라우드 바로가기",
      subText: "",
      link: "https://www.ncloud.com/",
    },
  ];

  useEffect(() => {
    const slide = document.querySelector(".slide");
    const slideItems = document.querySelectorAll(".login_slide_item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const totalSlides = slideItems.length;
    let currentIndex = 1;
    let slideInterval;

    slide.style.width = `${794 * totalSlides}px`; // 동적으로 슬라이드 목록의 너비 설정
    slide.style.transform = `translateX(-${currentIndex * 794}px)`;

    function updateSlidePosition(instant = false) {
      const newTransformValue = -currentIndex * 794;
      slide.style.transition = instant ? "none" : "0.4s ease-in-out";
      slide.style.transform = `translateX(${newTransformValue}px)`;

      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = totalSlides - 2;
          updateSlidePosition(true);
        }, 400);
      } else if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
          currentIndex = 1;
          updateSlidePosition(true);
        }, 400);
      }
    }

    function nextSlide() {
      currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
      updateSlidePosition();
    }

    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 2500);
    }

    function stopSlideInterval() {
      clearInterval(slideInterval);
    }

    prevButton.addEventListener("click", function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
      updateSlidePosition();
      stopSlideInterval();
      startSlideInterval();
    });

    nextButton.addEventListener("click", function () {
      currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
      updateSlidePosition();
      stopSlideInterval();
      startSlideInterval();
    });

    window.addEventListener("resize", () => updateSlidePosition(true));

    startSlideInterval();

    return () => {
      clearInterval(slideInterval);
      prevButton.removeEventListener("click", () => {});
      nextButton.removeEventListener("click", () => {});
      window.removeEventListener("resize", () => {});
    };
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
          setUserIntro(res.data.userIntro);
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
            res.data.gender === "MALE" ? personalMImage : personalFImage
          );
          console.log(res.data);
          setUserRole(userType);
          setPersonalCareer(res.data.personalCareer);
          setUserIntro(res.data.userIntro);
        })
        .catch((error) => {
          console.error("Error fetching personal user data: ", error);
        });
    }
  };

  const clearUserData = () => {
    setUserName("");
    setUserRole(null);
    setCompanyLogo("");
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");

    if (userId && token && userRole === "PERSONAL") {
      try {
        await axios.post(
          `/sse/logout/${userId}`,
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userRole");
    }

    window.location.reload("/");
    setIsLoggedIn(false);
    clearUserData();
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
              style={{
                background: `url(${slideItems[slideItems.length - 1].src})`,
              }}
            >
              <div className="slide_text">
                <p className="slide_in_text">
                  {slideItems[slideItems.length - 1].text}
                </p>
                <p className="slide_in_text_sub">
                  {slideItems[slideItems.length - 1].subText}
                </p>
              </div>
            </li>
            {slideItems.map((item) => (
              <li
                key={item.id}
                className="login_slide_item"
                style={{ background: `url(${item.src})` }}
              >
                {item.link.startsWith("http") ? (
                  <div
                    className="slide_text"
                    onClick={() => window.open(item.link)}
                  >
                    <p className="slide_in_text">{item.text}</p>
                    <p className="slide_in_text_sub">{item.subText}</p>
                  </div>
                ) : (
                  <Link to={item.link} style={{ textDecoration: "none" }}>
                    <div className="slide_text">
                      <p className="slide_in_text">{item.text}</p>
                      <p className="slide_in_text_sub">{item.subText}</p>
                    </div>
                  </Link>
                )}
              </li>
            ))}
            <li
              className="login_slide_item"
              style={{ background: `url(${slideItems[0].src})` }}
            >
              <div className="slide_text">
                <p className="slide_in_text">{slideItems[0].text}</p>
                <p className="slide_in_text_sub">{slideItems[0].subText}</p>
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
            <p>
              {userRole === "COMPANY" ? (
                userName
              ) : (
                <>
                  {userName} | {personalCareer}
                </>
              )}
            </p>
          </div>
          <div className="login_user_email">{userEmail}</div>
          <div className="login_user_intro">{userIntro}</div>
          <div className="main_mypage">
            <Link
              to={
                userRole === "COMPANY"
                  ? `/company/${userId}`
                  : `/personal/${userId}`
              }
              style={{ textDecoration: "none" }}
            >
              <p>마이페이지</p>
            </Link>
          </div>
          <div className="main_logout" onClick={handleLogout}>
            <p>로그아웃</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginBannerSlide;
