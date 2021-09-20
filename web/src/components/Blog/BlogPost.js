import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
// import { differenceInDays, formatDistance, format } from "date-fns";
// import AuthorList from "./AuthorList";
import PortableText from "./portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";

import CallToAction from "../Repeating/CTA";
import RecentBlogPosts from "../Repeating/RecentBlogPosts";

const StyledContent = styled.div`
  /* p,
  span,
  li {
    ${tw``}
  } */
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
`;

function BlogPost(props) {
  const {
    _rawBody,
    // authors,
    categories,
    title,
    mainImage,
    // publishedAt,
  } = props;
  return (
    <article className="pt-12 md:pt-16">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <header>
            <h1>{title}</h1>
          </header>

          {categories && (
            <div className="mb-8">
              <ul>
                {categories.slice(0, 1).map((category) => (
                  <li
                    className="text-primary-400 font-bold tracking-widest uppercase"
                    key={category._id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {mainImage && mainImage.asset && (
            <div className="text-center mb-10 md:mb-12">
              <GatsbyImage
                image={props.mainImage.asset.gatsbyImageData}
                alt={props.mainImage.alt}
                className="md:h-[480px]"
              />
            </div>
          )}

          <StyledContent className="mb-24 md:mb-40">
            {_rawBody && <PortableText blocks={_rawBody} />}
          </StyledContent>
        </div>
        {/* <aside> */}
        {/* {publishedAt && (
            <div>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Mo, yyyy")}
            </div>
          )} */}
        {/* {authors && <AuthorList items={authors} title="Authors" />} */}
        {/* </aside> */}
      </div>

      <RecentBlogPosts heading={false} className="mb-20 md:mb-32" />

      <CallToAction
        heading={[
          "Let’s Become ",
          <span className="text-primary-400">Partners</span>,
        ]}
        subtext="From short-term help to long-term staff members for your hotel, restaurant, or other establishments, we can get you the staffing you need. Contact us today!"
      />
    </article>
  );
}

export default BlogPost;
