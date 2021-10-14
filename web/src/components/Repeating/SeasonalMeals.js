import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ModalMeals from "../Modal/ModalMeals";

const SeasonalMeals = ({ className, headingLevel, heading }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const data = useStaticQuery(graphql`
    {
      fall1: file(relativePath: { eq: "3.0 Food Menu/Fall 1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      fall2: file(relativePath: { eq: "3.0 Food Menu/Fall 2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      fall3: file(relativePath: { eq: "3.0 Food Menu/Fall 3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      fallIcon: file(relativePath: { eq: "3.0 Food Menu/Fall icon.svg" }) {
        publicURL
      }
    }
  `);

  const meals = [
    {
      season: "Fall",
      image: data.fall1.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      season: "Fall",
      image: data.fall2.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      season: "Fall",
      image: data.fall3.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <>
      <section className={`${className || "mb-20 md:mb-32"}`}>
        <div className="container">
          <header className="text-center mb-10 md:mb-14">
            <HeadingTag>{heading || "Sample Menu: Seasonal Fare"}</HeadingTag>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3">
            {meals.map((meal, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-meals"
                  onClick={() => setSlideIndex(meal.id)}
                  key={i}
                  className="text-left shadow-4xl md:shadow-none md:hover:shadow-4xl bg-white pt-3 px-3 pb-5"
                >
                  <div className="relative mb-5">
                    <GatsbyImage
                      image={meal.image}
                      alt={meal.title}
                      className="w-full"
                    />
                    <div className="absolute -bottom-8 right-5 z-10">
                      {meal.season === "Summer" && (
                        <img src={data.summerIcon.publicURL} />
                      )}
                      {meal.season === "Spring" && (
                        <img src={data.springIcon.publicURL} />
                      )}
                      {meal.season === "Fall" && (
                        <img src={data.fallIcon.publicURL} />
                      )}
                      {meal.season === "Winter" && (
                        <img src={data.winterIcon.publicURL} />
                      )}
                    </div>
                  </div>
                  <div
                    className={`decorative-text mb-2 ${
                      meal.season === "Spring" && "text-primary-400"
                    } ${meal.season === "Fall" && "text-[#E4760F]"} ${
                      meal.season === "Winter" && "text-[#228AC5]"
                    }`}
                  >
                    {meal.season} Menu
                  </div>
                  <h3 className="heading-five text-gray-600 mb-0">
                    {meal.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ModalMeals slideIndex={slideIndex} slides={meals} />
    </>
  );
};

export default SeasonalMeals;
