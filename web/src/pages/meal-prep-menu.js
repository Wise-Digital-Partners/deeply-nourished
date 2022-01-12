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
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

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
    {
      id: 4,
      season: "Fall",
      image: data.fall1.childImageSharp.gatsbyImageData,
      title: "Cruciferous Veggies & Quinoa, Fresh Herb Ranch & Wild Salmon",
      description:
        "All of our fall menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 5,
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
    {
      id: 7,
      season: "Winter",
      image: data.winter1.childImageSharp.gatsbyImageData,
      title: "Stewed White Beans w/ Fresh Herbs & Winter Vegetables",
      description:
        "All of our winter menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 8,
      season: "Winter",
      image: data.winter2.childImageSharp.gatsbyImageData,
      title:
        "Meatloaf w/ Rosemary Balsamic Tomato Glaze, Baby Potatoes & Broccoli",
      description:
        "All of our winter menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 9,
      season: "Winter",
      image: data.winter3.childImageSharp.gatsbyImageData,
      title: "Chicken Karahi w/ Broccoli & Wild Rice",
      description:
        "All of our winter menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 10,
      season: "Spring",
      image: data.spring1.childImageSharp.gatsbyImageData,
      title:
        "Zucchini Noodles w/ Fresh Herb Pesto, Roasted Peppers & Meatballs",
      description:
        "All of our springtime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 11,
      season: "Spring",
      image: data.spring2.childImageSharp.gatsbyImageData,
      title: "Curry Halibut w/ Quinoa, Spring Greens & Baby Radishes",
      description:
        "All of our springtime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 12,
      season: "Spring",
      image: data.spring3.childImageSharp.gatsbyImageData,
      title:
        "Wild Salmon, Creamy Lemon Basil Sauce, Chickpeas & Roasted Artichokes",
      description:
        "All of our springtime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
    {
      id: 13,
      season: "Spring",
      image: data.spring4.childImageSharp.gatsbyImageData,
      title: "Sprouted Chickpea Falafel, Lemon Tahini Sauce & Baby Greens",
      description:
        "All of our springtime menu items fit a healthy lifestyle, and whether it's vegan, vegetarian, keto or paleo, each can also be personalized especially for you. Just ask!",
    },
  ];

  const [setSeason, setSeasonState] = useState("Fall");
  const [setActive, setActiveState] = useState(2);
  const [setFilters, setFiltersState] = useState(false);

  const categoryFilterClickHandler = (category, id) => {
    setSeasonState(category);
    setActiveState(id);
    setFiltersState(false);
  };

  const filteredProducts = meals.filter((meal) =>
    meal.season.includes(setSeason)
  );

  const filterRevealClickHandler = () => {
    setFiltersState(!setFilters);
  };

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

          <button
            onKeyDown={() => filterRevealClickHandler()}
            onClick={() => filterRevealClickHandler()}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 md:hidden mb-6"
          >
            Filters <i className="far fa-chevron-down ml-2"></i>
          </button>

          <div
            className={`absolute md:relative left-0 p-6 md:p-0 ml-4 md:ml-0 origin-top-left bg-white rounded-md shadow-lg md:shadow-none transform z-10 transition-all duration-100 ease-linear ${
              setFilters === true
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 md:opacity-100 md:scale-100"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 md:mb-14 md:border-b-2 mdLborder-gray-200 max-w-[788px] mx-auto">
              <button
                onKeyDown={() => categoryFilterClickHandler("Summer", 1)}
                onClick={() => categoryFilterClickHandler("Summer", 1)}
                className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold text-left md:text-center after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
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
                className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold text-left md:text-center after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
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
                className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold text-left md:text-center after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
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
                className={`relative hover:text-primary-400 text-sm lg:text-base tracking-wide font-semibold text-left md:text-center after:w-full after:h-0.5 after:bg-primary-400 after:absolute after:-bottom-0.5 after:transition-all after:duration-300 after:ease-linear  ${
                  setActive === 4
                    ? "text-primary-400 after:w-full after:left-0 after:right-auto"
                    : "text-gray-600 after:w-0 after:left-auto after:right-0"
                }`}
              >
                Spring Menu
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3 mb-10 items-start">
            {filteredProducts.map((meal, i) => {
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

          <div className="text-center">
            <ButtonSolid
              href="https://livedeeplynourished.goprep.com"
              outboundLink={true}
              text="View Full Menu"
            />
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
    winter4: file(relativePath: { eq: "3.0 Food Menu/Winter 4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    spring1: file(relativePath: { eq: "3.0 Food Menu/Spring 1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    spring2: file(relativePath: { eq: "3.0 Food Menu/Spring 2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    spring3: file(relativePath: { eq: "3.0 Food Menu/Spring 3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    spring4: file(relativePath: { eq: "3.0 Food Menu/Spring 4.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
  }
`;
export default Page;
