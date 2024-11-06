import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { securityAwards } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function ComplianceSection() {
  return (
    <div className="flex flex-col bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24 mt-4">
        <div className="flex flex-col space-y-6 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Backed by enterprise-grade security and scale
          </h2>
          <Button className="rounded py-4 sm:py-6 max-w-fit">
            Talk to a GTM Engineer
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-4">
          {securityAwards.map((award, index: number) => (
            <div
              key={index}
              className="w-24 h-20 sm:w-24 lg:w-28 sm:h-24 lg:h-72"
            >
              <Image
                src={award.logo}
                alt={award.name}
                width={112}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {[
          {
            title: "SOC 2",
            content: (
              <>
                We are SOC 2 Type II compliant. Request our SOC 2 in our{" "}
                <Link href="https://trust.clay.com" className="underline">
                  Trust Center
                </Link>
              </>
            ),
          },
          {
            title: "GDPR",
            content:
              "Go to market anywhere in the world — let us handle compliance with local laws.",
          },
          {
            title: "CCPA",
            content: "Support your customer base with opt out and DNC support.",
          },
          {
            title: "ISO 27001 (coming soon)",
            content: "Securely connect your CRM and other systems.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-white border-2 border-gray-200 rounded-lg"
          >
            <span className="font-bold text-lg mb-2">{item.title}</span>
            <span className="font-semibold text-sm">{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
