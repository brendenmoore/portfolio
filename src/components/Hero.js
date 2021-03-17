import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      siteData:sanitySiteData(title: { eq: "default" }) {
        heading
        subheading
      }
    }
  `);

  const {siteData:{heading, subheading}} = data;

  return (
    <main className="container py-12 md:py-16 grid grid-cols-3 gap-6 sm:grid-cols-2 h-96 sm:h-80vh">
      <div className="flex justify-center items-center w-full col-start-1 sm:col-start-2">
        <StaticImage
          src="../images/profile.jpg"
          alt="Profile"
          placeholder="blurred"
          className="object-cover w-28 h-28 rounded-full sm:w-full sm:h-full sm:rounded-md max-h-80 max-w-lg shadow"
        ></StaticImage>
      </div>
      <div className="space-y-3 col-span-2 col-start-2 row-start-1 sm:col-span-1 sm:col-start-1 flex flex-col justify-center text-center sm:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif">
          {/* Brenden <span className="text-6xl sm:text-7xl">Moore</span> */}
          {heading}
        </h1>
        <h2 className="text-2xl sm:text-3xl text-blue-500">{subheading}</h2>
      </div>
    </main>
  );
};

export default Hero;
