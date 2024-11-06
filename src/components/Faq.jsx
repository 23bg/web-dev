import React from "react";

const Faq = () => {
  return (
    <div className="mx-[8vw] flex justify-between gap-5 my-[9rem]">
      <h1 className="text-6xl md:text-5xl lg:text-[4rem]">FAQ</h1>
      <div className="hs-accordion-group float-right">
        <div
          className="hs-accordion active"
          id="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center  gap-x-3  font-semibold text-end text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="true"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
          >
            what is clay?
            <svg
              className="hs-accordion-active:hidden block size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg
              className="hs-accordion-active:block hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-one"
            className="hs-accordion-content   overflow-hidden transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              maiores optio saepe illum alias quo quia asperiores qui, quos
              eveniet.
            </p>
          </div>
        </div>

        <div
          className="hs-accordion w-fit"
          id="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-end  gap-x-3   font-semibold text- end text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="false"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
          >
            what kind of companies use caly?
            <svg
              className="hs-accordion-active:hidden block size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg
              className="hs-accordion-active:block hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-two"
            className="hs-accordion-content hidden   overflow-hidden transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident architecto ullam est facilis officia totam dolores
              labore recusandae iusto obcaecati.
            </p>
          </div>
        </div>

        <div
          className="hs-accordion"
          id="hs-basic-with-title-and-arrow-stretched-heading-three"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center w-fit gap-x-3   font-semibold text- end text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="false"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
          >
            who on my team should use caly?
            <svg
              className="hs-accordion-active:hidden block size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <svg
              className="hs-accordion-active:block hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-three"
            className="hs-accordion-content hidden   overflow-hidden transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem nisi placeat, molestias expedita nam harum repellat
              omnis aut est beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
