import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroSplit";
import SeasonalMeals from "../components/Repeating/SeasonalMeals";
import Testimonials from "../components/Repeating/Testimonials";
import DeliveryDays from "../components/Repeating/DeliveryDays";
import Locations from "../components/Repeating/Locations";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const [refStep1, inViewStep1] = useInView({ threshold: 0.5 }),
    [refStep2, inViewStep2] = useInView({ threshold: 0.5 }),
    [refStep3, inViewStep3] = useInView({ threshold: 0.5 }),
    [refStep4, inViewStep4] = useInView({ threshold: 0.5 });

  const animationStep1 = useAnimation(),
    animationMarker1 = useAnimation(),
    animationStep2 = useAnimation(),
    animationMarker2 = useAnimation(),
    animationStep3 = useAnimation(),
    animationMarker3 = useAnimation(),
    animationStep4 = useAnimation(),
    animationMarker4 = useAnimation();

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
    if (inViewStep4) {
      animationStep4.start("visible");
      animationMarker4.start("visibleMarker");
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
        title="How It Works | Organic Meal Prep | Deeply Nourished"
        description="Choose your meals. Pick a delivery day. Chef Alec Hurley will prepare and deliver your healthy, delicious dishes right to your door in the San Diego area."
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
        <h1>Easy Online Ordering</h1>
        <p>
          Start by selecting the meals you’d like Chef Alec to prepare and then
          choose a Monday or Wednesday delivery. He’ll source fresh ingredients,
          prep and cook each meal, then box them up for front-door delivery.
          It’s that simple!
        </p>
        <ButtonSolid href="#" outboundLink={true} text="Start an Order" />
      </Hero>

      <section className="mb-20 md:mb-32 overflow-x-hidden">
        <div className="container">
          <header className="text-center mb-10 md:mb-20">
            <h2>How It Works</h2>
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
                  alt="Step 1"
                />
              </motion.div>

              <motion.div
                ref={refStep1}
                animate={animationStep1}
                initial="hiddenRight"
                variants={variants}
                className="md:pl-8 lg:pl-16 transition-all duration-300 ease-linear"
              >
                <div className="font-heading text-xl md:text-3xl text-secondary-500 uppercase mb-4">
                  Step 1
                </div>
                <h3 className="mb-0">Shop What’s On the Menu</h3>
                <p className="mb-0">
                  Make your top picks. Then come back often to see the fresh new
                  dishes Chef Alec is cooking in the kitchen. From seasonal
                  harvests to recipes infused with inspiration, there’s plenty
                  to love.
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
                <div className="font-heading text-xl md:text-3xl text-secondary-500 uppercase mb-4">
                  Step 2
                </div>
                <h3 className="mb-0">Wait For The Chef</h3>
                <p className="mb-0">
                  Always fresh. Every meal starts with local ingredients
                  personally selected by Chef Alec. He prepares and cooks each
                  dish just for you and boxes them in 100% compostable packaging
                  that’s easy on the environment.
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
                  alt="Step 2"
                />
              </motion.div>
            </div>

            {/* {Step 3} */}
            <div className="relative grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 gap-y-2 items-center mb-16 md:mb-24">
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
                  alt="Step 3"
                />
              </motion.div>

              <motion.div
                ref={refStep3}
                animate={animationStep3}
                initial="hiddenRight"
                variants={variants}
                className="md:pl-8 lg:pl-16 transition-all duration-300 ease-linear"
              >
                <div className="font-heading text-xl md:text-3xl text-secondary-500 uppercase mb-4">
                  Step 3
                </div>
                <h3 className="mb-0">Get Front-Door Delivery</h3>
                <p className="mb-0">
                  Knock, knock—your meals are here! You get personal meal
                  delivery by Chef Alec, right to your front door or at your
                  office.
                </p>
              </motion.div>
            </div>

            {/* {Step 4} */}
            <div className="relative grid md:grid-cols-2 md:gap-x-10 lg:gap-x-16 gap-y-2 items-center">
              <span class="bg-white h-1/2 w-px absolute left-0 right-0 bottom-0 m-auto"></span>
              <div className="absolute left-0 right-0 hidden md:flex items-center justify-center">
                <motion.span
                  className="bg-gray-200 w-4 h-4 rounded-full absolute"
                  ref={refStep4}
                  animate={animationMarker4}
                  variants={variants}
                />
              </div>

              <motion.div
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenLeft"
                variants={variants}
                className="order-2 md:order-1 md:pr-8 lg:pr-16 transition-all duration-300 ease-linear"
              >
                <div className="font-heading text-xl md:text-3xl text-secondary-500 uppercase mb-4">
                  Step 4
                </div>
                <h3 className="mb-0">Store, Heat & Eat!</h3>
                <p className="mb-0">
                  Refrigerate. Heat when ready. Plate your dish and eat! You’ll
                  love the fabulous taste, simple convenience, and how easy it
                  is to maintain your nutrition goals.
                </p>
              </motion.div>

              <motion.div
                ref={refStep4}
                animate={animationStep4}
                initial="hiddenRight"
                variants={variants}
                className="order-1 md:order-2 transition-all duration-300 ease-linear"
              >
                <GatsbyImage
                  image={data.step4.childImageSharp.gatsbyImageData}
                  alt="Step 4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <DeliveryDays />
      <Locations />
      <Testimonials />
      <SeasonalMeals />
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
      relativePath: { eq: "4.0 How it Works/1.0 Hero HIW.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 536)
      }
    }
    step1: file(relativePath: { eq: "4.0 How it Works/2.0 Step 1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step2: file(relativePath: { eq: "4.0 How it Works/3.0 Step 2.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step3: file(relativePath: { eq: "4.0 How it Works/4.0 Step 3.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    step4: file(relativePath: { eq: "4.0 How it Works/5.0 Step 4.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
