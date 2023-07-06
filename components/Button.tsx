"use client";

import React from "react";
import Image from "next/image";

const Button = ({}) => {
  const handleClick = () => {
    // your event handler logic here
  };

  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>title</span>
    </button>
  );
};

export default Button;
