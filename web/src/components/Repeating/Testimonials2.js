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
        relativePath: {
          eq: "repeating/Testimonials/Event Testimonial - left.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundLeftMobile: file(
        relativePath: { eq: "repeating/Testimonials/Event Mobile - top.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundRightDesktop: file(
        relativePath: {
          eq: "repeating/Testimonials/Event Testimonial.- Right.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundRightMobile: file(
        relativePath: { eq: "repeating/Testimonials/Evet mobile - bottom.jpg" }
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
        "Chef Alec is quite frankly a unique experience the words, private chef, doesn't lend credence to. From menu creation to sourcing to execution to service. He is a true professional who can curate any experience you please. Highly recommend",
      name: "Michael K.",
      location: "Dallas, TX",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Alec arrived right on time and the food was beyond delicious, my husband and I couldn't be happier. Alec made us feel like his only goal is to make the experience as good as possible for us and he did. Alec is amazing! Awesome food, everything was fresh (some from his own garden), wine pairing was perfect. Was the best meal we ever had!",
      name: "Mor T.",
      location: "San Diego, CA",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "Alec catered my birthday party this past weekend and I have nothing but nice things to say! Over 100 people showed up. He provided small appetizer bites that were a huge hit with my guests! I work in health and fitness and most of my guests are health conscious as well so it was refreshing to enjoy healthy/clean cooking guilt free!",
      name: "Caitlin R.",
      location: "Temecula, CA",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "I hired Chef Alec for my husband’s 50th birthday. He was easy to work with, kind and very accommodating. We had a themed party with all of my hubby's favorites plus tapas reflecting his nationality to celebrate his roots. It was thoughtful, fresh, and super delicious. Alec is a real talent and is very diverse in his knowledge. He is not only a good chef but cares about food and the people he is serving. We feel very fortunate to have found Chef Alec.",
      name: "Catherine H.",
      location: "Fallbrook, CA",
      platform: data.yelp.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "I hired Chef Alec for an intimate dinner with a group of friends. He was straight forward, punctual, very easy to communicate with, and just pleasant to be around. He can pretty much prepare anything your heart desires and has some great suggestions depending on the type of event. He can either prepare all the food at your place or bring the food to you already prepared. We chose to have the food prepared at our place because we wanted that intimate private chef feel. I referred Alec to my family and friends and definitely plan on hiring him again in the near future.",
      name: "Dimitry S.",
      location: "Denver, CO",
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
                            <div className="font-heading text-sm uppercase tracking-widest font-semibold">
                              <span className="text-primary-400">
                                {testimonial.name}/
                              </span>
                              {testimonial.location}
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
