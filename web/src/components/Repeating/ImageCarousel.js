import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from "../Slider/SliderImageCarousel";

const StyledSlider = styled.div`
  .slick-prev,
  .slick-next {
    ${tw`h-10 md:h-14 w-10 md:w-14 bg-transparent border border-solid border-white hover:border-primary-400 hover:bg-primary-400 rounded-full top-0 bottom-0 my-auto mx-4 md:mx-6 transform-none`}
  }
`;

const ImageCarousel = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      gallery1: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 01.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      gallery2: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 02.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      gallery3: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 03.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      gallery4: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 04.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      gallery5: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 05.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      gallery6: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 06.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
      gallery7: file(
        relativePath: { eq: "repeating/Photo Carousel/gallery carousel 07.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 1200)
        }
      }
    }
  `);

  const images = [
    {
      image: data.gallery1.childImageSharp.gatsbyImageData,
    },
    {
      image: data.gallery2.childImageSharp.gatsbyImageData,
    },
    {
      image: data.gallery3.childImageSharp.gatsbyImageData,
    },
    {
      image: data.gallery4.childImageSharp.gatsbyImageData,
    },
    {
      image: data.gallery5.childImageSharp.gatsbyImageData,
    },
    {
      image: data.gallery6.childImageSharp.gatsbyImageData,
    },
    {
      image: data.gallery7.childImageSharp.gatsbyImageData,
    },
  ];

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <StyledSlider className="relative">
          <Slider>
            {images.map((image, i) => {
              return (
                <div key={i}>
                  <GatsbyImage image={image.image} />
                </div>
              );
            })}
          </Slider>
        </StyledSlider>
      </div>
    </section>
  );
};

export default ImageCarousel;
