import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      supportedDiets: file(
        relativePath: { eq: "repeating/Supported Diets/Supported Diets.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-8 items-center">
          <div className="order-2 md:order-1">
            <HeadingTag>Diet-Friendly Meals</HeadingTag>
            <p>
              Are you on a special diet? All of Deeply Nourished’s organic meal
              prep items fit a healthy lifestyle. Whether it's vegan,
              vegetarian, keto or paleo, each can also be personalized
              especially for you. Just ask!
            </p>
            <ButtonSolid
              href="http://livedeeplynourished.sprwt.in/currentmenu/"
              outboundLink={true}
              text="Start Your Order"
            />
          </div>
          <div className="order-1 md:order-2">
            <GatsbyImage
              image={data.supportedDiets.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
