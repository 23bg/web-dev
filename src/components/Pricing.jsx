import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Pricing = () => {
  return (
    <div className="mx-[8vw] font-[Roobert] sticky z-[3] bg-[#eeeee7] mb-[5rem] mt-[3rem] lg:mt-[5rem]">
      <div></div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center p-[1rem] relative">
          <h2 className="font-semibold">Compare our plans</h2>
          <div className="flex gap-[1rem]">
            <strong>Pay Monthly</strong>
            <Toggle />
            <div>
              <strong>Pay annually - 10%</strong> discount &amp; all credits
              upfront
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 ">
          <div className="grid-cols-1 flex items-end px-[1rem]  h-[250px] overflow-hidden">
            <h2 className="flex items-center px-5 py-2 cursor-pointer gap-1 bg-black text-white rounded-md">
              Try clay for free <HiOutlineArrowSmRight size={20} />
            </h2>
          </div>
          <div className="grid-cols-1  h-[250px] p-[1rem] flex flex-col items-center justify-between bg-white border border-[#0000001a]">
            <h5 className="px-3 py-0 rounded-full bg-[#F3F2ED] bordernone border-black w-fit ">
              Free
            </h5>

            <div className="flex items-end mt-[2rem]">
              <h1 className="font-semibold text-2xl">$0</h1>
              <span className="text-sm text-gray-400 pt-[2px]">/month</span>
            </div>
            <h4 className="text-gray-800 text-sm text-center">
              Billed yearly. All credits granted upfront
            </h4>
            <select className="px-3 py-2 outline-none rounded-md border border-black">
              <option value="1.2k credits/year">1.2k credits/year</option>
            </select>
          </div>
          {/* <PriceCard title={"Free"} price={"0"} options={["1.2k credits/year"]} />
                <PriceCard title={"Starter"} price={"134"} options={["24k credits/year", "36k credits/year"]} /> */}

          <div className="grid-cols-1 border border-black h-[250px] p-[1rem] flex flex-col items-center justify-between bg-[#E9E4FF] border border-[#0000001a]">
            <h5 className="px-3 py-0 rounded-full bg-[#F5F3FF] bordernone border-black w-fit ">
              Starter
            </h5>
            <div className="flex items-end mt-[2rem]">
              <h1 className="font-semibold text-2xl">$134</h1>
              <span className="text-sm text-gray-400 pt-[2px]">/month</span>
            </div>
            <h4 className="text-gray-800 text-sm text-center">
              Billed yearly. All credits granted upfront
            </h4>
            <select className="px-3 py-2 outline-none rounded-md border border-black">
              <option value="24k credits/year">24k credits/year</option>
              <option value="36k credits/year">36k credits/year</option>
            </select>
          </div>
          <div className="grid-cols-1  border-black h-[250px] p-[1rem] flex flex-col items-center justify-between bg-[#F8CC65] border border-[#0000001a]">
            <h5 className="px-3 py-0 rounded-full bg-[#FEF0A4] text-[#9D6A09] bordernone border-black w-fit ">
              Explorer
            </h5>
            <div className="flex items-end mt-[2rem]">
              <h1 className="font-semibold text-2xl">$134</h1>
              <span className="text-sm text-black pt-[2px]">/month</span>
            </div>
            <h4 className="text-gray-800 text-sm text-center">
              Billed yearly. All credits granted upfront
            </h4>
            <select className="px-3 py-2 outline-none rounded-md border border-black">
              <option value="120k credits/year">120k credits/year</option>
              <option value="168k credits/year">168k credits/year</option>
              <option value="240k credits/year">240k credits/year</option>
            </select>
          </div>
          <div className="grid-cols-1  border-black h-[250px] p-[1rem] flex flex-col items-center justify-between bg-[#FF99D5] border border-[#0000001a]">
            <h5 className="px-3 py-0 rounded-full bg-[#FFD1F1] text-[#8B045C] bordernone border-black w-fit ">
              Pro
            </h5>
            <div className="flex items-end mt-[2rem]">
              <h1 className="font-semibold text-2xl">$720</h1>
              <span className="text-sm text-black pt-[2px]">/month</span>
            </div>
            <h4 className="text-gray-800 text-sm text-center">
              Billed yearly. All credits granted upfront
            </h4>
            <select className="px-3 py-2 outline-none rounded-md border border-black">
              <option value="600k credits/year">600k credits/year</option>
              <option value="840k credits/year">840k credits/year</option>
              <option value="1.2M credits/year">1.2M credits/year</option>
              <option value="1.8M credits/year">1.8M credits/year</option>
            </select>
          </div>
          <div className="grid-cols-1  border-black h-[250px] p-[1rem] flex flex-col items-center justify-between bg-[#001E4B] border border-[#0000001a]">
            <h5 className="px-3 py-0 rounded-full bg-[#002F67] text-[#fff] bordernone border-black w-fit ">
              Enterprice
            </h5>
            <div className="flex flex-col gap-4">
              <div className="bg-white px-4 py-2 rounded-md cursor-pointer">
                Contact Sales
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-md border cursor-pointer border-gray-200 text-white">
                Custom Credits
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// function PriceCard({title, price , options, className}) {
//     console.log(className)
//     return (
//         <div className={`grid-cols-1  h-[250px] p-[1rem] flex flex-col items-center justify-between  border border-[#0000001a] bg-white`}>
//             <h5 className='px-3 py-0 rounded-full bg-[#F3F2ED] bordernone border-black w-fit '>{title}</h5>

//             <div className='flex items-end mt-[2rem]'>
//                 <h1 className='font-semibold text-2xl'>${price}</h1><span className='text-sm text-gray-400 pt-[2px]'>/month</span>
//             </div>
//             <h4 className='text-gray-800 text-sm text-center'>Billed yearly. All credits granted upfront</h4>
//             <select className='px-3 py-2 outline-none rounded-md border border-black'>
//                 {/* <option value="1.2k credits/year">1.2k credits/year</option> */}
//                 {/* {options.map((o) => {
//                     <options value={o}>{o}</options>
//                 })} */}
//                 {options.map((option) => <option value={option}>{option}</option>)}
//             </select>
//         </div>
//     )
// }
function Toggle() {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
    </label>
  );
}
export default Pricing;
