import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import DeliveryDays from "../components/Repeating/DeliveryDays";
import Ingredients from "../components/Repeating/Ingredients";
import SupportedDiets from "../components/Repeating/SupportedDiets";
import CallToAction from "../components/Repeating/CTA";
import ModalMeals from "../components/Modal/ModalMeals";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

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
    {
      id: 4,
      season: "Fall",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 5,
      season: "Fall",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 6,
      season: "Fall",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 7,
      season: "Fall",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 8,
      season: "Winter",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 9,
      season: "Winter",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 10,
      season: "Winter",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 11,
      season: "Winter",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 12,
      season: "Spring",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 13,
      season: "Spring",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 14,
      season: "Spring",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
    {
      id: 15,
      season: "Spring",
      image: data.productPlaceholder.childImageSharp.gatsbyImageData,
      title: "Menu Item Name Lorem Ipsum Dolor Sit Amet",
      description:
        "Short description of the meal. This can include ways to customize for specific dietary restrictions & preferences. Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, purus sit amet luctus venenatis, magna fringilla urna, porttitor",
    },
  ];

  const [setSeason, setSeasonState] = useState("Summer");
  const [setActive, setActiveState] = useState(null);

  const categoryFilterClickHandler = (category, id) => {
    setSeasonState(category);
    setActiveState(id);
  };

  const filteredProducts = meals.filter((meal) =>
    meal.season.includes(setSeason)
  );

  return (
    <Layout>
      <SearchEngineOptimization
        title="Meal Prep Menu | San Diego | Deeply Nourished"
        description="Nourish your body with a meal prep menu full of chef-inspired, seasonal dishes. They're cooked to flavorful perfection and packed with healthy goodness."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[800px] mx-auto mb-10 md:mb-12">
            <h1>Meal Prep Menu</h1>
            <p className="font-heading text-lg md:text-2xl">
              Nourish your body with chef-inspired, seasonal dishes prepared
              from the heart. Cooked to flavorful perfection. Packed with
              healthy goodness.
            </p>
          </header>

          <div className="hidden md:flex justify-center space-x-8 lg:space-x-10 mb-18 border-b-2 border-gray-200 max-w-[788px] mx-auto">
            <button
              onKeyDown={() => categoryFilterClickHandler("Summer", 1)}
              onClick={() => categoryFilterClickHandler("Summer", 1)}
              className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
                setActive === 1
                  ? "text-primary-400 after:w-full after:left-0 after:right-auto"
                  : "text-gray-600 after:w-0 after:left-auto after:right-0"
              }`}
            >
              Summer Menu
            </button>
            <button
              onKeyDown={() => categoryFilterClickHandler("Fall", 2)}
              onClick={() => categoryFilterClickHandler("Fall", 2)}
              className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
                setActive === 2
                  ? "text-primary-400 after:w-full after:left-0 after:right-auto"
                  : "text-gray-600 after:w-0 after:left-auto after:right-0"
              }`}
            >
              Fall Menu
            </button>
            <button
              onKeyDown={() => categoryFilterClickHandler("Winter", 3)}
              onClick={() => categoryFilterClickHandler("Winter", 3)}
              className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
                setActive === 3
                  ? "text-primary-400 after:w-full after:left-0 after:right-auto"
                  : "text-gray-600 after:w-0 after:left-auto after:right-0"
              }`}
            >
              Winter Menu
            </button>
            <button
              onKeyDown={() => categoryFilterClickHandler("Spring", 4)}
              onClick={() => categoryFilterClickHandler("Spring", 4)}
              className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
                setActive === 4
                  ? "text-primary-400 after:w-full after:left-0 after:right-auto"
                  : "text-gray-600 after:w-0 after:left-auto after:right-0"
              }`}
            >
              Spring Menu
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3">
            {filteredProducts.map((meal, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-meals"
                  onClick={() => setSlideIndex(meal.id)}
                  key={i}
                  className="text-left shadow-4xl md:shadow-none md:hover:shadow-4xl bg-white pt-3 px-3 pb-5"
                >
                  <div className="overflow-hidden mb-5">
                    <GatsbyImage
                      image={meal.image}
                      alt={meal.title}
                      className="w-full"
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

      <Ingredients />
      <SupportedDiets />
      <DeliveryDays />
      <Testimonials className="mb-0" />
      <CallToAction />
      <ModalMeals slideIndex={slideIndex} slides={meals} />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    productPlaceholder: file(
      relativePath: { eq: "global/product-placeholder.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 396)
      }
    }
  }
`;
export default Page;
