import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import Background from "../Background/Background";

const CTA = ({ heading, headingLevel, subtext, className }) => {
  const data = useStaticQuery(graphql`
    {
      backgroundDesktop: file(
        relativePath: { eq: "repeating/CTA/CTA Meal Prep.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: { eq: "repeating/CTA/CTA Meal prep mobile.jpg" }
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
      backgroundPosition="50% 100%"
    >
      <header className="max-w-[561px]">
        <HeadingTag>
          {heading || ["Your Meal Prep Journey Starts Here"]}
        </HeadingTag>

        <p className="text-lg md:text-3xl font-light">
          {subtext || [
            "Ready to see what our chef is cooking?",
            <br className="hidden md:block" />,
            "Let’s get started!",
          ]}
        </p>
      </header>

      <ButtonSolid
        outboundLink
        href="http://livedeeplynourished.sprwt.in/currentmenu/"
        text="Shop Meals"
      />
    </Background>
  );
};

export default CTA;
