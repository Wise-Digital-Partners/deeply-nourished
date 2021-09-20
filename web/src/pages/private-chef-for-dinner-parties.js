import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
import Testimonials from "../components/Repeating/Testimonials2";
import ImageCarousel from "../components/Repeating/ImageCarousel";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA2";
import ButtonSolid from "../components/Button/ButtonSolid";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const Page = ({ data }) => {
  const faqs = [
    {
      question: "What's included in the price?",
      answer: (
        <>
          <p>
            I charge a flat rate that includes everything from the grocery list
            to staff and clean-up.
          </p>
        </>
      ),
    },
    {
      question: "Can I request a customized menu?",
      answer: (
        <>
          <p>
            Of course! All menus are customized to your event and food
            preferences. We start with a base menu and go from there.
          </p>
        </>
      ),
    },
    {
      question: "Are set-up and clean-up included?",
      answer: (
        <>
          <p>
            Yes. Both are included. I take care of all the initial set-up for
            your event and then the clean-up when we're all done.
          </p>
        </>
      ),
    },
    {
      question: "Can I hire you for an outdoor event?",
      answer: (
        <>
          <p>
            Yes. I provide private catering for both indoor and outdoor events.
          </p>
        </>
      ),
    },
    {
      question:
        "Do you provide private catering outside of the San Diego area?",
      answer: (
        <>
          <p>
            Yes! I've traveled as far as Panama and Nicaragua, and Northern
            California and the East Coast here in the United States. Pick a
            location, and I'll be there!
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <SearchEngineOptimization
        title="Private Chef for Dinner Parties | Deeply Nourished"
        description="Upgrade your next San Diego-area get together with fabulous cuisine made with natural ingredients. Hire Alec Hurley, your private chef for dinner parties."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        padding="pt-40 md:pt-52 pb-32 md:pb-40"
        textAlignment="text-center mx-auto"
        textMaxWidth="max-w-2xl"
      >
        <h1 className="text-white">Private Chef For Dinner Parties</h1>
      </Hero>
      <section className="pt-16 md:pt-32 mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[870px] mx-auto mb-10 md:mb-12">
            <p className="font-heading text-lg md:text-2xl mb-0">
              Elevate your next San Diego-area event with seasonally-inspired
              dishes your guests will delight over. Whether it’s a small
              gathering or an elegant, multi-course affair, Chef Alec Hurley
              delivers, bringing his 18+ years of experience and extensive
              culinary training to the table.
            </p>
          </header>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-12 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-4 order-2 md:order-1">
              <h2>Elegant Tasting Adventures</h2>
              <p>
                Want an upscale dining experience that will leave you and your
                guests feeling truly spoiled? Choose the elegant multi-course
                tasting adventure. Hire a private chef for your next dinner
                party, or for an intimate meal for two.
              </p>

              <ButtonSolid modal="modal-contact" text="Plan Your Event" />
            </div>
            <div className="md:col-end-13 md:col-span-8 order-1 md:order-2 md:ml-auto">
              <GatsbyImage
                image={
                  data.elegantTastingAdventures.childImageSharp.gatsbyImageData
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-12 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-8">
              <GatsbyImage
                image={
                  data.casualFamilyStyleDinners.childImageSharp.gatsbyImageData
                }
              />
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <h2>Casual Family-Style Dinners</h2>
              <p>
                Have you ever considered hiring a personal chef for a family
                get-together? It’s a great way to create a unique culinary
                experience that’s fun for the family. And the bonus? It’s
                stress-free entertaining for you!
              </p>

              <ButtonSolid modal="modal-contact" text="Plan Your Event" />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-12 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-4 order-2 md:order-1">
              <h2>Beverage pairings</h2>
              <p>
                Looking to elevate your next dinner party? We pair meals
                featuring local, organic, healthy ingredients with fine wines
                and top-shelf selections. It’s the perfect choice for a holiday
                event or a culinary-inspired cocktail party.
              </p>

              <ButtonSolid modal="modal-contact" text="Plan Your Event" />
            </div>
            <div className="md:col-end-13 md:col-span-8 order-1 md:order-2 md:ml-auto">
              <GatsbyImage
                image={data.beveragePairings.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="mb-16 md:mb-20">
            <h2>Frequently Asked Questions</h2>
          </header>

          <Accordion
            allowZeroExpanded={true}
            className="border-t border-solid border-primary-600/20"
          >
            {faqs.map((faq, i) => {
              return (
                <div key={i}>
                  <AccordionItem
                    className="border-b border-solid border-gray-700/20 pt-6 md:pt-7 pb-5 md:pb-6"
                    uuid={i}
                  >
                    <AccordionItemButton className="flex items-center justify-between focus:outline-none">
                      <p className="text-xl md:text-3xl font-gray-700 font-bold mb-0">
                        {faq.question}
                      </p>
                      <AccordionItemState>
                        {(state) => {
                          const icon = state.expanded
                            ? "fa-chevron-up"
                            : "fa-chevron-down";
                          return (
                            <i
                              className={`far ${icon} text-lg text-primary-400/50 ml-4`}
                            ></i>
                          );
                        }}
                      </AccordionItemState>
                    </AccordionItemButton>
                    <AccordionItemPanel className="pt-6 pr-10 max-w-4xl animate-fadeIn">
                      <p className="mb-0">{faq.answer}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </section>

      <ImageCarousel />
      <About />
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
      relativePath: { eq: "Dinner Parties/1.0 Hero Dinner Parties.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    elegantTastingAdventures: file(
      relativePath: { eq: "Dinner Parties/Elegant Tasting Adventures.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 747)
      }
    }
    casualFamilyStyleDinners: file(
      relativePath: { eq: "Dinner Parties/Casual Family-Style Dinners.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 747)
      }
    }
    beveragePairings: file(
      relativePath: { eq: "Dinner Parties/Beverage pairings.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 747)
      }
    }
  }
`;
export default Page;
