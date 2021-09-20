import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Slider from "../Slider/SliderWhatsImportant";

const Treatments = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      sustainability: file(
        relativePath: {
          eq: "repeating/What is Important/01 Sustainability .jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 578)
        }
      }
      regenerative: file(
        relativePath: { eq: "repeating/What is Important/02 Regenerative.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 578)
        }
      }
      transparency: file(
        relativePath: { eq: "repeating/What is Important/03 Transparency.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 578)
        }
      }
    }
  `);

  const treatments = [
    {
      heading: "Sustainability",
      text: "It’s up to everyone to ensure our planet will support future generations. It’s a core principle that Deeply Nourished follows.",
      image: data.sustainability.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Regenerative Agriculture",
      text: "Deeply Nourished supports agricultural practices that ensure the health of ecosystems and help restore soil quality.",
      image: data.regenerative.childImageSharp.gatsbyImageData,
    },
    {
      heading: "Transparency",
      text: "Whether it’s the ingredients, the process, or the pricing, Deeply Nourished is always completely transparent with its customers.",
      image: data.transparency.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32 overflow-x-hidden"}`}>
      <div className="container">
        <header className="mb-10 md:mb-12">
          <HeadingTag>What’s Important</HeadingTag>
        </header>

        <Slider slides={treatments} headingTag={HeadingTag} />
      </div>
    </section>
  );
};

export default Treatments;
