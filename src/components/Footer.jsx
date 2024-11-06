import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <footer className="h-[50vh]">
        <div className="relative z-[1] flex justify-center items-center flex-col ">
          <img
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/669941ab317c22673db64543_SHAPES-(1).webp"
            alt=""
            className=" w-full opacity-90 brightness-50"
          />

          <div className="flex h-[60%] justify-center items-center absolute top-[5rem] z-[2] text-white text-6xl text-center font-bold flex-col leading-normal">
            <div className="flex  flex-col  h-full justify-between items-center">
              <h1 className="text-xl lg:text-6xl">
                Start molding your dream <br /> campaigns today
              </h1>

              <h5 className="text-white text-sm lg:text-3xl text-center font-bold mt-[2rem]">
                Start your 14-day Pro trial today. No credit card required.
              </h5>

              <h3 className="flex items-center text-[1rem] lg:text-lg mt-[1rem] px-4 py-2 bg-white rounded-md text-black font-semibold cursor-pointer w-fit">
                Try it - it's free <HiOutlineArrowSmRight size={20} />
              </h3>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
