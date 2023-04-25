import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center py-12">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-black">
        <a href="/">#Moto Rent</a>
      </h2>
      <img className="max-w-5xl" alt="" src="/rent-moto/assets/hero.svg" />
    </div>
  );
};

export default Hero;
