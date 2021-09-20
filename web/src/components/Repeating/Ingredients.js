import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ButtonBlob from "../Button/ButtonBlob";

const About = ({ className, headingLevel, hideButton }) => {
  const data = useStaticQuery(graphql`
    {
      alec: file(
        relativePath: { eq: "repeating/Ingredients/Ingredients.jpg" }
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
          <div>
            <GatsbyImage image={data.alec.childImageSharp.gatsbyImageData} />
          </div>
          <div>
            <HeadingTag>From Nature’s Kitchen</HeadingTag>
            <p>
              Simple, easily digestible ingredients are key to a healthy diet.
              That’s why all meals are made with only natural ingredients that
              are:
            </p>

            <ul className="styled-check-list mb-8">
              <li>Locally-sourced</li>
              <li>Hormone-free</li>
              <li>Gluten-free</li>
              <li>Dairy-free</li>
            </ul>

            {hideButton || (
              <ButtonBlob href="/food-philosophy/" text="Our Food Philosophy" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
