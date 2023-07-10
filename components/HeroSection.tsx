"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";

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
          title="Discover Motorbikes"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 handleClick={handleScroll}"
          handleClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/bike03.png"
            alt="hero-image-of-a-motorbike"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
