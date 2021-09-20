import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  ${tw`relative`}
  &:before {
    content: "";
    ${tw`absolute left-0 w-full h-full bg-white transform -translate-x-full z-10`}
  }
  .slick-list,
  .slick-slider {
    ${tw`md:overflow-visible`}
  }
  .slick-prev {
    ${tw`left-0`}
  }
  .slick-next {
    ${tw`right-0`}
  }
  .slider-nav {
    ${tw`md:hidden! pr-32 md:pr-96`}
    .slick-list,
    .slick-slider {
      ${tw`overflow-visible`}
    }
  }
`;
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  handleAfterChange = (index) => {
    this.setState({
      currentSlide: index,
    });
  };

  nextSlide = () => {
    this.state.nav2.slickNext();
  };
  prevSlide = () => {
    this.state.nav2.slickPrev();
  };

  render() {
    const sliderSettings = {
      arrows: false,
      dots: false,
      speed: 750,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      afterChange: this.handleAfterChange,
      beforeChange: this.handleBeforeChange,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            fade: true,
          },
        },
      ],
    };
    const imageSliderSettings = {
      arrows: false,
      dots: false,
      infinite: false,
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
    };

    return (
      <StyledSlider>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center relative">
          <div className="md:col-start-1 md:col-span-3 relative h-full hidden md:block">
            <div className="bg-white h-full w-[100vw] absolute top-0 right-0 z-20"></div>
            <ul className="left-0 top-0 text-left h-full flex flex-col space-y-5 pt-16 relative z-20 pr-4">
              {this.props.slides.map((slide, i) => {
                return (
                  <li className="w-full" key={i}>
                    <button
                      className={`font-semibold text-left transition-all duration-300 ease-linear ${
                        this.state.currentSlide === i
                          ? "text-primary-400"
                          : "text-gray-600"
                      }`}
                      onClick={(e) => this.slider1.slickGoTo(i)}
                      onKeyDown={(e) => this.slider1.slickGoTo(i)}
                    >
                      {slide.heading}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-end-13 md:col-span-9">
            <div className="relative">
              <Slick
                className="slider-nav md:hidden mb-8 -mx-4"
                {...imageSliderSettings}
              >
                {this.props.slides.map((slide, i) => {
                  return (
                    <div key={i}>
                      <GatsbyImage
                        image={slide.image}
                        alt={slide.heading}
                        className="mr-2.5"
                      />
                    </div>
                  );
                })}
              </Slick>

              <Slick {...sliderSettings}>
                {this.props.slides.map((slide, i) => {
                  return (
                    <div className="" key={i}>
                      <div className="grid md:grid-cols-12 gap-y-4">
                        <div className="md:col-start-1 md:col-span-4 hidden md:block">
                          <GatsbyImage
                            image={slide.image}
                            alt={slide.heading}
                          />
                        </div>
                        <div className="md:col-end-13 md:col-span-8 md:pt-10 lg:pt-20 xl:pt-32 md:pl-6 lg:pl-10 xl:pl-12 lg:pr-7 xl:pr-14">
                          <h3 className="heading-four">{slide.heading}</h3>
                          <p>{slide.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slick>

              <div className="flex justify-end items-center space-x-4 lg:space-x-8 md:absolute right-0 bottom-0 md:mr-8 lg:mr-12 xl:mr-16">
                <button
                  onClick={this.prevSlide}
                  className={`focus:outline-none w-10 md:w-14 h-10 md:h-14 rounded-full flex justify-center items-center border bg-white hover:bg-primary-400 hover:text-white ${
                    this.state.currentSlide + 1 === 1
                      ? "text-gray-300 border-gray-200 pointer-events-none"
                      : "text-gray-600 border-gray-400 hover:border-primary-400"
                  }`}
                >
                  <i className="far fa-arrow-left text-sm md:text-base focus:no-underline"></i>
                </button>

                <div className="text-black text-sm md:text-base font-semibold tracking-wide">
                  <span>
                    {"0"}
                    {this.state.currentSlide + 1}
                  </span>
                  {" / "}
                  <span>0{this.props.slides.length}</span>
                </div>

                <button
                  onClick={this.nextSlide}
                  className={`focus:outline-none w-10 md:w-14 h-10 md:h-14 rounded-full flex justify-center items-center border bg-white hover:bg-primary-400 hover:text-white ${
                    this.state.currentSlide + 1 === this.props.slides.length
                      ? "text-gray-300 border-gray-200 pointer-events-none"
                      : "text-gray-600 border-gray-400 hover:border-primary-400"
                  }`}
                >
                  <i className="far fa-arrow-right text-sm md:text-base focus:no-underline"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledSlider>
    );
  }
}
