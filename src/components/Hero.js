import React from "react";
import profile from "../images/profile.jpg";

const Hero = () => {
  return (
    <main className="container py-12 md:py-16 grid grid-cols-3 gap-6 sm:grid-cols-2 h-80vh">
      <div className="flex justify-center items-center w-full col-start-1 sm:col-start-2">
        <img
          src={profile}
          alt="Profile"
          className="object-cover w-28 h-28 rounded-full sm:w-full sm:h-full sm:rounded-md max-h-80 max-w-lg"
        ></img>
      </div>
      <div className="space-y-3 col-span-2 col-start-2 row-start-1 sm:col-span-1 sm:col-start-1 flex flex-col justify-center">
        <h1 className="text-7xl sm:text-6xl md:text-7xl font-serif">
          Brenden Moore
        </h1>
        <h2 className="text-3xl text-blue-500">Web Developer</h2>
      </div>
    </main>
  );
};

export default Hero;
