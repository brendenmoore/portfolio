import React from "react";
import profile from "../images/profile.jpg";

const Hero = () => {
  return (
    <main className="container py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2">
      <div className="flex justify-center w-full pb-12 sm:pb-0 sm:col-start-2">
        <img
          src={profile}
          alt="Profile"
          className="object-cover w-44 h-44 rounded-full sm:w-full sm:h-full sm:rounded-md max-h-80 max-w-lg"
        ></img>
      </div>
      <div className="space-y-3 sm:row-start-1 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif">
          Brenden Moore
        </h1>
        <h2 className="text-2xl sm:text-3xl text-gray-700">Web Developer</h2>
      </div>
    </main>
  );
};

export default Hero;
