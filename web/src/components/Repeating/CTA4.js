import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import Background from "../Background/Background";

const CTA = ({ heading, headingLevel, subtext, className }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "10.0 Ayurveda/5.0 Ayurveda CTA Contact.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "10.0 Ayurveda/CTA Ayurveda mobile.jpg" }
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
      padding="pt-24 md:pt-28 pb-76 md:pb-32"
      backgroundPosition="50% 0%"
    >
      <header className="max-w-[520px]">
        <HeadingTag className="text-white">
          {heading || ["Let’s Connect"]}
        </HeadingTag>

        <p className="text-lg md:text-3xl font-light text-gray-50">
          {subtext || "Want to lean more about Ayurveda nutrition?"}
        </p>
      </header>

      <ButtonSolid modal="modal-contact" text="Contact the Chef" />
    </Background>
  );
};

export default CTA;
