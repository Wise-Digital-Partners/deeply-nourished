import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroSplit";
import Background from "../components/Background/Background";
import WhatsImportant from "../components/Repeating/WhatsImportant";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA3";
import ButtonBlob from "../components/Button/ButtonBlob";

const Page = ({ data }) => {
  const backgroundImages = [
    getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];
  return (
    <Layout>
      <SearchEngineOptimization
        title="Alec Hurley | Private Chef | Deeply Nourished"
        description="Customers LOVE Alec Hurley. He’s a top-rated San Diego private chef who creates fabulous meals with locally sourced, organic, and sustainably grown ingredients."
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
        <h1>Chef Alec Hurley</h1>
        <p>
          Customers LOVE Alec Hurley. He’s a top-rated San Diego-based private
          chef who creates fantastic meals with locally sourced, organic, and
          sustainably grown ingredients. He combines his extensive culinary
          training with the ancient healing wisdom of Ayurveda. What you get is
          a unique dining experience that feeds the body, mind, and soul.
        </p>
      </Hero>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-8 items-center">
            <div>
              <GatsbyImage image={data.intro.childImageSharp.gatsbyImageData} />
            </div>
            <div>
              <h2>Alec’s Story</h2>
              <p className="mb-0">
                Alec’s a lifelong surfer on a spiritual path of health and
                well-being, which translates into his work as a personal chef.
                He’s passionate about creating healthy meals that nourish the
                body. And he loves helping those who may be on a healing journey
                due to an illness or injury. His belief is simple—wholesome
                meals combined with mindfulness create optimal health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Background
        backgroundImages={backgroundImages}
        padding="pt-36 pb-32"
        className="mb-20 md:mb-32"
      >
        <blockquote className="text-center">
          <q className="text-white font-heading text-3xl md:text-4xl">
            Eating well is an art. It doesn't require fancy cooking, but it does
            require practice and concentration.
          </q>
          <cite className="not-italic font-heading text-secondary-400 text-3xl md:text-4xl">
            <div>Thich Nhat Hanh</div>
          </cite>
        </blockquote>
      </Background>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-8 items-center">
            <div>
              <h2>Mindful Eating With Ayurveda</h2>
              <p>
                Eat well with Chef Alec. He bases his cooking on the principles
                of Ayurvedic medicine, which dates back thousands of years. The
                wisdom states that each person has a dosha, or body type, and
                certain foods promote each person's body health and support
                mindfulness.
              </p>

              <ButtonBlob href="/ayurveda-meal-prep-chef/" text="Learn More" />
            </div>
            <div>
              <GatsbyImage
                image={data.ayurveda.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsImportant />
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
    heroDesktop: file(relativePath: { eq: "9.0 About/1.0 Hero about.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 531)
      }
    }
    intro: file(relativePath: { eq: "9.0 About/2.0 About Surf.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    backgroundDesktop: file(
      relativePath: { eq: "9.0 About/3.0 Quote parallax background.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    backgroundMobile: file(
      relativePath: { eq: "9.0 About/3.0 Quote background mobile.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    ayurveda: file(relativePath: { eq: "9.0 About/4.0 Ayurveda.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
