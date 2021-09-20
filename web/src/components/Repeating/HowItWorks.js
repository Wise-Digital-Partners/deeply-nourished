import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ValueProps = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      icon1: file(relativePath: { eq: "repeating/How it Works/Step 1.svg" }) {
        publicURL
      }
      icon2: file(relativePath: { eq: "repeating/How it Works/Step 2.svg" }) {
        publicURL
      }
      icon3: file(relativePath: { eq: "repeating/How it Works/Step 3.svg" }) {
        publicURL
      }
      icon4: file(relativePath: { eq: "repeating/How it Works/Step 4.svg" }) {
        publicURL
      }
    }
  `);

  const content = [
    {
      image: data.icon1.publicURL,
      subtitle: "Step 01",
      heading: "Choose Your Meals",
      text: "Select your favorites and come back often to see fresh new dishes.",
    },
    {
      image: data.icon2.publicURL,
      subtitle: "Step 02",
      heading: "Fresh Preparation",
      text: "Alec, your personal chef, prepares, cooks, and boxes your meals in compostable packaging.",
    },
    {
      image: data.icon3.publicURL,
      subtitle: "Step 03",
      heading: "Front-Door Delivery",
      text: "You get personal delivery right to your front door or at your office.",
    },
    {
      image: data.icon4.publicURL,
      subtitle: "Step 04",
      heading: "Store, Heat & Eat!",
      text: "Refrigerate your fresh meals, heat when ready, and plate your delicious dish!",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="text-center mb-10 md:mb-20">
          <HeadingTag>{heading || "How it Works"}</HeadingTag>
        </header>

        <div className="grid md:grid-cols-4 gap-y-6 md:gap-y-10 md:gap-x-6 text-center max-w-[280px] md:max-w-none mx-auto">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <div className="mb-3.5">
                  <img
                    src={content.image}
                    alt={content.heading}
                    className="mx-auto"
                  />
                </div>
                <div className="decorative-text mb-1.5">{content.subtitle}</div>
                <h3 className="heading-five mb-1.5">{content.heading}</h3>
                <p className="text-gray-900 mb-0">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
