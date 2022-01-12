import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import { GatsbyImage } from "gatsby-plugin-image";

import ModalContact from "../Modal/ModalContact";
import nestLogo from "../../images/global/Nest Logo.svg";

const Footer = ({ hideFooter }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo Grayscale.svg" }) {
        publicURL
      }
    }
  `);

  const navigation = {
    mealPrep: [
      {
        name: "The Menu",
        href: "/meal-prep-menu/",
      },
      {
        name: "How it Works",
        href: "/how-it-works/",
      },
      {
        name: "Our Food Philosophy",
        href: "/food-philosophy/",
      },
    ],
    privateEvents: [
      {
        name: "Private Dinner Parties",
        href: "/private-chef-for-dinner-parties/",
      },
      {
        name: "Event Catering",
        href: "/organic-food-catering-san-diego/",
      },
    ],
    about: [
      {
        name: "Meet The Chef",
        href: "/alec-hurley/",
      },
      {
        name: "Ayurveda",
        href: "/ayurveda-meal-prep-chef/",
      },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/wahurley/",
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/alec-hurley-530a2660/",
      },
    ],
  };

  return (
    <>
      <footer
        className={`bg-primary-800 pt-20 pb-10 lg:pb-6 ${
          hideFooter && "hidden"
        }`}
      >
        <div className="container">
          <div className="grid lg:grid-cols-12 lg:justify-between space-y-20 lg:space-y-0 lg:space-x-8 xl:space-x-16 mb-28 lg:mb-20">
            <div className="lg:col-start-1 lg:col-span-3">
              <div className="flex items-center justify-center md:justify-start">
                <AniLink fade to="/">
                  <img src={data.logo.publicURL} alt="Deeply Nourished Logo" />
                </AniLink>
              </div>
            </div>

            <div className="lg:col-end-13 lg:col-span-9">
              <div className="grid grid-cols-2 gap-y-16 lg:gap-y-0 lg:flex lg:justify-between">
                <div className="lg:pr-6 xl:pr-10">
                  <div className="text-lg text-white font-bold mb-5">
                    Meal Prep
                  </div>

                  <ul className="flex flex-col space-y-2">
                    {navigation.mealPrep.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                    <li className="whitespace-nowrap">
                      <a
                        href="https://livedeeplynourished.goprep.com/customer/menu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-primary-400 no-underline"
                      >
                        Order Now
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-lg text-white font-bold mb-5">
                    Private Events
                  </div>

                  <ul className="flex flex-col space-y-2">
                    {navigation.privateEvents.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:pr-6 xl:pr-10 lg:pl-6 xl:pl-10">
                  <div className="text-lg text-white font-bold mb-5">About</div>

                  <ul className="flex flex-col space-y-2">
                    {navigation.about.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <AniLink
                          fade
                          to={item.href}
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </AniLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:pl-6 xl:pl-10">
                  <div className="text-lg text-white font-bold mb-5">
                    Social
                  </div>

                  <ul className="flex flex-col space-y-2">
                    {navigation.social.map((item) => (
                      <li key={item.name} className="whitespace-nowrap">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white hover:text-primary-400 no-underline"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-items-center md:justify-between md:items-center lg:pt-4 text-white">
            <div className="md:flex md:items-center mb-8 md:mb-0">
              <ul className="flex items-center flex-wrap space-x-4 justify-center md:justify-start">
                <li className="text-xs">© {getYear()} Deeply Nourished</li>
                <li className="text-xs">
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="hover:text-primary-400 no-underline"
                  >
                    Privacy Policy
                  </AniLink>
                </li>
                <li className="text-xs">
                  <AniLink
                    fade
                    to="/terms-of-use/"
                    className="hover:text-primary-400 no-underline"
                  >
                    Terms of Use
                  </AniLink>
                </li>
              </ul>
            </div>

            <div className="text-xs w-full md:w-auto">
              <a
                className="no-underline hover:text-primary-400 flex items-center justify-center md:justify-start space-x-1"
                href="https://www.wisedigitalpartners.com/affordable-web-design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Powered by</span> <img src={nestLogo} alt="NEST logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
