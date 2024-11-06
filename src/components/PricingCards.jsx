import React from "react";

const PricingCards = () => {
  return (
    <div className="font-[Roobert] mx-[8vw] mt-[3rem] lg:mt-[11vw]">
      <h1 className="font-bold text-6xl md:text-5xl lg:text-[3rem] w-fit">
        Flexible pricing: build your <br /> data stack, your way
      </h1>
      <div className="flex flex-wrap gap-3 mt-[3rem] grid-cols-3 justify-between">
        <div className=" hover:shadow-2xl transition-all py-[32px] px-[3rem] flex flex-col justify-start col-span-1 w-full md:w-[350px] gap-2 border-[10px] rounded-md border-[#EFF1F3]">
          <img
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2856bbc689d64e6aa3e_3d-icon-research.avif"
            alt="img"
            className="h-[70px] w-[60px]"
          />
          <h5 className="font-bold">All in one</h5>
          <p>
            Access 100+ databases of leads and company research - without
            subscribing to a single external plan. Just pay for what you use
            with Clay credits. If you already have external plans with a
            provider, you can still use them on Clay for free!
          </p>
        </div>
        <div className="hover:shadow-2xl transition-all  py-[32px] px-[3rem] flex flex-col justify-start col-span-1 w-full md:w-[350px] gap-2 border-[10px] rounded-md border-[#EFF1F3]">
          <img
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c2853066e82e7262382c_3d-icon-career.avif"
            alt="img"
            className="h-[70px] w-[60px]"
          />
          <h5 className="font-bold">No middle-men</h5>
          <p>
            We never white-label or overcharge you to use data providers on
            Clay. Instead, we let you go to the source: directly access
            providers at wholesale prices. Understand exactly what providers
            your data is coming from, try them out, and adjust as needed.
          </p>
        </div>
        <div className="hover:shadow-2xl transition-all  py-[32px] px-[3rem] flex flex-col justify-start col-span-1 w-full md:w-[350px] gap-2 border-[10px] rounded-md border-[#EFF1F3]">
          <img
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/66968abca946b59ed38891ca_3d-icon-wave.avif"
            alt="img"
            className="h-[70px] w-[60px]"
          />
          <h5 className="font-bold">Save as you grow</h5>
          <p>
            Grow with Clay to unlock increasingly big savings! The higher your
            Clay plan is, the lower your cost per credit will be. Our Pro plan
            is up to 7x cheaper than our starter plan.
          </p>
        </div>
        <div className="hover:shadow-2xl transition-all  py-[32px] px-[3rem] flex flex-col justify-start col-span-1 w-full  gap-2 border-[10px] rounded-md border-[#EFF1F3]">
          <img
            src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6696c285a5ca1580d2949393_3d-icon-data.avif"
            alt="img"
            className="h-[70px] w-[60px]"
          />
          <h5 className="font-bold">Estimate your credits usage</h5>
          <p>
            Grow with Clay to unlock increasingly big savings! The higher your
            Clay plan is, the lower your cost per credit will be. Our Pro plan
            is up to 7x cheaper than our starter plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
