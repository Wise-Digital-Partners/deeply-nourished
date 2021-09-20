import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import Background from "../Background/Background";

const CTA = ({ heading, headingLevel, subtext, className }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/CTA/CTA Events.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/CTA/CTA Events mobile.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  const backgroundImages = [
    getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  return (
    <Background
      backgroundImages={backgroundImages}
      padding="pt-16 md:pt-28 pb-80 md:pb-32"
      backgroundPosition="50% 0%"
    >
      <header className="max-w-[561px]">
        <HeadingTag className="text-white">
          {heading || ["Contact Chef Alec"]}
        </HeadingTag>

        <p className="text-lg md:text-3xl font-light text-gray-50">
          {subtext || "Ready to get started? Connect with the chef."}
        </p>
      </header>

      <ButtonSolid modal="modal-contact" text="Plan Your Event" />
    </Background>
  );
};

export default CTA;
