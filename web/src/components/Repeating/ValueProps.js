import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const ValueProps = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(
        relativePath: { eq: "repeating/Why Us/Value 1 - Seasonal.svg" }
      ) {
        publicURL
      }
      icon2: file(
        relativePath: { eq: "repeating/Why Us/Value 2 - Garden.svg" }
      ) {
        publicURL
      }
      icon3: file(
        relativePath: { eq: "repeating/Why Us/Value 3 - Sustainable.svg" }
      ) {
        publicURL
      }
    }
  `);

  const content = [
    {
      icon: data.icon1.publicURL,
      heading: "Simple & Seasonal",
      text: "You get simple, seasonally inspired menus prepared with a healthy body in mind.",
    },
    {
      icon: data.icon2.publicURL,
      heading: "Garden Fresh",
      text: "All menu items are made fresh with locally sourced, organic ingredients.",
    },
    {
      icon: data.icon3.publicURL,
      heading: "Environmentally Conscious",
      text: "Ready-to-go meals are packaged in 100% compostable boxes to protect the environment.",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="text-center mb-4">
          <div className="decorative-text">Our Philosophy</div>
          <HeadingTag>{heading || "Meal Prep Done Differently"}</HeadingTag>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10 text-center">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <div className="mb-3.5">
                  <img
                    src={content.icon}
                    alt={content.heading}
                    className="mx-auto"
                  />
                </div>
                <h3 className="heading-five mb-2">{content.heading}</h3>
                <p className="mb-0">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
