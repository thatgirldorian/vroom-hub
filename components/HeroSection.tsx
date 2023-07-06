"use client";

import React from "react";
import Button from "./Button";

const HeroSection = () => {
  const handleScroll = () => {
    //do somethimg when the button is clicked
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Book or rent a motorbike - fast and effortlessly.
        </h1>

        <p className="hero__subtitle">
          Elevate your bike rental experience with our smooth and easy booking.
        </p>

        <Button
          title="Explore Motorbikes"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 handleClick={handleScroll}"
        />
      </div>
    </div>
  );
};

export default HeroSection;
