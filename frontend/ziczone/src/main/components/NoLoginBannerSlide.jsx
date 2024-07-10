import React, { useEffect } from "react";
import slidImage1 from "../../main/bannerimg/slide_image1.png";
import slidImage2 from "../../main/bannerimg/slide_image2.png";
import slidImage3 from "../../main/bannerimg/slide_image3.png";
import { Link } from "react-router-dom";

const NoLoginBannerSlide = () => {
  const slideItems = [
    { id: 1, src: slidImage1, alt: "배너1" },
    { id: 2, src: slidImage2, alt: "배너2" },
    { id: 3, src: slidImage3, alt: "배너3" },
  ];
  useEffect(() => {
    const slide = document.querySelector(".slide");
    const slideItems = document.querySelectorAll(".slide_item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
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
      slideInterval = setInterval(nextSlide, 3000);
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
  });

  return (
    <>
      <div className="wrap">
        <div className="arrow left" id="prev"></div>
        <div className="arrow right" id="next"></div>
        <ul className="slide">
          <li
            className="slide_item"
            style={{ background: "url(" + slidImage1 + ")" }}
          >
            <Link to="/ziczoneintro" style={{ textDecoration: "none" }}>
              <div className="slide_text">
                <p className="text">직존</p>
                <p>기업이 인재를 채용하는 서비스</p>
              </div>
            </Link>
          </li>
          <li
            className="slide_item"
            style={{ background: "url(" + slidImage2 + ")" }}
            onClick={() =>
              window.open("https://www.youtube.com/watch?v=sTF55z2i5zI&t=9s")
            }
          >
            <div className="slide_text">
              <p className="text">다큐프라임 보러가기</p>
              <p>인공지능 AI 발전으로 우리는 생존을 위해 무엇을 준비해야하나</p>
            </div>
          </li>
          <li
            className="slide_item"
            style={{ background: "url(" + slidImage3 + ")" }}
            onClick={() => window.open("https://www.ncloud.com/")}
          >
            <div className="slide_text">
              <p className="text">네이버 클라우드 바로가기</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NoLoginBannerSlide;
