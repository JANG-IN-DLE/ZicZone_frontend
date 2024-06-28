import React, { useEffect } from "react";
import slidImage1 from "../../main/bannerimg/slide_image1.png";
import slidImage2 from "../../main/bannerimg/slide_image2.png";
import slidImage3 from "../../main/bannerimg/slide_image3.png";

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
  });

  return (
    <>
      <div class="wrap">
        <div class="arrow left" id="prev"></div>
        <div class="arrow right" id="next"></div>
        <ul class="slide">
          <li
            class="slide_item"
            style={{ background: "url(" + slidImage1 + ")" }}
          >
            <div class="slide_text">
              <p class="text">직존</p>
              <p>기업이 인재를 채용하는 서비스</p>
            </div>
          </li>
          <li
            class="slide_item"
            style={{ background: "url(" + slidImage2 + ")" }}
          >
            <div class="slide_text">
              <p class="text">다큐프라임 보러가기</p>
              <p>인공지능 AI 발전으로 우리는 생존을 위해 무엇을 준비해야하나</p>
            </div>
          </li>
          <li
            class="slide_item"
            style={{ background: "url(" + slidImage3 + ")" }}
          >
            <div class="slide_text">
              <p class="text">네이버 클라우드 바로가기</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default NoLoginBannerSlide;
