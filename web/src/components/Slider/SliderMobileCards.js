import React, { Component } from "react";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-dots {
    ${tw`mt-6`}
  }
  .slick-list {
    ${tw`overflow-visible p-0!`}
  }
  .slick-track {
    ${tw`flex items-center`}
  }
  .slick-slide {
    > div {
      ${tw`mr-6`}
    }
    div {
      ${tw`outline-none`}
    }
  }
  .slick-prev,
  .slick-next {
    ${tw`top-auto bottom-0 transform translate-y-0 bg-white w-10 h-10 border border-solid border-gray-400 rounded-full transition-all duration-300 ease-linear z-10`}
    &:before {
      ${tw`hidden`}
    }
    i {
      ${tw`text-primary-400 text-sm transition-all duration-300 ease-linear`}
    }
    &:hover {
      ${tw`bg-primary-400 border-primary-400`}
      i {
        ${tw`text-white`}
      }
    }
  }
  .slick-prev {
    ${tw`left-auto! right-0 mr-16`}
  }
  .slick-dots {
    ${tw`relative text-left`}
    li {
      ${tw`ml-0 mr-3 my-0 w-2 h-2`}
      button {
        ${tw`bg-primary-400 rounded-full opacity-25 w-2 h-2 p-0 transition-all duration-300 ease-linear`}
        &:before {
          ${tw`hidden`}
        }
      }
      &.slick-active {
        button {
          ${tw`opacity-100`}
        }
      }
    }
    &:before {
      content: "Swipe to discover";
      ${tw`text-xs font-bold block text-gray-200`}
    }
  }
`;
export default class Slider extends Component {
  componentDidMount() {
    var self = this;
    setTimeout(function () {
      self.forceUpdate();
    }, 100);
  }

  render() {
    const { children } = this.props;

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
        <button
          onClick={onClick}
          className="slick-next"
          aria-label="Next Slide"
        >
          <i className="far fa-chevron-right"></i>
        </button>
      );
    }

    const sliderSettings = {
      responsive: [
        {
          breakpoint: 10000,
          settings: "unslick",
        },
        {
          breakpoint: 1023,
          settings: {
            dots: true,
            arrows: true,
            infinite: false,
            speed: 750,
            autoplay: true,
            autoplaySpeed: 7500,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
          },
        },
      ],
    };

    return (
      <StyledSlider>
        <Slick
          {...sliderSettings}
          className="grid grid-cols-1 md:grid-cols-4 md:gap-12"
        >
          {children}
        </Slick>
      </StyledSlider>
    );
  }
}
