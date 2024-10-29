"use client";

import Image from "next/image";
import Link from "next/link";
import NavBottomLink from "../Links/NavBottom";
import ArrowLink from "../Links/ArrowLink";
import ToggleLink from "../Links/ToggleLink";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (show)
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    else document.getElementsByTagName("body")[0].style.overflow = "auto";
  }, [show]);

  return (
    <header className="z-10 bg-white flex justify-between items-center relative lg:fixed px-9 w-full border-1 border border-b-[#0000001f] h-[64px]">
      <Link href="/">
        <Image src="/logo.png" width={80} height={25} alt="" />
      </Link>
      <div className="absolute w-full left-0 pointer-events-none">
        <div className="items-center hidden lg:flex gap-2 mx-auto w-fit static pointer-events-auto">
          <ToggleLink desc="Product" router="/" />
          <ToggleLink desc="Solutions" router="/" />
          <ToggleLink desc="Resources" router="/" />
          <ToggleLink desc="Company" router="/" />
          <NavBottomLink desc="Enterprise" router="/" />
          <NavBottomLink desc="Pricing" router="/" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-0 px-4 lg:mr-4">
          <NavBottomLink desc="Login" router="/" />
        </div>
        <div className="mr-4 px-4 block lg:hidden">
          <button
            className="flex flex-col gap-[5px]"
            onClick={() => setShow(!show)}
          >
            <span
              className={`w-5 h-[3px] bg-black transition duration-300 ${
                show ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-[3px] bg-black transition duration-300 ${
                show ? "opacity-0" : "opacity-1"
              }`}
            ></span>
            <span
              className={`w-5 h-[3px] bg-black transition duration-300 ${
                show ? "rotate-[-45deg] translate-y-[-9px]" : ""
              }`}
            ></span>
          </button>
        </div>
        <ArrowLink desc="Sign up" router="/" mode />
      </div>
      <div
        className={`absolute top-[64px] left-0 w-full transition-all duration-300 overflow-hidden ${
          show ? "h-[60vh]" : "h-0"
        }`}
      >
        <p className="bg-white p-6 border-b border-[#f6f6f8] flex items-center gap-2 cursor-pointer">
          Product
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
        <p className="bg-white p-6 border-b border-[#f6f6f8] flex items-center gap-2 cursor-pointer">
          Solutions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
        <p className="bg-white p-6 border-b border-[#f6f6f8] flex items-center gap-2 cursor-pointer">
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
        <p className="bg-white p-6 border-b border-[#f6f6f8] flex items-center gap-2 cursor-pointer">
          Company
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
        <p className="bg-white p-6 border-b border-[#f6f6f8] flex items-center gap-2 cursor-pointer">
          Enterprise
        </p>
        <p className="bg-white p-6 border-b border-[#f6f6f8] flex items-center gap-2 cursor-pointer">
          Pricing
        </p>
      </div>
    </header>
  );
};

export default Header;
