import React, { useEffect } from "react";
import slidImage1 from "../../main/bannerimg/slide_image1.png";
import slidImage2 from "../../main/bannerimg/slide_image2.png";
import slidImage3 from "../../main/bannerimg/slide_image3.png";

const BannerSlide = () => {
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
          <li class="slide_item">
            <img src={slidImage1} alt="배너1" />
          </li>
          <li class="slide_item">
            <img src={slidImage2} alt="배너2" />
          </li>
          <li class="slide_item">
            <img src={slidImage3} alt="배너3" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default BannerSlide;
