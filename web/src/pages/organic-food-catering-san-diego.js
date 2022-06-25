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
            Of course! All organic food catering menus are customized to your
            event and food preferences. We start with a base menu and go from
            there.
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
        title="Organic Food Catering San Diego | Deeply Nourished"
        description="Make an impression at your next San Diego event with organic food catering. Chef Alec Hurley creates dishes infused with flavor and featuring local ingredients."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        padding="pt-40 md:pt-52 pb-32 md:pb-40"
        textAlignment="text-center mx-auto"
        textMaxWidth="max-w-2xl"
      >
        <h1 className="text-white">Organic Food Catering in San Diego</h1>
      </Hero>
      <section className="pt-16 md:pt-32 mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[870px] mx-auto mb-10 md:mb-12">
            <p className="font-heading text-lg md:text-2xl mb-0">
              Make a great impression at your next event with private catering
              from acclaimed San-Diego personal chef Alec Hurley. With 20+ years
              of experience and extensive culinary expertise, he creates dishes
              infused with flavor and featuring local, organic ingredients.
            </p>
          </header>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-12 md:gap-x-10 lg:gap-x-12 gap-y-8 items-center">
            <div className="md:col-start-1 md:col-span-4 order-2 md:order-1">
              <h2>When It’s Time To Celebrate</h2>
              <p>
                Indoor or outdoor, black-tie or casual—you dream it, Chef Alec
                can cater it. Get organic food catering for your next San
                Diego-area social event or celebration, holiday party, wedding,
                or luxurious affair.
              </p>

              <ButtonSolid
                href="https://private.chef.tech/t/deeply-nourished"
                outboundLink={true}
                text="Book Alec"
              />
            </div>
            <div className="md:col-end-13 md:col-span-8 order-1 md:order-2 md:ml-auto">
              <GatsbyImage
                image={data.celebrating.childImageSharp.gatsbyImageData}
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
      relativePath: { eq: "open-graph/facebook/Catering.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Catering.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "8.0 Catering/1.0 Hero Catering.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    celebrating: file(
      relativePath: { eq: "8.0 Catering/2.0 Celebrating.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 747)
      }
    }
  }
`;
export default Page;
