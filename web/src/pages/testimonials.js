import React from "react";
import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import ButtonSolid from "../components/Button/ButtonSolid";
import Hero from "../components/Hero/HeroFullWidth";
import ReviewCards from "../components/Reviews/ReviewCards";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  // const heroImages = [
  //   getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
  //   {
  //     ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
  //     media: `(max-width: 767px)`,
  //   },
  // ];
  return (
    <Layout>
      <SearchEngineOptimization
        title="Testimonials | Deeply Nourished"
        description="Deeply Nourished brings healthy meal prep delivery to San Diego with the best locally-sourced organic food around. Read testimonials and try us today!"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        padding="pt-32 md:pt-52 pb-24 md:pb-40"
        textAlignment="text-center mx-auto"
        textMaxWidth="max-w-2xl"
      >
        <h1 className="text-white">Testimonials</h1>
        <ButtonSolid href="/review-us/" text="Leave a Review" />
      </Hero>

      <section className="pt-16 md:pt-24 mb-20 md:mb-30">
        <div className="container">
          <div className="md:col-count-2">
            <ReviewCards />
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    heroDesktop: file(
      relativePath: { eq: "Dinner Parties/1.0 Hero Dinner Parties.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/FB-Reviews.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Twitter-Reviews.jpg" }
    ) {
      publicURL
    }
  }
`;

export default Page;
