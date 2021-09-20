import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials2";
import CallToAction from "../components/Repeating/CTA2";
import ButtonBlob from "../components/Button/ButtonBlob";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Private Chef for Events | San Diego | Deeply Nourished"
        description="Elevate your next San Diego-area celebration with seasonally-inspired dishes your guests will delight over. Hire Alec Hurley, your private chef for events."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-16 md:pt-32 mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[870px] mx-auto mb-10 md:mb-12">
            <h1>Private Events</h1>
            <p className="font-heading text-lg md:text-2xl">
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
              <h2>Dinner Parties</h2>
              <p>
                Transform your dinner party into a tasting adventure with
                private catering by Chef Alec. Your guests will enjoy fresh
                dishes bursting with flavor and the bounties of the season.
              </p>

              <ButtonBlob
                href="/private-chef-for-dinner-parties/"
                text="Learn More"
              />
            </div>
            <div className="md:col-end-13 md:col-span-8 order-1 md:order-2 md:ml-auto">
              <GatsbyImage
                image={data.dinnerParties.childImageSharp.gatsbyImageData}
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
                image={data.catering.childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="md:col-end-13 md:col-span-4">
              <h2>Event Catering</h2>
              <p>
                Create an unforgettable event featuring exquisitely prepared
                dishes made with locally sourced, in-season ingredients. Get
                private catering for everything from social and corporate events
                to holidays, weddings, and black-tie affairs.
              </p>

              <ButtonBlob
                href="/organic-food-catering-san-diego/"
                text="Learn More"
              />
            </div>
          </div>
        </div>
      </section>

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
    dinnerParties: file(
      relativePath: { eq: "6.0 Private Events/01 Dinner Parties.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 747)
      }
    }
    catering: file(
      relativePath: { eq: "6.0 Private Events/2.0 Catering.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 747)
      }
    }
  }
`;
export default Page;
