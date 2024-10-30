"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProp {}

const Navbar = ({}: IProp) => {
  const [isDrop, setIsDrop] = useState(false);
  const [isDropp, setIsDropp] = useState(false);
  const [isDroppp, setIsDroppp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-20 flex justify-between items-center w-full px-4 py-4 bg-white shadow-md">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navbar */}
      {!isMenuOpen && (
        <>
          <div>
            <Image
              className="mx-9 mt-2 cursor-pointer"
              alt="logo"
              src="/img_1.png"
              width={30}
              height={30}
            />
          </div>
          <div>
            <ul className="hidden md:flex justify-between items-center space-x-16 mt-6">
              <li
                className="text-lg font-semibold cursor-pointer"
                onMouseEnter={() => setIsDrop(true)}
                onMouseLeave={() => setIsDrop(false)}
              >
                Product
              </li>
              <li
                className="text-lg font-semibold cursor-pointer"
                onMouseEnter={() => setIsDropp(true)}
                onMouseLeave={() => setIsDropp(false)}
              >
                Solutions
              </li>
              <li
                className="text-lg font-semibold cursor-pointer"
                onMouseEnter={() => setIsDroppp(true)}
                onMouseLeave={() => setIsDroppp(false)}
              >
                Company
              </li>
              <li className="relative cursor-pointer group inline-block">
                <span className="text-lg font-semibold">Enterprise</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative cursor-pointer group inline-block">
                <span className="text-lg font-semibold">Pricing</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>

            {/* Dropdown Menus */}
            <div className="container">
              {isDrop && (
                <DropdownMenu onMouseEnter={() => setIsDrop(true)} onMouseLeave={() => setIsDrop(false)} />
              )}
              {isDropp && (
                <DropdownMenu onMouseEnter={() => setIsDropp(true)} onMouseLeave={() => setIsDropp(false)} />
              )}
              {isDroppp && (
                <DropdownMenu onMouseEnter={() => setIsDroppp(true)} onMouseLeave={() => setIsDroppp(false)} />
              )}
            </div>
          </div>

          {/* Login and Signup Buttons */}
          <div className="space-x-4 hidden md:flex mt-4">
            <button className="cursor-pointer">Login</button>
            <button className="cursor-pointer bg-black text-white hover:bg-slate-800 rounded-md py-2 px-4">
              Signup
            </button>
          </div>
        </>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center w-full space-y-4 mt-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Product
          </Link>
          <Link href="/courts" onClick={() => setIsMenuOpen(false)}>
            Solutions
          </Link>
          <Link href="/profile/settings" onClick={() => setIsMenuOpen(false)}>
            Company
          </Link>
          <Link href="/ownerpage" onClick={() => setIsMenuOpen(false)}>
            Enterprise
          </Link>
          <Link href="/ownerpage" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>

          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Dropdown Menu Component
const DropdownMenu = ({ onMouseEnter, onMouseLeave }:{onMouseEnter:()=>void ,onMouseLeave:()=>void}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="absolute left-0 w-full bg-white text-gray-800 shadow-lg mt-5 border-t border-gray-200"
  >
    <div className="max-w-screen-lg mx-auto px-4 py-2 grid grid-cols-2 gap-4">
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
        Careers
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
        Customer stories
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
        LinkedIn
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
        YouTube
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
        Blog
      </a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
        GitHub
      </a>
    </div>
  </div>
);

export default Navbar;

