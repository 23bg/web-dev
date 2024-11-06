import React from "react";
import CRMTable from "@/components/crmTable";
import { Button } from "@/components/ui/button";
import { dataSource } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ScrollSection() {
  return (
    <div className="bg-indigo-100 text-black flex flex-col p-4 min-h-screen">
      <div className="mx-auto my-4 font-semibold text-xs text-center">
        HOW IT WORKS
      </div>

      <div className="mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-4xl px-4">
        {[
          "Import/create a lead list",
          "Enrich your data with 75+ tools",
          "Use our AI research agent",
          "Scale your outreach",
        ].map((text, index) => (
          <div key={index} className="flex flex-col flex-1">
            <Button className="flex flex-col bg-white text-black rounded px-2 sm:px-4 py-2 h-auto hover:bg-white text-xs sm:text-sm">
              {text}
            </Button>
            <div className="bg-black h-1 mt-2 w-full"></div>
          </div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="flex flex-col space-y-8 p-4 lg:p-14">
          <div>
            <button className="rounded-xl text-xs px-4 py-1 bg-blue-600 text-gray-300 font-semibold">
              List building
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Import or create a targeted list
            </h2>
            <p className="text-base sm:text-lg">
              Sync a list of leads from your CRM, or prospect from scratch to
              build targeted lead lists. We have 10+ built-in sources to help
              you find companies, people, and open jobs.
            </p>
            <Button className="rounded py-4 sm:py-6 px-4 sm:px-6 max-w-fit">
              Start 14 day Pro trial
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="flex flex-row gap-x-3 overflow-x-auto pb-2">
            {dataSource.slice(0, 5).map((item, index: number) => (
              <div
                className="w-10 h-10 flex-shrink-0 p-2 bg-white rounded"
                key={index}
              >
                <Image
                  width={24}
                  height={24}
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <CRMTable />
        </div>
      </div>
    </div>
  );
}
