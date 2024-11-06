import { Button } from "@/components/ui/button";
import { clientCompanies } from "@/constants";
import { ArrowRight, Heart, Star, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container flex flex-col items-center space-y-8 py-12 md:py-4 lg:py-4 min-h-screen">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-7xl max-w-5xl text-center tracking-tighter mt-8 md:mt-16 lg:mt-32">
        Scale personalized outreach with better data enrichment
      </h1>

      <p className="max-w-2xl text-center text-sm sm:text-base lg:text-lg px-4">
        Help your RevOps & growth teams implement any outreach idea. First,
        maximize data coverage with 75+ enrichment tools & our AI agent with
        just your Clay account. Then, use AI to craft relevant outreach at
        scale.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center text-xs sm:text-sm text-gray-500 gap-3 px-4">
        <div className="flex flex-row items-center hover:text-black hover:cursor-pointer gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="#6b7280" size={14} />
          ))}
          <span>4.9 rating</span>
        </div>

        <div className="flex flex-row items-center hover:text-black hover:cursor-pointer gap-1">
          <Users fill="#6b7280" size={14} />
          <span>15k+ growth community</span>
        </div>

        <div className="flex flex-row items-center hover:text-black hover:cursor-pointer gap-1">
          <Heart
            fill="#6b7280"
            strokeWidth={0}
            size={14}
            className="hover:border-0"
          />
          <span>150+ testimonials</span>
        </div>
      </div>

      <Button className="p-4 sm:p-6 text-sm sm:text-base">
        Start building for free
        <ArrowRight size={20} className="ml-2" />
      </Button>

      <div className="max-w-5xl text-center space-y-8 sm:space-y-12 px-4">
        <p className="text-sm sm:text-base">
          Trusted by more than 100,000 leading GTM teams of all sizes
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6">
          {clientCompanies.map((company, index: number) => (
            <div
              className="w-16 sm:w-20 lg:w-24 h-8 sm:h-10 lg:h-12"
              key={index}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={96}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
