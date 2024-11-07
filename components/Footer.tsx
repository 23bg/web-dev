import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { footerLinks } from "@/constants";
import Link from "next/link";
import { LogoWhite } from "./Logo";

export default function Footer() {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('/images/footer-bg.jpeg')] bg-cover bg-center min-h-screen">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

          <div className="flex flex-col max-w-5xl text-center mx-auto space-y-8 sm:space-y-12 items-center justify-center min-h-screen px-4 sm:px-8 relative z-10 text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
              Start molding your dream campaigns today
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-base sm:text-lg">
                Start your 14-day Pro trial today. No credit card required.
              </p>
              <Button className="max-w-fit px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-bold hover:text-white hover:bg-black">
                Try it - it&apos;s free <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-4 sm:px-8 lg:px-16 py-16 bg-black text-white">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col">
            <h3 className="font-bold mb-4">{category}</h3>
            {links.map((link, index) => (
              <Link
                key={index}
                className="py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-black w-full px-4 sm:px-8 lg:px-16 pb-8 sm:pb-12 space-y-5">
        <LogoWhite />
        <p className="text-white text-sm">
          © Clay 2024 / Uplevel your data enrichment. Scale personalized
          outreach.
        </p>
      </div>
    </>
  );
}
