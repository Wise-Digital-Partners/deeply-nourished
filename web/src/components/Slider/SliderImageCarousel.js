import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
`;

const Slider = ({ slideIndex, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center transition-colors duration-300 ease-linear slick-prev"
        aria-label="Previous Slide"
      >
        <i class="far fa-arrow-left text-base md:text-lg text-white group-hover:text-white"></i>
      </button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !flex items-center justify-center transition-colors duration-300 ease-linear slick-next"
        aria-label="Next Slide"
      >
        <i class="far fa-arrow-right text-base md:text-lg text-white group-hover:text-white"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // responsive: [
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  };

  return (
    <StyledSlider>
      <Slick {...sliderSettings} ref={slider}>
        {children}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
