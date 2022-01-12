import React, { useState, useLayoutEffect } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import useWindowSize from "../windowSize";
import Hero from "../components/Hero/HeroFullWidth";
import ValueProps from "../components/Repeating/ValueProps";
import Testimonials from "../components/Repeating/Testimonials";
import HowItWorks from "../components/Repeating/HowItWorks";
import DeliveryDays from "../components/Repeating/DeliveryDays";
import Locations from "../components/Repeating/Locations";
import About from "../components/Repeating/About";
import SeasonalMeals from "../components/Repeating/SeasonalMeals";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";
import ButtonBlob from "../components/Button/ButtonBlob";

const Page = ({ data }) => {
  const heroImages = [
    getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    {
      ...getImage(data.heroMobile.childImageSharp.gatsbyImageData),
      media: `(max-width: 767px)`,
    },
  ];

  const { width } = useWindowSize();
  const [parallaxDisabled, setParallaxDisabled] = useState(false);

  useLayoutEffect(() => {
    if (width < 768) {
      setParallaxDisabled(true);
    } else {
      setParallaxDisabled(false);
    }
  });

  return (
    <Layout headerStyle="overlap">
      <SearchEngineOptimization
        title="San Diego Organic Meal Prep & Private Chef | Deeply Nourished"
        description="With Deeply Nourished you get delicious, healthy meals made by Alec Hurley, an acclaimed San Diego organic meal prep and private chef."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Hero
        backgroundImages={heroImages}
        padding="pt-24 md:pt-60 pb-76 md:pb-64"
      >
        <header className="max-w-2xl">
          <p className="font-heading text-mobile-7xl md:text-7xl text-gray-900 font-bold mb-3 md:mb-3">
            Live deeply nourished.
          </p>
          <p className="text-lg md:text-3xl mb-8 md:mb-6">
            Fresh, organic meals boxed for front-door delivery.
          </p>
          <div className="flex items-center space-x-5">
            <ButtonSolid href="/meal-prep-menu/" text="Shop Meals" />
            <ButtonGhost modal="modal-contact" text="Contact" />
          </div>
        </header>
      </Hero>

      <section className="relative pt-14 md:pt-32 pb-32 md:pb-44">
        <div className="absolute -top-14 md:-top-44 -left-20 md:-left-24 w-full md:w-1/2 max-w-[224px] md:max-w-[447px]">
          <GatsbyImage
            image={data.veggiesTopLeft.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="absolute -top-8 md:-top-20 -right-48 md:-right-28 w-full md:w-1/2 max-w-[425px] md:max-w-[549px]">
          <GatsbyImage
            image={data.veggiesTopRight.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="absolute bottom-0 md:bottom-0 -left-24 md:-left-32 w-full md:w-1/2 max-w-[260px] md:max-w-[519px]">
          <GatsbyImage
            image={data.veggiesBottomLeft.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="absolute -bottom-20 md:-bottom-36 -right-32 md:-right-60 w-full md:w-2/3 max-w-[309px] md:max-w-[618px]">
          <GatsbyImage
            image={data.veggiesBottomRight.childImageSharp.gatsbyImageData}
          />
        </div>

        <div className="absolute bottom-20 md:bottom-0 -left-16 md:-left-20 w-full md:w-1/2 max-w-[121px] md:max-w-[241px]">
          <ParallaxProvider>
            <Parallax y={[25, -25]} disabled={parallaxDisabled}>
              <GatsbyImage image={data.onion.childImageSharp.gatsbyImageData} />
            </Parallax>
          </ParallaxProvider>
        </div>

        <div className="absolute bottom-48 -right-24 md:right-10 w-full md:w-1/2 max-w-[150px] md:max-w-[225px]">
          <ParallaxProvider>
            <Parallax y={[25, -25]} disabled={parallaxDisabled}>
              <GatsbyImage
                image={data.cucumber.childImageSharp.gatsbyImageData}
              />
            </Parallax>
          </ParallaxProvider>
        </div>

        <div className="container">
          <div className="text-center max-w-[647px] mx-auto">
            <div className="decorative-text">About Us</div>
            <GatsbyImage
              image={data.chef.childImageSharp.gatsbyImageData}
              className="mx-auto mb-6"
            />
            <h1>San Diego Organic Meal Prep & Private Chef</h1>
            <p className="px-8 md:px-0">
              Your deeply nourished life begins with a healthy body. Get
              delicious, healthy meals made by acclaimed private chef Alec
              Hurley. Choose organic meal prep delivered right to your door, or
              private catering for a special occasion.
            </p>
            <ButtonBlob href="/alec-hurley/" text="Learn More" />
          </div>
        </div>
      </section>

      <ValueProps className="bg-gray-50 pt-12 md:pt-16 pb-12 md:pb-24 mb-20 md:mb-32" />

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.yelp.childImageSharp.gatsbyImageData}
                className="mb-6"
              />
              <h2>What’s On The Menu</h2>
              <p>
                Enjoy wholesome meals packed with nutrition and brimming with
                the best harvests of the season. You’ll love the 100% organic
                ingredients free of hormones, gluten, and dairy. And you’ll
                savor meals packed with robust flavors.
              </p>
              <ButtonBlob href="/meal-prep-menu/" text="Explore The Menu" />
            </div>
            <div>
              <GatsbyImage image={data.menu.childImageSharp.gatsbyImageData} />
            </div>
          </div>
        </div>
      </section>

      <SeasonalMeals />
      <Testimonials />
      <HowItWorks />
      <DeliveryDays />
      <Locations />

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[720px] mx-auto mb-7 md:mb-16">
            <h2>Private Events & Dinner Parties</h2>
            <p>
              Get private catering for everything from intimate dinner parties
              to family-style dinners and elegant affairs.
            </p>
          </header>

          <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-4 items-center">
            <div className="relative">
              <AniLink
                fade
                to="/private-chef-for-dinner-parties/"
                className="group"
              >
                <div className="overflow-hidden">
                  <GatsbyImage
                    image={data.events.childImageSharp.gatsbyImageData}
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

      <About />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Home Page.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Home Page.jpg" }
    ) {
      publicURL
    }
    heroDesktop: file(relativePath: { eq: "home/1.0 Hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero Hoome - mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    chef: file(relativePath: { eq: "home/5.0 Chef.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 143)
      }
    }
    yelp: file(relativePath: { eq: "home/6.0 Star-review-Yelp 1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 98)
      }
    }
    menu: file(relativePath: { eq: "home/6.1 menu.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    events: file(relativePath: { eq: "home/7.0 Events.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    catering: file(relativePath: { eq: "home/8.0 Catering.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    veggiesTopLeft: file(
      relativePath: { eq: "home/2.0 Veggies top left.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 447, placeholder: NONE)
      }
    }
    veggiesTopRight: file(
      relativePath: { eq: "home/2.1 Veggies top right.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 549, placeholder: NONE)
      }
    }
    veggiesBottomLeft: file(
      relativePath: { eq: "home/4.0 Veggies bottom left.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 519, placeholder: NONE)
      }
    }
    veggiesBottomRight: file(
      relativePath: { eq: "home/4.1 Veggie bottom right.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 618, placeholder: NONE)
      }
    }
    cucumber: file(relativePath: { eq: "home/Cucumber isolated.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 225, placeholder: NONE)
      }
    }
    onion: file(relativePath: { eq: "home/Onion Isolated.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 241, placeholder: NONE)
      }
    }
  }
`;
export default Page;
