import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonBlob from "../Button/ButtonBlob";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      alec: file(relativePath: { eq: "repeating/Meet Alec/Meet Alec.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
      }
    }
  `);

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-0 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-14 items-center">
          <div>
            <HeadingTag>Meet Chef Alec Hurley</HeadingTag>
            <p>
              Alec Hurley is a San Diego-based private chef who combines his
              extensive culinary training with ancient, timeless wisdom. You get
              meals and dining experiences uniquely tailored to feed the body,
              mind, and soul.
            </p>
            <ButtonBlob href="/alec-hurley/" text="Learn More" />
          </div>
          <div className="-mx-4 md:mx-0">
            <GatsbyImage image={data.alec.childImageSharp.gatsbyImageData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
