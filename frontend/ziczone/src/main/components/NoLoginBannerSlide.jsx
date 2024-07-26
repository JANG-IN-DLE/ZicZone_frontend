import React, { useEffect } from "react";
import slidImage1 from "../../main/bannerimg/slide_image1.png";
import slidImage2 from "../../main/bannerimg/slide_image2.png";
import slidImage3 from "../../main/bannerimg/slide_image3.png";
import { Link } from "react-router-dom";
import left from "../../main/left.png";
import right from "../../main/right.png";

const NoLoginBannerSlide = () => {
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
    const slideItems = document.querySelectorAll(".slide_item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const totalSlides = slideItems.length;
    let currentIndex = 1;
    let slideInterval;

    slide.style.width = `${1080 * totalSlides}px`; // 동적으로 슬라이드 목록의 너비 설정
    slide.style.transform = `translateX(-${currentIndex * 1080}px)`;

    function updateSlidePosition(instant = false) {
      const newTransformValue = -currentIndex * 1080;
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

  return (
    <>
      <div className="wrap">
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
            className="slide_item"
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
              className="slide_item"
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
            className="slide_item"
            style={{ background: `url(${slideItems[0].src})` }}
          >
            <div className="slide_text">
              <p className="slide_in_text">{slideItems[0].text}</p>
              <p className="slide_in_text_sub">{slideItems[0].subText}</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NoLoginBannerSlide;
