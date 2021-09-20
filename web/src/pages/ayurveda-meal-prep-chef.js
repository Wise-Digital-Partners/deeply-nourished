import { React, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroSplit";
import Locations from "../components/Repeating/Locations";
import About from "../components/Repeating/About";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA4";

const Page = ({ data }) => {
  const [accordionOpen1, setAccordionOpen1] = useState("block"),
    [accordionOpen2, setAccordionOpen2] = useState("hidden"),
    [accordionOpen3, setAccordionOpen3] = useState("hidden");

  const doshas = [
    {
      id: 1,
      heading: "Pitta (fire + water)",
      text: (
        <div>
          <ul className="styled-disc-list">
            <li>Intelligent and hardworking</li>
            <li>Medium physical build</li>
            <li>
              Health concerns may include: indigestion, heart disease, or high
              blood pressure
            </li>
            <li>
              Foods to eat: Light, cold and sweet foods such as fruits, oats,
              and non-starchy vegetables
            </li>
            <li>
              Foods to avoid: Heavy, spicy, and sour foods such as potatoes, red
              meat, and hot spices
            </li>
          </ul>
        </div>
      ),
      image: data.pitta.publicURL,
    },
    {
      id: 2,
      heading: "Vata (air + space)",
      text: (
        <div>
          <ul className="styled-disc-list">
            <li>Creative and energetic</li>
            <li>Thin, light frame</li>
            <li>
              Health concerns may include: digestive issues, fatigue, anxiety
            </li>
            <li>
              Foods to eat: Warm, moist, soft foods such as bananas, oats, and
              eggs
            </li>
            <li>
              Foods to avoid: Cold foods such as dried fruit, nuts, and raw
              vegetables
            </li>
          </ul>
        </div>
      ),
      image: data.vata.publicURL,
    },
    {
      id: 3,
      heading: "Kapha (earth + water)",
      text: (
        <div>
          <ul className="styled-disc-list">
            <li>Calm and grounded</li>
            <li>Sturdy frame</li>
            <li>
              Health concerns may include: weight gain, asthma, depression,
              diabetes
            </li>
            <li>
              Foods to eat: Spicy and filling foods such as fruits and
              vegetables, low-fat cheese, hot spices
            </li>
            <li>
              Foods to avoid: Heavy fatty foods such as processed foods, nuts,
              and oils
            </li>
          </ul>
        </div>
      ),
      image: data.kapha.publicURL,
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Ayurveda Meal Prep & Chef | Deeply Nourished"
        description="The Ayurveda diet is being mindful about what you eat—a philosophy that San Diego Chef Alec Hurley believes in. Deeply nourish your body with Ayurveda food."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        image={data.heroDesktop.childImageSharp.gatsbyImageData}
        padding="md:pt-10"
        hasContainer={true}
        textWidth="1/2"
        textAlignment="right"
        imageWidth="1/2"
        imageAlignment="left"
        className="mb-20 md:mb-32"
      >
        <h1>The Ayurveda Diet</h1>
        <p>
          Be mindful about what you eat and your body will thank you. That's the
          guiding principle of the Ayurveda diet. As a holistic practice,
          Ayurveda strikes a healthy balance between mind, body, and spirit.
          It’s a philosophy that Chef Alec Hurley brings to the table to deeply
          nourish your body.
        </p>
      </Hero>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-8 items-center">
            <div>
              <h2>Why Ayurveda Is Good For You</h2>
              <p>A diet based on Ayurvedic nutrition and food can help:</p>
              <ul className="styled-check-list">
                <li>Promote mindfulness</li>
                <li>Reduce inflammation</li>
                <li>Lose weight</li>
                <li>Lower your blood pressure</li>
                <li>Lower your cholesterol</li>
                <li>Cleanse the body of toxins</li>
              </ul>
            </div>
            <div>
              <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary-100 py-20 md:py-32 mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[984px] mx-auto mb-6 md:mb-20">
            <h2>Everyone Has A ‘Dosha’</h2>
            <p className="font-heading text-lg md:text-2xl mb-0">
              What’s a dosha? According to the principles of Ayurveda, there are
              elements in the universe (air, water, space, fire, and earth) that
              form three doshas. A dosha refers to the body's energy and is
              believed to be tied to specific physiological functions. An
              Ayurveda diet focuses on wholesome foods that promote a person's
              health for their dominant dosha, as well as a balance among all
              three.
            </p>
          </header>

          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-20 items-center -mx-4 md:mx-0">
            <div className="order-2 md:order-1">
              <Accordion preExpanded={[1]}>
                {doshas.map((dosha, i) => (
                  <AccordionItem
                    className="accordion-item relative last-of-type:mb-0 mb-4 md:mb-8"
                    uuid={dosha.id}
                    key={dosha.id}
                  >
                    <AccordionItemHeading className="accordion-heading">
                      <AccordionItemButton className="accordion-button text-gray-900 opacity-40 flex flex-col items-start text-left ml-10 md:ml-20 focus:outline-none cursor-pointer before:block before:absolute before:left-0 before:bg-gray-900 before:h-px before:w-0 before:mt-4 before:transition-all before:duration-300 before:ease-linear">
                        <AccordionItemState>
                          {({ expanded }) => {
                            const state = expanded ? "expanded" : "collapsed";
                            {
                              dosha.id === 1 &&
                                setAccordionOpen1(
                                  state === "expanded" ? "block" : "hidden"
                                );
                            }
                            {
                              dosha.id === 2 &&
                                setAccordionOpen2(
                                  state === "expanded" ? "block" : "hidden"
                                );
                            }
                            {
                              dosha.id === 3 &&
                                setAccordionOpen3(
                                  state === "expanded" ? "block" : "hidden"
                                );
                            }
                          }}
                        </AccordionItemState>
                        <h3 className="mb-0">{dosha.heading}</h3>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="animate-fadeIn py-4 ml-10 md:ml-20">
                      {dosha.text}
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="order-1 md:order-2">
              {doshas.map((dosha, i) => (
                <div key={dosha.id}>
                  <div
                    className={`animate-fadeIn 
                    ${dosha.id === 1 && accordionOpen1}
                    ${dosha.id === 2 && accordionOpen2}
                    ${dosha.id === 3 && accordionOpen3}
                    `}
                  >
                    <img src={dosha.image} alt={dosha.heading} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-[640px] mx-auto text-center mb-12 md:mb-16">
            <h2>Ayurveda Meal Prep & Catering</h2>
            <p>
              Discover the benefits of focused healthy eating with Alec Hurley,
              your San Diego Ayurveda chef.
            </p>
          </header>

          <div className="grid md:grid-cols-3 md:gap-x-6 gap-y-4 items-center">
            <div className="relative">
              <AniLink fade to="/organic-meal-prep-delivery/" className="group">
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.mealPrep.childImageSharp.gatsbyImageData}
                    className="w-full transform scale-100 md:group-hover:scale-105 transition-all duration-500 ease-linear"
                  />
                </div>
                <div className="absolute inset-0 m-auto flex justify-center items-center text-center px-4">
                  <div className="text-white text-3xl font-bold">
                    Meal Prep & Delivery
                  </div>
                </div>
              </AniLink>
            </div>

            <div className="relative">
              <AniLink
                fade
                to="/private-chef-for-dinner-parties/"
                className="group"
              >
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.dinners.childImageSharp.gatsbyImageData}
                    className="w-full transform scale-100 md:group-hover:scale-105 transition-all duration-500 ease-linear"
                  />
                </div>
                <div className="absolute inset-0 m-auto flex justify-center items-center text-center px-4">
                  <div className="text-white text-3xl font-bold">
                    Private Dinner Parties
                  </div>
                </div>
              </AniLink>
            </div>

            <div className="relative">
              <AniLink
                fade
                to="/organic-food-catering-san-diego/"
                className="group"
              >
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.catering.childImageSharp.gatsbyImageData}
                    className="w-full transform scale-100 md:group-hover:scale-105 transition-all duration-500 ease-linear"
                  />
                </div>
                <div className="absolute inset-0 m-auto flex justify-center items-center text-center px-4">
                  <div className="text-white text-3xl font-bold">
                    Event Catering
                  </div>
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      </section>

      <Locations />
      <About />
      <Testimonials className="mb-0" />
      <CallToAction />
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
    heroDesktop: file(
      relativePath: { eq: "10.0 Ayurveda/1.0 Hero Ayurveda.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 531)
      }
    }
    intro: file(relativePath: { eq: "10.0 Ayurveda/2.0 Properties.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    pitta: file(relativePath: { eq: "10.0 Ayurveda/3.1 Pitta.svg" }) {
      publicURL
    }
    vata: file(relativePath: { eq: "10.0 Ayurveda/3.2 Vata.svg" }) {
      publicURL
    }
    kapha: file(relativePath: { eq: "10.0 Ayurveda/3.3 Kapha.svg" }) {
      publicURL
    }
    mealPrep: file(relativePath: { eq: "10.0 Ayurveda/3.1 Meal Prep.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 384)
      }
    }
    dinners: file(relativePath: { eq: "10.0 Ayurveda/4.2 Dinners.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 384)
      }
    }
    catering: file(relativePath: { eq: "10.0 Ayurveda/4.3 catering.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 384)
      }
    }
  }
`;
export default Page;
