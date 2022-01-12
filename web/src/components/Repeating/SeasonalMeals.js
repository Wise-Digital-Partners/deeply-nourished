import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ModalMeals from "../Modal/ModalMeals";

const SeasonalMeals = ({ className, headingLevel, heading }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const data = useStaticQuery(graphql`
    {
      winter1: file(relativePath: { eq: "3.0 Food Menu/Winter 1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      winter2: file(relativePath: { eq: "3.0 Food Menu/Winter 2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      winter3: file(relativePath: { eq: "3.0 Food Menu/Winter 3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      winterIcon: file(relativePath: { eq: "3.0 Food Menu/Winter.svg" }) {
        publicURL
      }
    }
  `);

  const meals = [
    {
      season: "Winter",
      image: data.winter1.childImageSharp.gatsbyImageData,
      title: "Stewed White Beans w/ Fresh Herbs & Winter Vegetables",
      description:
        "All of our winter menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      season: "Winter",
      image: data.winter2.childImageSharp.gatsbyImageData,
      title:
        "Meatloaf w/ Rosemary Balsamic Tomato Glaze, Baby Potatoes & Broccoli",
      description:
        "All of our winter menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      season: "Winter",
      image: data.winter3.childImageSharp.gatsbyImageData,
      title: "Chicken Karahi w/ Broccoli & Wild Rice",
      description:
        "All of our winter menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
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
