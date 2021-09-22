import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Background from "../Background/Background";
import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  .slick-prev,
  .slick-next {
    ${tw`h-14 w-14 bg-transparent border border-solid border-gray-400 hover:border-primary-400 hover:bg-primary-400 rounded-full top-auto bottom-0 transform-none`}
  }
  .slick-dots {
    ${tw`relative flex! items-center justify-center space-x-2 -top-6 mb-0`}
    li {
      ${tw`h-2.5 w-2.5 rounded-full bg-gray-400 mr-0 transition-all duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-primary-400`}
      }
    }
  }
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundLeftDesktop: file(
        relativePath: { eq: "repeating/Testimonials/Meal Testimonial left.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundLeftMobile: file(
        relativePath: { eq: "repeating/Testimonials/Meal Mobile - top.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundRightDesktop: file(
        relativePath: {
          eq: "repeating/Testimonials/Meal Testimonial Right.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundRightMobile: file(
        relativePath: { eq: "repeating/Testimonials/Meal Mobile - bottom.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      yelp: file(relativePath: { eq: "repeating/Testimonials/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 64)
        }
      }
    }
  `);

  const testimonials = [
    {
      quote:
        "We are vegans and were looking for food delivered and made with quality and love... Wow, did Alec really deliver beyond expectations. AMAZING!! HIGHLY recommended. Make food your medicine!",
      name: "Jay C.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Chef Alec is beyond amazing! I was looking for healthy, nutrient-dense (and gluten-free, I have celiac) meals for my postpartum time, and Chef Alec went above and beyond! Even my husband, who prefers gluten, LOVES his meals. He has truly exceeded our expectations, and we couldn't be happier!!",
      name: "Rebecca R.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "WOW! I am amazed by Alec in every way. Not only is his cooking AWESOME, but he's great with communication. Super polite and helpful and can calculate macros and build custom meals that are exactly what I want. I would hire him again in an instant!",
      name: "John S.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "WOW! Such a good find. Deeply Nourished has served as a lifeline to me during a difficult season of life. The meals are packed beautifully in compostable packaging, each meal so colorful and generous. Truly a feast for the eyes and nourishment for body and soul. Have I mentioned they're delicious? Every. Single. One.",
      name: "Gina D.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "We can absolutely taste the quality of food and the care Chef Alec takes when preparing/packing/delivering. I can't believe the amount of flavor he can pack into each generous portion. The veggies are flavorful, the proteins are perfectly cooked, and each sauce/seasoning accompaniment is spot on with great balance.",
      name: "Jordan T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`bg-gray-50 ${className || "mb-20 md:mb-32"}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-start-1 lg:col-span-3 lg:h-full">
          <Background
            backgroundImages={
              data.backgroundLeftDesktop.childImageSharp.gatsbyImageData
            }
            className="h-full hidden lg:block"
          />

          <div className="lg:hidden">
            <GatsbyImage
              image={data.backgroundLeftMobile.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>

        <div className="lg:col-start-4 lg:col-span-6 pt-10 pb-8 px-12 lg:px-18 xl:px-24">
          <header className="mb-7 lg:mb-14 text-center">
            <HeadingTag>Sharing The Love</HeadingTag>
          </header>

          <StyledSlider className="relative">
            <Slider>
              {testimonials.map((testimonial, i) => {
                return (
                  <div key={i}>
                    <blockquote>
                      <q className="font-heading text-lg lg:text-2xl text-center">
                        {testimonial.quote}
                      </q>
                      <footer className="mt-10 lg:mt-12 mb-22 lg:mb-24 mx-auto px-6 lg:px-0">
                        <div>
                          <cite className="not-italic flex items-center justify-between">
                            <div className="font-heading text-sm uppercase text-secondary-700 tracking-widest font-semibold">
                              {testimonial.name}
                            </div>
                            <div>
                              <GatsbyImage image={testimonial.platform} />
                            </div>
                          </cite>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                );
              })}
            </Slider>
          </StyledSlider>
        </div>

        <div className="lg:col-end-13 lg:col-span-3 h-full">
          <Background
            backgroundImages={
              data.backgroundRightDesktop.childImageSharp.gatsbyImageData
            }
            className="h-full hidden lg:block"
          />

          <div className="lg:hidden">
            <GatsbyImage
              image={data.backgroundRightMobile.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
