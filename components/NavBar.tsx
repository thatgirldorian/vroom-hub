import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            width={118}
            alt="vroom-hub-logo"
            height={18}
            className="object-contain"
          />
        </Link>

        <Button
          title="Sign In"
          btnType="submit"
          containerStyles="text-primary-blue rounded-full  bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
