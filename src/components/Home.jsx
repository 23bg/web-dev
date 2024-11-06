import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Home = () => {
  return (
    <main className="p-[1rem]  font-[Roobert] mt-[6rem] mx-[8vw]">
      <div className=" flex flex-col lg:flex-row justify-between gap-[8vw] ">
        <div className="lg:h-[200px]  lg:w-[50%] border-none border-black">
          <h1 className="text-6xl md:text-5xl lg:text-[4rem] font-bold">
            Flexible, risk-free pricing
          </h1>
        </div>

        <div className=" border-none lg:w-[50%]  flex flex-col items-start justify-around ">
          <h3 className="text-[1.2rem]  w-[80%]">
            Access 75+ data providers, web scraping, and AI message drafting in
            one place with Clay credits - no subscriptions needed.
          </h3>
          <span className="flex gap-6 items-center mt-[1rem] lg:mt-0">
            <button className="w-fit text-sm py-[8px] px-2 lg:px-[10px]  bg-black text-white flex items-center gap-1 lg:gap-3 rounded-md hover:bg-black/60 transition-opacity duration-300 cursor-pointer">
              Try for free <HiOutlineArrowSmRight size={20} />
            </button>
            <button className="text-sm w-fit py-[8px] px-2 lg:px-[10px] border border-black flex items-center gap-1 lg:gap-3 rounded-md  cursor-pointer">
              Talk to GTM Engineer <HiOutlineArrowSmRight size={20} />
            </button>
          </span>
        </div>
      </div>

      <div className="mt-[5rem]">
        <h2 className="uppercase font-semibold text-sm py-[1rem]">
          trusted by 100,000 leading gtm teams:
        </h2>
        <div className="flex justify-around gap-5 flex-wrap">
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac2913afacf1bcac1a936_img-logo-intercom.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac29242c23ab5f82e0189_img-logo-verkada.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac29242c23ab5f82e016f_img-logo-brex.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac292f8c407c51112b161_img-logo-notion.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac292f8c407c51112b18c_img-logo-vanta.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/672107541763d4820dd26a31_img-logo-hubspot.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dacb4608a223faada2fd6f_img-logo-anthropic.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291bafa65b8a43918f9_img-logo-ramp.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291fff0c4b20c048d39_img-logo-hightouch.svg"
              alt=""
            />
          </span>
          {/* <br /> */}
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac292f072700e680de76b_img-logo-mercury.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291cb51116e451a2ab9_img-logo-dbt.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac298a8e9a9049594eb17_img-logo-replit.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/67000350cad1e3770226ada6_img-logo-dropbox.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291da8ca070ebbbaca6_img-logo-deel.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291a371e5308122736e_img-logo-grafana.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac2925f1b5771d68ce8b1_img-logo-sigma.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291734995402ab0607c_img-logo-square.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66dac291303e9ead2e73dd9f_img-logo-launchdarkly.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Home;
