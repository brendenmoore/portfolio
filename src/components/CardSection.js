import React from "react";
import { Link } from "gatsby";

const CardSection = () => {
  return (
    <section className="bg-blue-400 mt-8">
      <div className="container flex justify-center">
        <div className="grid sm:grid-cols-3 gap-4 relative -top-8 text-2xl md:text-4xl font-thin w-4/6 sm:w-full">
          <Link
            to="/resume"
            className="bg-white rounded shadow border-2 border-black h-16 sm:h-32 flex items-center justify-center"
          >
            <h1>Resume</h1>
          </Link>
          <Link
            to="/resume"
            className="bg-white rounded shadow border-2 border-black h-16 sm:h-32 flex items-center justify-center "
          >
            <h1>LinkedIn</h1>
          </Link>
          <Link
            to="/resume"
            className="bg-white rounded shadow border-2 border-black h-16 sm:h-32 flex items-center justify-center"
          >
            <h1>GitHub</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
