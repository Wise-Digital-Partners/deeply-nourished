import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import styled from "@emotion/styled";
// import tw from "twin.macro";

const ReviewCards = () => {
  const data = useStaticQuery(graphql`
    {
      google: file(relativePath: { eq: "6.0 Reviews/Google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 85)
        }
      }
      yelp: file(relativePath: { eq: "6.0 Reviews/Yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 74)
        }
      }
      facebook: file(relativePath: { eq: "6.0 Reviews/Facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 123)
        }
      }
      headshot: file(relativePath: { eq: "6.0 Reviews/avatar.svg" }) {
        publicURL
      }
    }
  `);
  const reviews = [
    {
      name: "Joe Bennett",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I’m not going to lie, it’s not all that hard to find people who can make you an amazing meal. It is, however, hard to find a chef who can create a menu that can tie an evening full of laughter and experiences together. Chef Alec is that guy. From the moment he stepped foot into the kitchen, you could tell he had a passion for his craft. Fresh, locally grown produce- check. Quality cuts of meat- check. Customized menu to cater to specific food preferences- check. Consummate professional.",
    },
    {
      name: "Michael Kelly",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Chef Alec is quite frankly a unique experience the words, private chef, doesn't lend credence to. From menu creation to sourcing to execution to service. He is a true professional who can curate any experience you please. Highly recommend",
    },
    {
      name: "Lindsey M.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "We are so grateful for Alec's food each week. First off, the food is amazing! I have tried 10+ meal delivery services and I have never found anything as good as his food. The food is delivered twice a week, the sauces are so yummy and all of the food is fresh and top quality ingredients. Everything is always cooked perfectly. If you are in need of a meal delivery service look no further. He is local and the best around!",
    },
    {
      name: "Jordan T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Chef Alec's food is simply amazing! I requested information about weekly meal delivery for my husband and myself - Chef Alec reached out right away for a consultation. We have only been through a week of meals but I had to come here and share about our great experience! We can absolutely taste the quality of food and the care Chef Alec takes when preparing/packing/delivering. I can't believe the amount of flavor he can pack into each generous portion. The veggies are flavorful, the proteins are perfectly cooked, and each sauce/seasoning accompaniment is spot on with great balance. I am so thankful to have found a solution to our past meal delivery woes with healthy, fresh, nourishing food delivered to our home.",
    },
    {
      name: "Dmitry Sky",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Alec is an amazing chef, yoga instructor, life coach and all around great human. Alec helped me clean up my diet by showing me how simple it could be to prepare tasty food at home for myself. It’s been years and I still use the basics he taught me to create delicious healthy meals for myself and my loved ones. Alec also made me more conscious of how vital sleep is, because of him I’m in bed early and I’m up early. I hardy have any trouble falling asleep and I’m up at the crack of dawn ready to get my day going. I used to crash in the afternoon from the caffeine I would rely on in the morning, and would be useless after 12pm. Now I only drink coffee on occasion because I like the taste, I don’t need it anymore to plow through the day. Alec also inspired me to stretch more and more frequently, and to do this as a form of enjoyment and not as a chore. I’m amazed by how much tension we all hold in our body, just from existing, and how amazing it feels to just lay down on the floor each day, if only for 15min, and just handle it yourself for free.",
    },
    {
      name: "Ashely B.",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "My boyfriend planned a romantic Valentine's weekend for us. I was surprised to find out that he hired Chef Alec for the evening. My boyfriend is usually a simple eater and not the biggest fan of veggies. Chef Alec used naturally grown produce and prepared it so thoughtfully that my boyfriend ate all of his veggies first! My boyfriend told me that booking Chef Alec was a breeze and he was able to make changes to the menu to make it to our liking. Chef Alec was on time, well prepared, and made our night a memory that we will never forget. He explained every course and insured that we were pleased with everything. Chef Alec was extremely personable and easy to talk to. My boyfriend and I are already planning to hire Chef Alec again for my mom's birthday this summer. Thank you Chef Alec for making our Valentine's Day so special!",
    },
    {
      name: "Rose Ryan",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Higher Self Wellness is a great place to find community where you can be supported in your wellness journey. Alec meets you wherever you are and provides practical support. This ranges from simple healthy recipes, building healthy habits, understanding the 'why' behind these habits, free demo videos on everything from how to use a dry brush to cooking to yoga. I have benefitted greatly from this group as its a fantastic free resource. Alec answers my specific questions promptly and gives practical, real world advice. This has made me feel more hopeful about my path on becoming the person I want to be, and has also led me to other beneficial offerings by Alec. He is extremely knowledgable, professional, and his content is fun and easy to consume.",
    },
    {
      name: "Jacqueline Burbage",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "Alec is the best. When I met him almost 2 years ago I learned that he was a great yoga teacher and then I further learned that he was an Ayurvedic health life coach. That was exactly what I needed at that time. It’s been almost a year participating in his program and I’ve learned quite a bit as well as been inspired for new daily habits and mindful eating. Highly recommend if you are looking for guidance and good coach that he is the man.",
    },
    {
      name: "Mor T.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "The experience was excellent!!! From booking to the dinner itself everything was just perfect. I reached out to Alec about 3 weeks before Valentine's Day and scheduled him for a romantic dinner for my husband and I. He then sent me menu options and was very clear he's willing to change things around to make us happy. I'm a big foodie but the menu looked so good I chose my options and added wine pairing for it too, YOU WILL NOT REGRET. Alec arrived right on time and the food was beyond delicious, my husband and I couldn't be happier. Alec made us feel like his only goal is to make the experience as good as possible for us and he did. Alec is amazing! Awesome food, everything was fresh (some from his own garden), wine pairing was perfect. Was the best meal we ever had!!! Thank you Alec, for a absolutely wonderful evening",
    },
    {
      name: "Nathaniel Boyden",
      platform: data.google.childImageSharp.gatsbyImageData,
      quote:
        "I’ve known Alec since 2015. I did some yoga classes and surfing with him and it was clear he is an amazing human being. His approach to yoga and ability to tailor it to his audience is one reason why I continue to seek out his services.",
    },
    {
      name: "Ryan Y.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Chef Alec arrived last night at our rental house as a surprise 40th anniversary dinner and 70th birthday. We started with a charcuterie board that could have been the whole meal in and of itself. We moved onto a fresh salad, scallops with seared strip steak, and topped the evening off with chocolate molten lava cake. While the food itself was amazing, Chef Alec was relaxed and easygoing. He understood we were also in the midst of bedtime with a 1 year old and a 3 year old that kept coming down the stairs to peer in on what fancy adult things were happening downstairs. If you're planning something special, and need delicious food and a responsive chef look no further! Thank you so much.",
    },
    {
      name: "Caitlin R.",
      platform: data.yelp.childImageSharp.gatsbyImageData,
      quote:
        "Alec catered my birthday party this past weekend and I have nothing but nice things to say! Over 100 people showed up. He provided small appetizer bites that were a huge hit with my guests! I work in health and fitness and most of my guests are health conscious as well so it was refreshing to enjoy healthy/clean cooking guilt free! Amazing! 10/10. He was professional and timely.",
    },
  ];

  return (
    <>
      {reviews.map((review, i) => {
        return (
          <div
            className="break-inside w-full bg-white border border-solid border-gray-300 rounded-lg p-6 md:pt-8 md:px-6 mb-8 md:mb-10"
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-3.5">
                  <span className="text-gray-900 font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div>
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-0 before:hidden text-sm md:text-base">
                {review.quote}
              </q>
            </blockquote>
            {/* <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div> */}
          </div>
        );
      })}
    </>
  );
};

export default ReviewCards;
