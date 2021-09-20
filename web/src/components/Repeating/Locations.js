import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const About = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      locations: file(
        relativePath: { eq: "repeating/Locations/Locations.jpg" }
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
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-12 items-center">
          <div className="order-2 md:order-1">
            <GatsbyImage
              image={data.locations.childImageSharp.gatsbyImageData}
            />
          </div>
          <div className="order-1 md:order-2">
            <HeadingTag>Local, Organic Meal Prep Delivery</HeadingTag>
            <p>
              Get fresh, healthy, chef-created meals. Serving these locations
              and more throughout San Diego County:
            </p>

            <ul className="styled-disc-list">
              <li>Downtown San Diego</li>
              <li>Carlsbad</li>
              <li>East County</li>
              <li>Encinitas</li>
              <li>Escondido</li>
              <li>La Jolla & Bird Rock</li>
              <li>Solana Beach</li>
              <li>Sorrento Valley</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
