import React from "react"
import { customerFeedback } from "@/constants"
import { Separator } from "../ui/separator"
import Image from "next/image"

export default function CustomerFeedback() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="mx-auto text-center text-3xl sm:text-4xl lg:text-5xl font-bold max-w-xl mb-8 sm:mb-12">
        What our customers say about us...
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {customerFeedback.map((item, index: number) => (
          <div key={index} className="border-2 border-black p-4 rounded-lg">
            <p className="text-sm sm:text-base mb-4">
              <span className="font-bold text-3xl">&rdquo;</span> {item.message}
            </p>
            <Separator className="my-4" />
            <div className="flex flex-col">
              <span className="font-bold">{item.name}</span>
              <span className="text-sm">{item.jobTitle}</span>
              <div className="flex flex-row items-center gap-2 mt-2">
                <div className="w-6 h-6 rounded overflow-hidden">
                  <Image
                    src={item.companyLogo}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm">{item.companyName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}