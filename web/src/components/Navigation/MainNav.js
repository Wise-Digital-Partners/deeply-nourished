import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useOnClickOutside } from "../../hooks";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import { GatsbyImage } from "gatsby-plugin-image";

import Burger from "./Burger";
import OffCanvas from "../OffCanvas/OffCanvas";
import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const MainNav = ({
  headerStyle,
  headerHasBorder,
  headerLinkColor,
  scrolled,
}) => {
  // determine if offcanvas is open
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const [subMenuHovering1, setSubMenuHovering1] = useState(false);
  const isHoveringSubMenu1 = () => setSubMenuHovering1(true);
  const notHoveringSubMenu1 = () => setSubMenuHovering1(false);

  const [subMenuHovering2, setSubMenuHovering2] = useState(false);
  const isHoveringSubMenu2 = () => setSubMenuHovering2(true);
  const notHoveringSubMenu2 = () => setSubMenuHovering2(false);

  const [subMenuHovering3, setSubMenuHovering3] = useState(false);
  const isHoveringSubMenu3 = () => setSubMenuHovering3(true);
  const notHoveringSubMenu3 = () => setSubMenuHovering3(false);

  // handle click of navigation items
  const clickHandler = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  // close offcanvas onclick outside
  const node = useRef();
  useOnClickOutside(node, () => setOffcanvasOpen(false));

  const data = useStaticQuery(graphql`
    {
      darkLogo: file(relativePath: { eq: "global/Deeply Nourished Logo.png" }) {
        publicURL
      }
      lightLogo: file(
        relativePath: { eq: "global/Deeply Nourished Logo.png" }
      ) {
        publicURL
      }
      mobileLogo: file(relativePath: { eq: "global/Logo Simple.svg" }) {
        publicURL
      }
    }
  `);

  // Define logos based on header style
  let initialLogo = null,
    stickyLogo = null,
    mobileLogo = null,
    className = null;

  if (headerStyle === "overlap" || headerStyle === "overlap-hero") {
    initialLogo = data.lightLogo.publicURL;
    stickyLogo = data.darkLogo.publicURL;
    mobileLogo = data.mobileLogo.publicURL;
    className = "absolute";
  } else {
    initialLogo = data.darkLogo.publicURL;
    stickyLogo = data.darkLogo.publicURL;
    mobileLogo = data.mobileLogo.publicURL;
  }

  if (offcanvasOpen) {
    initialLogo = data.darkLogo.publicURL;
    stickyLogo = data.darkLogo.publicURL;
    mobileLogo = data.mobileLogo.publicURL;
  }

  const navigation = {
    mealPrep: [
      {
        name: "Meal Prep",
        href: "/organic-meal-prep-delivery/",
      },
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
        name: "Events",
        href: "/private-chef-for-events/",
      },
      {
        name: "Dinner Parties",
        href: "/private-chef-for-dinner-parties/",
      },
      {
        name: "Catering",
        href: "/organic-food-catering-san-diego/",
      },
    ],
    about: [
      {
        name: "Meet Alec / The Chef",
        href: "/alec-hurley/",
      },
      {
        name: "Ayurveda",
        href: "/ayurveda-meal-prep-chef/",
      },
      {
        name: "Reviews",
        href: "/testimonials/",
      },
    ],
  };

  return (
    <nav
      id="main-navigation"
      className={`py-2 lg:py-4 bg-white w-full transition duration-300 ease-linear ${
        headerStyle === "overlap"
          ? "lg:bg-transparent"
          : "lg:bg-white shadow-3xl"
      } ${headerHasBorder && "border-b border-solid border-gray-300"} ${
        offcanvasOpen ? "" : ""
      } ${
        scrolled && "!fixed !bg-white top-0 left-0 w-full shadow-3xl z-50"
      } ${className}`}
      role="navigation"
      aria-label="main-navigation"
      offcanvasOpen={offcanvasOpen}
    >
      <div className="container relative flex justify-between items-center">
        <div className="flex-auto lg:hidden"></div>
        <div className="flex-auto flex items-center justify-center lg:justify-start">
          <AniLink fade to="/">
            <div className={`${scrolled && "hidden"}`}>
              <div className="hidden lg:block">
                <img
                  src={initialLogo}
                  alt="Deeply Nourished Logo"
                  className="w-[125px] md:w-[156px]"
                />
              </div>
              <div className="lg:hidden">
                <img
                  src={mobileLogo}
                  alt="Deeply Nourished Logo"
                  className="w-[33px]"
                />
              </div>
            </div>

            <div className={`hidden ${scrolled && "!block"}`}>
              <div className="hidden lg:block">
                <img
                  src={stickyLogo}
                  alt="Deeply Nourished Logo"
                  className="w-[125px] md:w-[156px]"
                />
              </div>
              <div className="lg:hidden">
                <img
                  src={mobileLogo}
                  alt="Deeply Nourished Logo"
                  className="w-[33px]"
                />
              </div>
            </div>
          </AniLink>
        </div>
        <div className="flex items-center justify-end flex-auto">
          <ul
            id="navigation-desktop"
            className="hidden lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:justify-end lg:mr-8"
          >
            <li className={`group relative ${subMenuHovering1 && "active"}`}>
              <AniLink
                fade
                to="/organic-meal-prep-delivery/"
                onMouseEnter={isHoveringSubMenu1}
                onMouseLeave={notHoveringSubMenu1}
                className={`font-body font-semibold tracking-wider pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                Meal Prep
              </AniLink>
              <ul className="absolute top-0 bg-white/80 backdrop-filter backdrop-blur-sm shadow-5xl flex flex-col space-y-5 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-12 opacity-0 group-hover:opacity-100 py-8 px-6 z-10 transition-all duration-300 ease-linear">
                {navigation.mealPrep.slice(1).map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="font-body text-gray-900 hover:text-primary-400 font-semibold tracking-wide"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`group relative ${subMenuHovering2 && "active"}`}>
              <AniLink
                fade
                to="/private-chef-for-events/"
                onMouseEnter={isHoveringSubMenu2}
                onMouseLeave={notHoveringSubMenu2}
                className={`font-body font-semibold tracking-wider pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                Private Events
              </AniLink>
              <ul className="absolute top-0 bg-white/80 backdrop-filter backdrop-blur-sm shadow-5xl flex flex-col space-y-5 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-12 opacity-0 group-hover:opacity-100 py-8 px-6 z-10 transition-all duration-300 ease-linear">
                {navigation.privateEvents.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="font-body text-gray-900 hover:text-primary-400 font-semibold tracking-wide"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
                <li className="whitespace-nowrap">
                  <a
                    href="https://epicurate.vip/t/deeply-nourished"
                    target="_blank"
                    className="font-body text-gray-900 hover:text-primary-400 font-semibold tracking-wide"
                  >
                    Book Alec
                  </a>
                </li>
              </ul>
            </li>

            <li className={`group relative ${subMenuHovering3 && "active"}`}>
              <AniLink
                fade
                to="/alec-hurley/"
                onMouseEnter={isHoveringSubMenu3}
                onMouseLeave={notHoveringSubMenu3}
                className={`font-body font-semibold tracking-wider pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                About
              </AniLink>
              <ul className="absolute top-0 bg-white/80 backdrop-filter backdrop-blur-sm shadow-5xl flex flex-col space-y-5 w-auto invisible group-hover:visible transform -translate-x-8 translate-y-20 group-hover:translate-y-12 opacity-0 group-hover:opacity-100 py-8 px-6 z-10 transition-all duration-300 ease-linear">
                {navigation.about.map((item) => (
                  <li key={item.name} className="whitespace-nowrap">
                    <AniLink
                      fade
                      to={item.href}
                      className="font-body text-gray-900 hover:text-primary-400 font-semibold tracking-wide"
                    >
                      {item.name}
                    </AniLink>
                  </li>
                ))}
              </ul>
            </li>
            <li
              className={`group relative cursor-pointer ${
                subMenuHovering3 && "active"
              }`}
            >
              <a
                data-modal-open="modal-contact"
                className={`font-body font-semibold tracking-wider pb-8 ${
                  scrolled && "text-gray-900"
                } ${
                  headerLinkColor === "white"
                    ? "text-white hover:text-white"
                    : "text-gray-900 hover:text-primary-400"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="hidden lg:inline-flex lg:items-center lg:space-x-4">
            <ButtonGhost
              outboundLink
              href="http://livedeeplynourished.sprwt.in/currentmenu/"
              text="Shop Meals"
              className="min-w-0"
            />
            <ButtonSolid
              outboundLink
              href="http://livedeeplynourished.sprwt.in/subscription"
              text="Subscription"
              className="min-w-0"
            />
          </div>

          <div className="lg:hidden" ref={node}>
            <Burger
              offcanvasOpen={offcanvasOpen}
              setOffcanvasOpen={setOffcanvasOpen}
              headerStyle={headerStyle}
              scrolled={scrolled}
              aria-controls="offcanvas-navigation"
            />
            <OffCanvas offcanvasOpen={offcanvasOpen} id="offcanvas-navigation">
              <div className="max-w-[258px] mx-auto">
                <ul id="navigation-mobile" className="mb-12 text-center">
                  <Accordion
                    allowZeroExpanded={true}
                    className="flex flex-col space-y-10"
                  >
                    <li>
                      <AccordionItem uuid={1}>
                        <AccordionItemButton className="flex items-center justify-center focus:outline-none">
                          <div className="font-heading text-4xl text-gray-900 hover:text-primary-400 font-medium no-underline mb-0 transition-colors duration-300 ease-linear">
                            Meal Prep
                          </div>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6 max-w-4xl">
                          <ul className="flex flex-col space-y-4">
                            {navigation.mealPrep.map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  onKeyDown={clickHandler}
                                  onClick={clickHandler}
                                  className="font-body text-gray-900 hover:text-primary-400"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AccordionItem uuid={2}>
                        <AccordionItemButton className="flex items-center justify-center focus:outline-none">
                          <div className="font-heading text-4xl text-gray-900 hover:text-primary-400 font-medium no-underline mb-0 transition-colors duration-300 ease-linear">
                            Private Events
                          </div>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6 max-w-4xl">
                          <ul className="flex flex-col space-y-4">
                            {navigation.privateEvents.map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  onKeyDown={clickHandler}
                                  onClick={clickHandler}
                                  className="font-body text-gray-900 hover:text-primary-400"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                            <li className="whitespace-nowrap">
                              <a
                                href="https://epicurate.vip/t/deeply-nourished"
                                target="_blank"
                                onKeyDown={clickHandler}
                                onClick={clickHandler}
                                className="font-body text-gray-900 hover:text-primary-400"
                              >
                                Book Alec
                              </a>
                            </li>
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>

                    <li>
                      <AccordionItem uuid={3}>
                        <AccordionItemButton className="flex items-center justify-center focus:outline-none">
                          <div className="font-heading text-4xl text-gray-900 hover:text-primary-400 font-medium no-underline mb-0 transition-colors duration-300 ease-linear">
                            About
                          </div>
                        </AccordionItemButton>

                        <AccordionItemPanel className="pt-6 max-w-4xl">
                          <ul className="flex flex-col space-y-4">
                            {navigation.about.map((item) => (
                              <li key={item.name} className="whitespace-nowrap">
                                <AniLink
                                  fade
                                  to={item.href}
                                  onKeyDown={clickHandler}
                                  onClick={clickHandler}
                                  className="font-body text-gray-900 hover:text-primary-400"
                                >
                                  {item.name}
                                </AniLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </li>
                  </Accordion>
                </ul>

                <div className="flex justify-center space-x-4">
                  <ButtonGhost
                    outboundLink
                    href="http://livedeeplynourished.sprwt.in/subscription"
                    text="Subscription"
                  />
                  <ButtonSolid
                    outboundLink
                    href="http://livedeeplynourished.sprwt.in/currentmenu/"
                    text="Shop Meals"
                  />
                </div>
              </div>
            </OffCanvas>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default MainNav;
