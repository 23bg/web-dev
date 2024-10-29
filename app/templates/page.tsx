import ArrowLink from "../components/Links/ArrowLink";
import Template from "../components/Template";

const iconsNumber = {
  gmap: 0,
  chatgpt: 1,
  clay: 2,
  owler: 3,
};

const templates = [
  {
    desc: "Check if you have mutual investors with target companies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize outbound to former bosses of recent job movers",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize B2B outreach based on existing tech stack and sentiment prediction towards new technologies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Check if you have mutual investors with target companies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize outbound to former bosses of recent job movers",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize B2B outreach based on existing tech stack and sentiment prediction towards new technologies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Check if you have mutual investors with target companies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize outbound to former bosses of recent job movers",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize B2B outreach based on existing tech stack and sentiment prediction towards new technologies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Check if you have mutual investors with target companies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize outbound to former bosses of recent job movers",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
  {
    desc: "Personalize B2B outreach based on existing tech stack and sentiment prediction towards new technologies",
    by: "Clay Team",
    active1: iconsNumber.owler,
    router: "/",
  },
];
const Templates = () => {
  return (
    <>
      <section className="bg-[#fafaf8] pt-36 pb-10 text-center">
        <h1 className="font-[600] text-[2.6rem] md:text-[3.2rem] lg:text-[4.7rem]">
          Clay Templates
        </h1>
        <p className="font-[500]">
          Power your GTM motion with our best templates & workflows.
        </p>
      </section>
      <section className="">
        <div className="bg-[#fafaf8] py-4 sticky top-[4rem] border-b border-[#e7e8ec]">
          <div className="px-6 max-w-[75rem] mx-auto">
            <div className="w-full md:w-[32rem] relative">
              <input
                placeholder="Search templates (e.g. Find work email)"
                className="w-full border rounded outline-none border-black py-2 pl-4 pr-12"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 absolute right-4 top-[.6rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-16 w-[95%] mx-auto max-w-[75rem]">
          <div className="w-full grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
            {templates.map((template) => {
              return (
                <Template
                  desc={template.desc}
                  by={template.by}
                  active1={template.active1}
                  router={template.router}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-32 bg-custom-gradient bg-cover bg-center ">
        <div className="flex flex-col items-center justify-between w-[95%] max-w-[75rem] mx-auto">
          <div className="w-[83%]">
            <h2 className="text-[4.7rem] leading-none text-white text-center font-[600] mb-8">
              Share your Clay tables with the world
            </h2>
            <p className="text-white text-center mb-4">
              Submit one of your Clay templates and help others get a head-start
              in their outbound journey!
            </p>
          </div>
          <ArrowLink desc="Submit template" router="/" />
        </div>
      </section>
    </>
  );
};

export default Templates;
