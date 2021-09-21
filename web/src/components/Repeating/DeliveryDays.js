import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      mondayIcon: file(
        relativePath: { eq: "repeating/Delivery Days/Monday.svg" }
      ) {
        publicURL
      }
      wednesdayIcon: file(
        relativePath: { eq: "repeating/Delivery Days/Wednesday.svg" }
      ) {
        publicURL
      }
    }
  `);

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 text-center">
          <div className="bg-secondary-100 border border-secondary-500 rounded-lg p-6 md:p-10">
            <div className="mb-2">
              <img
                src={data.mondayIcon.publicURL}
                alt="Delivery icon"
                className="mx-auto"
              />
            </div>
            <p className="heading-three mb-1 md:mb-3.5">Monday Deliveries</p>
            <p className="text-sm md:text-base mb-0">
              For Monday deliveries all orders must be placed by 11:59pm on the
              preceding Friday.
            </p>
          </div>

          <div className="bg-tertitary-50 border border-gray-100 rounded-lg p-6 md:p-10">
            <div className="mb-2">
              <img
                src={data.wednesdayIcon.publicURL}
                alt="Delivery icon"
                className="mx-auto"
              />
            </div>
            <p className="heading-three mb-1 md:mb-3.5">Wednesday Deliveries</p>
            <p className="text-sm md:text-base mb-0">
              For Wednesday deliveries all orders must be placed by 11:59pm on
              the preceding Monday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
