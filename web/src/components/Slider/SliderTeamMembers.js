import React, { useRef, useEffect } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-slide {
    &.slick-active {
      ${tw`z-10`}
    }
  }
`;
const Slider = ({ slideIndex, slides }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    fade: true,
    speed: 750,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // Previous Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="slick-prev"
        aria-label="Previous Slide"
      >
        <i className="far fa-chevron-left"></i>
      </button>
    );
  }

  // Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="slick-next" aria-label="Next Slide">
        <i className="far fa-chevron-right"></i>
      </button>
    );
  }

  return (
    <StyledSlider>
      <div className="container p-0">
        <Slick {...sliderSettings} ref={slider} className="h-full">
          {slides.map((content, i) => {
            return (
              <div>
                <div className="grid md:grid-cols-12 gap-y-8 md:gap-x-10">
                  <div className="md:col-start-1 md:col-span-4">
                    <GatsbyImage image={content.imagePopup} />
                  </div>

                  <div className="md:col-end-13 md:col-span-8">
                    <div className="heading-two mb-2">
                      {content.first_name} {content.last_name}
                    </div>

                    <div className="flex items-center space-x-4 mb-8 md:mb-12">
                      <p className="text-gray-900 text-xl mb-0">
                        {content.position}
                      </p>
                      <i className="fab fa-linkedin text-xl text-secondary-400"></i>
                    </div>
                    {content.bio}
                  </div>
                </div>
              </div>
            );
          })}
        </Slick>
      </div>
    </StyledSlider>
  );
};

export default Slider;
