import React, { useRef, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
  /* .slick-dots {
      li,
      button {
         ${tw`w-2 h-2`}
      }
      li {
         ${tw`mx-2`}
      }
   } */
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
        <i class="far fa-arrow-left text-lg text-gray-600 group-hover:text-white"></i>
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
        <i class="far fa-arrow-right text-lg text-gray-600 group-hover:text-white"></i>
      </button>
    );
  }

  const sliderSettings = {
    dots: true,
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
