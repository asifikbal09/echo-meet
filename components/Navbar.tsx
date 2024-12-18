"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignIn, UserButton } from "@clerk/clerk-react";


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/icons/logo.png"
          width={32}
          height={32}
          alt="EchoMeet logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          EchoMeet
        </p>
      </Link>
      <div className="flex-between gap-5">
        

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
