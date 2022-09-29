import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ModalMeals from "../Modal/ModalMeals";

const SeasonalMeals = ({ className, headingLevel, heading }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const data = useStaticQuery(graphql`
    {
      summer1: file(relativePath: { eq: "3.0 Food Menu/Summer 1.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      summer2: file(relativePath: { eq: "3.0 Food Menu/Summer 2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      summer3: file(relativePath: { eq: "3.0 Food Menu/Summer 3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }
      summer4: file(relativePath: { eq: "3.0 Food Menu/Summer 4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 564)
        }
      }           
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

      summerIcon: file(relativePath: { eq: "3.0 Food Menu/Summer.svg" }) {
        publicURL
      }
      fallIcon: file(relativePath: { eq: "3.0 Food Menu/Fall icon.svg" }) {
        publicURL
      }
      winterIcon: file(relativePath: { eq: "3.0 Food Menu/Winter.svg" }) {
        publicURL
      }
      springIcon: file(relativePath: { eq: "3.0 Food Menu/Spring Icon.svg" }) {
        publicURL
      }
    }
  `);

  const meals = [
    {
      id: 0,
      season: "Summer",
      image: data.summer1.childImageSharp.gatsbyImageData,
      title:
        "Rotisserie Chicken w/ Summer Squash, Fingerlings & Blackberry Mint Sauce",
      description:
        "All of our summertime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 1,
      season: "Summer",
      image: data.summer2.childImageSharp.gatsbyImageData,
      title:
        "Rotisserie Chicken w/ Summer Squash, Fingerlings & Blackberry Mint Sauce",
      description:
        "All of our summertime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 2,
      season: "Summer",
      image: data.summer3.childImageSharp.gatsbyImageData,
      title: "Cilantro Lime Chicken, Roasted Potatoes & Mojo Sauce",
      description:
        "All of our summertime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 3,
      season: "Summer",
      image: data.summer4.childImageSharp.gatsbyImageData,
      title:
        "Wild Salmon Salad w/ Beets, Cucumber, Chickpeas, Arugula & Sesame Balsamic Dressing",
      description:
        "All of our summertime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
  ];
  const fallMeals = [
    {
      id: 4,
      season: "Fall",
      image: data.fall1.childImageSharp.gatsbyImageData,
      title: "Cruciferous Veggies & Quinoa, Fresh Herb Ranch & Wild Salmon",
      description:
        "All of our fall menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 5 ,
      season: "Fall",
      image: data.fall2.childImageSharp.gatsbyImageData,
      title: "Citrus Chicken, Stir Fry Teff & Ginger Almond Butter Sauce",
      description:
        "All of our fall menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 6,
      season: "Fall",
      image: data.fall3.childImageSharp.gatsbyImageData,
      title:
        "Salsa Fresca Bowl, Beans & Rice, Sauteed Vegetables & Sweet Plantains",
      description:
        "All of our fall menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3 items-start">
            {fallMeals.map((meal, i) => {
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

      <ModalMeals slideIndex={slideIndex} slides={fallMeals} />
    </>
  );
};

export default SeasonalMeals;
