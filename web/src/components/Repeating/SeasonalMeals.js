import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ModalMeals from "../Modal/ModalMeals";

const SeasonalMeals = ({ className, headingLevel, heading }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const data = useStaticQuery(graphql`
    {
      productPlaceholder: file(
        relativePath: { eq: "global/product-placeholder.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 396)
        }
      }
    }
  `);

  const meals = [
    {
      id: 0,
      season: "Summer",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 1,
      season: "Summer",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 2,
      season: "Summer",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 3,
      season: "Summer",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5 lg:gap-x-10 text-center">
            {meals.map((meal, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-meals"
                  onClick={() => setSlideIndex(i)}
                  key={i}
                  className="group relative text-left shadow-4xl md:shadow-none bg-white md:bg-transparent p-3.5 md:px-0"
                >
                  <div className="overflow-hidden mb-5">
                    <GatsbyImage
                      image={meal.image}
                      alt={meal.title}
                      className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <div className="decorative-text mb-2">{meal.season} Menu</div>
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
