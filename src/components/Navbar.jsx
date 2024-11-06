import React, { useState } from "react";
import LOGO from "../assets/logo-clay.webp";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { HiOutlineArrowSmRight } from "react-icons/hi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center h-full px-[1.5rem] max-w-[2000px] font-[Roobert] py-[20px] sticky top-0 z-[3] bg-white">
        <a href="/" className="no-underline w-[5rem]">
          <img src={LOGO} alt="logo" className="h-auto w-full" />
        </a>
        <div className="links hidden lg:flex gap-6">
          <h4 className="cursor-pointer">Product</h4>
          <h4 className="cursor-pointer">Solution</h4>
          <h4 className="cursor-pointer">Resources</h4>
          <h4 className="cursor-pointer">Company</h4>
          <h4 className="cursor-pointer">Enterprice</h4>
          <h4 className="cursor-pointer border-b border-black pb-1">Pricing</h4>
        </div>

        <div className="ctas flex gap-4 lg:gap-7 items-center">
          <div className="lg:hidden">
            {isMenuOpen ? (
              <RiCloseFill
                size={20}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <RiMenuFill
                size={20}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </div>
          <span className="cursor-pointer">Login</span>
          <span className="px-3 lg:px-[16px] py-[8px] bg-black text-white flex items-center gap-3 rounded-md hover:bg-black/60 transition-opacity duration-300 cursor-pointer ">
            Sign up <HiOutlineArrowSmRight size={20} />
          </span>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="links flex flex-col  gap-4  lg:hidden  w-full bg-white absolute z-[3]">
          <h4 className="cursor-pointer p-[1.2rem] border-b border-gray-300">
            Product
          </h4>
          <h4 className="cursor-pointer p-[1.2rem] border-b border-gray-300">
            Solution
          </h4>
          <h4 className="cursor-pointer p-[1.2rem] border-b border-gray-300">
            Resources
          </h4>
          <h4 className="cursor-pointer p-[1.2rem] border-b border-gray-300">
            Company
          </h4>
          <h4 className="cursor-pointer p-[1.2rem] border-b border-gray-300">
            Enterprise
          </h4>
          <h4 className="cursor-pointer p-[1.2rem] border-b border-gray-300">
            Pricing
          </h4>
          <div className="px-[16px] py-[8px] w-fit m-[1.2rem] bg-black text-white flex items-center gap-3 rounded-md hover:bg-black/60 transition-opacity duration-300 cursor-pointer ">
            Start building -- for free
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
