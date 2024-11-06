import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

export default function Testmonials() {
  return (
    <div className="ml-[8vw]">
      <h1 className="text-6xl md:text-5xl lg:text-[4rem] font-bold my-[2rem]">
        What our customers say <br />
        about us...
      </h1>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-[5rem]"> */}
      <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper my-[5rem] "
      >
        <SwiperSlide>
          <div className="p-[1rem] h-[400px] w-[450px] border-[5px] border-black flex flex-col justify-between rounded-md ">
            <div>
              <img
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
              <p className="mt-[2rem]">
                Clay's innate multi-source data enrichment paired with
                customized GPT prompts offers powerful combination of AI and
                data orchestration for GTM teams.
              </p>
            </div>
            <div className="flex justify-between h-[30%] border-t border-black py-3">
              <div className="h-full flex gap-2">
                <img
                  src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66756a7232ecd63cd322883e_keith-jones.avif"
                  alt=""
                  className="h-full w-fit border-2 border-black rounded-md"
                />
                <div className="flex flex-col justify-end">
                  <p>Keith Jones</p>
                  <p>GTM Systems Lead, Open AI</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/66756b483018a6f31e1eb0b3_img-logo-icon-openai.svg"
                alt=""
                className="h-[60%]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[1rem] h-[400px] w-[450px] border-[5px] border-[#FDAD1F] flex flex-col justify-between">
            <div>
              <img
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
              <p className="mt-[2rem]">
                Clay should be an essential pillar of every company's GTM stack,
                enabling outbound built on the highest quality data foundation
                possible. Now you can automate hours of manual research so sales
                teams can focus on selling.
              </p>
            </div>
            <div className="flex justify-between h-[30%] border-t border-black py-3">
              <div className="h-full flex gap-2">
                <img
                  src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667c376cac4c1c2f449dc5c6_image%20(11)-p-500.avif"
                  alt=""
                  className="h-full w-fit border-2 border-black rounded-md"
                />
                <div className="flex flex-col justify-end">
                  <p>Stevie Case</p>
                  <p>CRO, Vanta</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667c3793992d2925d4708be9_images.avif"
                alt=""
                className="h-[60%] "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[1rem] h-[400px] w-[450px] border-[5px] border-[#FA6900] flex flex-col justify-between">
            <div>
              <img
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
              <p className="mt-[2rem]">
                Clay is a game changer for marketing, data, and operations. We
                have tripled our enrichment rate with Clay’s combination of data
                providers vs. our previous solution. We're using the best
                aggregate results across a waterfall of data sources, and
                implementing complex workflow logic even beyond enrichment—of
                course powered by AI. Clay makes it easy to use AI for GTM
                initiatives, unlocking new workflows that were infeasible
                before.
              </p>
            </div>
            <div className="flex justify-between h-[30%] border-t border-black py-3">
              <div className="h-full flex gap-2">
                <img
                  src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1bec22a6b54cee08e964_image%20(3).avif"
                  alt=""
                  className="h-full w-fit border-2 border-black rounded-md"
                />
                <div className="flex flex-col justify-end">
                  <p>Adam Wall</p>
                  <p>Head of Sales Operations, Anthropic</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1cd235d9467cb7d3624c_661ce1b1e9829a31c0c29b14_img_logo_anthropic.svg%20filllogo-hero.svg"
                alt=""
                className="h-[40%] w-[20%]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-[1rem] h-[400px] w-[450px] border border-black flex flex-col justify-between">
            <div>
              <img
                src="https://cdn.prod.website-files.com/61477f2c24a826836f969afe/664d6fb7115ae062aa4da176_quote-icon.svg"
                alt=""
                className="h-[30px] w-[30px]"
              />
              <p className="mt-[2rem]">
                Clay saves us hours a week that we previously spent researching
                and vetting companies that applied to our startup program. Our
                auto-approval rate has jumped to ~40%—with no manual work
                needed.
              </p>
            </div>
            <div className="flex justify-between h-[30%] border-t border-black py-3">
              <div className="h-full flex gap-2">
                <img
                  src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1c0e213afc005ab64813_image%20(5).avif"
                  alt=""
                  className="h-full w-fit border-2 border-black rounded-md"
                />
                <div className="flex flex-col justify-end">
                  <p>Josh Kim</p>
                  <p>Head of Growth Programs, Notion</p>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/61702af2e3966e09c4101538/667b1ca78e957d98b3405ade_661ce1b188dd92f7fc53b822_img_logo_notion.svg%20filllogo-hero.svg"
                alt=""
                className="h-[60%]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
