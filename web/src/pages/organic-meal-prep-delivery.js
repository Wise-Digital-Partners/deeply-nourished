import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroSplit";
import ValueProps from "../components/Repeating/ValueProps";
import SeasonalMeals from "../components/Repeating/SeasonalMeals";
import Testimonials from "../components/Repeating/Testimonials";
import HowItWorks from "../components/Repeating/HowItWorks";
import DeliveryDays from "../components/Repeating/DeliveryDays";
import Locations from "../components/Repeating/Locations";
import Ingredients from "../components/Repeating/Ingredients";
import SupportedDiets from "../components/Repeating/SupportedDiets";
import About from "../components/Repeating/About";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Organic Meal Prep Delivery San Diego | Deeply Nourished"
        description="Enjoy savory dishes made by Alec Hurley, a top private chef in San Diego. You’ll love the convenience of organic meal prep delivery and its health benefits."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        image={data.heroDesktop.childImageSharp.gatsbyImageData}
        padding="md:pt-10"
        hasContainer={true}
        textWidth="1/2"
        textAlignment="left"
        imageWidth="1/2"
        imageAlignment="right"
        className="mb-20 md:mb-32"
      >
        <h1>Organic Meal Prep Delivery Service</h1>
        <p>
          Savor the flavors of fresh dishes made by Alec Hurley, a top private
          chef in San Diego. You’ll love both the convenience of organic meal
          delivery and healthy meal options. It’s time to live a deeply
          nourished life.
        </p>
        <ButtonSolid href="/meal-prep-menu/" text="Explore Menu" />
      </Hero>

      <ValueProps />
      <SeasonalMeals />
      <Testimonials />
      <Ingredients />
      <SupportedDiets />
      <HowItWorks />
      <DeliveryDays />
      <Locations />
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
      relativePath: { eq: "2.0 Meal Prep/1.0 Hero meal prep.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 560)
      }
    }
  }
`;
export default Page;
