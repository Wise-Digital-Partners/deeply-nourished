import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroSplit";
import Ingredients from "../components/Repeating/Ingredients";
import WhatsImportant from "../components/Repeating/WhatsImportant";
import Testimonials from "../components/Repeating/Testimonials";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonBlob from "../components/Button/ButtonBlob";

const Page = ({ data }) => {
  const [refStep1, inViewStep1] = useInView({ threshold: 0.5 }),
    [refStep2, inViewStep2] = useInView({ threshold: 0.5 }),
    [refStep3, inViewStep3] = useInView({ threshold: 0.5 });

  const animationStep1 = useAnimation(),
    animationMarker1 = useAnimation(),
    animationStep2 = useAnimation(),
    animationMarker2 = useAnimation(),
    animationStep3 = useAnimation(),
    animationMarker3 = useAnimation();

  useEffect(() => {
    if (inViewStep1) {
      animationStep1.start("visible");
      animationMarker1.start("visibleMarker");
    }
    if (inViewStep2) {
      animationStep2.start("visible");
      animationMarker2.start("visibleMarker");
    }
    if (inViewStep3) {
      animationStep3.start("visible");
      animationMarker3.start("visibleMarker");
    }
  });

  const variants = {
    hiddenLeft: {
      opacity: 0,
      x: "-100px",
    },
    hiddenRight: {
      opacity: 0,
      x: "100px",
    },
    visible: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 1,
      },
    },
    visibleMarker: {
      backgroundColor: "#FDBE54",
      transition: { duration: 1 },
    },
  };

  return (
    <Layout>
      <SearchEngineOptimization
        title="Food Philosophy | Organic Meal Prep | Deeply Nourished"
        description="Fresh, seasonal, flavor-infused meals made only with local, organic ingredients from the San Diego area—that’s Chef Alec Hurley’s food philosophy."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
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
        <h1>Meal Prep Done Differently</h1>
        <p>
          Fresh, seasonal, flavor-infused meals made only with local, organic
          ingredients—that’s Chef Alec Hurley’s food philosophy. Each meal is
          prepared with a healthy body in mind and packaged with 100%
          compostable boxes for an eco-friendly footprint.
        </p>
        <ButtonSolid
          href="http://livedeeplynourished.sprwt.in/currentmenu/"
          outboundLink={true}
          text="Start an Order"
        />
      </Hero>

      <section className="mb-20 md:mb-32 overflow-x-hidden">
        <div className="container">
          <header className="text-center mb-10 md:mb-20">
            <h2>Chef Alec’s Food Philosophy</h2>
          </header>

          <div className="relative">
            <div className="hidden md:block w-px bg-black/30 h-full absolute left-0 right-0 mx-auto"></div>

            {/* {Step 1} */}
            <div className="relative grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 gap-y-2 items-center mb-16 md:mb-24">
              <span class="bg-white h-1/2 w-px absolute left-0 right-0 top-0 m-auto"></span>
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="bg-gray-200 w-4 h-4 rounded-full absolute"
                  ref={refStep1}
                  animate={animationMarker1}
                  variants={variants}
                />
              </div>

              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenLeft"
                variants={variants}
                className="transition-all duration-300 ease-linear"
              >
                <GatsbyImage
                  image={data.step1.childImageSharp.gatsbyImageData}
                  alt="Simple and Seasonal"
                />
              </motion.div>

              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenRight"
                variants={variants}
                className="md:pl-8 lg:pl-16 transition-all duration-300 ease-linear"
              >
                <h3 className="mb-0">Simple & Seasonal</h3>
                <p className="mb-0">
                  They’re meals made with the bounty of the season—blended with
                  simple ingredients and overflowing with flavor. You’ll eat
                  healthy food and live deeply nourished.
                </p>
              </motion.div>
            </div>

            {/* {Step 2} */}
            <div className="relative grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 gap-y-2 items-center mb-16 md:mb-24">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="bg-gray-200 w-4 h-4 rounded-full absolute"
                  ref={refStep2}
                  animate={animationMarker2}
                  variants={variants}
                />
              </div>

              <motion.div
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenLeft"
                variants={variants}
                className="order-2 md:order-1 md:pr-8 lg:pr-16 transition-all duration-300 ease-linear"
              >
                <h3 className="mb-0">Garden Fresh</h3>
                <p className="mb-0">
                  There’s absolutely nothing like that garden-fresh taste. Get
                  healthy meals loaded with flavor and nutrition and made from
                  the best ingredients. Start fostering a great relationship
                  with your food!
                </p>
              </motion.div>

              <motion.div
                ref={refStep2}
                animate={animationStep2}
                initial="hiddenRight"
                variants={variants}
                className="order-1 md:order-2 transition-all duration-300 ease-linear"
              >
                <GatsbyImage
                  image={data.step2.childImageSharp.gatsbyImageData}
                  alt="Garden Fresh"
                />
              </motion.div>
            </div>

            {/* {Step 3} */}
            <div className="relative grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 gap-y-2 items-center">
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="bg-gray-200 w-4 h-4 rounded-full absolute"
                  ref={refStep3}
                  animate={animationMarker3}
                  variants={variants}
                />
              </div>

              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenLeft"
                variants={variants}
                className="transition-all duration-300 ease-linear"
              >
                <GatsbyImage
                  image={data.step3.childImageSharp.gatsbyImageData}
                  alt="Environmentally Concious "
                />
              </motion.div>

              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenRight"
                variants={variants}
                className="md:pl-8 lg:pl-16 transition-all duration-300 ease-linear"
              >
                <h3 className="mb-0">With Love For Mother Earth</h3>
                <p className="mb-0">
                  You’re helping us help the planet. Your ready-to-go,
                  heat-and-eat meals are packaged in 100% compostable boxes.
                  They’ll keep plastics out of the environment and their
                  chemicals from ending up in our food and water.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <WhatsImportant />
      <Ingredients hideButton={true} />

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-8 items-center">
            <div>
              <GatsbyImage
                image={data.ayurveda.childImageSharp.gatsbyImageData}
              />
            </div>
            <div>
              <h2>The Chef’s Ayurveda Kitchen</h2>
              <p>
                It’s holistic. It’s mindful. It’s good for you. Ayurveda’s
                ancient wisdom creates a balance between the mind, body, and
                spirit. Eating right is part of it, and Chef Alec Hurley
                combines Ayurveda principles with his culinary expertise to help
                you stay in good health.
              </p>

              <ButtonBlob href="/ayurveda-meal-prep-chef/" text="Learn More" />
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
      relativePath: { eq: "open-graph/facebook/Food Philosophy.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Food Philosophy.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(
      relativePath: { eq: "5.0 Food Philosophy/1.0 Hero Food Philosophy.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 531)
      }
    }
    step1: file(relativePath: { eq: "5.0 Food Philosophy/2.0 Simple.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step2: file(
      relativePath: { eq: "5.0 Food Philosophy/3.0 Garden Fresh.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step3: file(
      relativePath: { eq: "5.0 Food Philosophy/4.0 Sustainable.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    ayurveda: file(
      relativePath: { eq: "5.0 Food Philosophy/5.0 Ayurveda.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
