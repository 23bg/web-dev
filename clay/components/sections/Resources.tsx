import { resources } from "@/constants";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResourceSection() {
  return (
    <div className="flex flex-col items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
        Learn with our resources
      </h2>
      <p className="text-base sm:text-lg font-semibold text-center max-w-xl mb-8">
        Check out Clay University, read our GTM blog, or try out our top
        templates to transform your growth ideas into outreach in minutes.
      </p>

      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {resources.map((resource, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Link href={resource.link}>
                <div className="bg-gray-200/50 rounded-lg p-2">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        width={900}
                        height={300}
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                      <div className="flex flex-col p-4">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-sm">{resource.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 flex items-center justify-between">
                      <span className="text-sm font-semibold">
                        {resource.linkText}
                      </span>
                      <ArrowRight size={16} />
                    </CardFooter>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
