import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white py-20 md:py-32 px-6 flex flex-col items-center text-center pt-16">
      {/* Left decorative element */}
      <div className="absolute left-0 top-1/4 hidden md:block">
        <Image
          src="/path-to-left-image.svg" // Replace with actual path
          alt="Left decorative element"
          width={250}
          height={250}
        />
      </div>

      {/* Right decorative element */}
      <div className="absolute right-0 top-1/4 hidden md:block">
        <Image
          src="/path-to-right-image.svg" // Replace with actual path
          alt="Right decorative element"
          width={250}
          height={250}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-mont text-gray-900 leading-tight mb-6">
          Scale personalized outreach with <br /> better data enrichment
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Help your RevOps & growth teams implement any outreach idea. Maximize data coverage with 75+ enrichment tools & our AI agent, all with just your Clay account.
        </p>

        {/* Ratings and Stats */}
        <div className="flex justify-center items-center space-x-4 mb-8 text-gray-600">
          <span className="flex items-center">
            <Image src="/star-icon.svg" alt="Rating" width={20} height={20} />
            <span className="ml-1">4.9 rating</span>
          </span>
          <span>•</span>
          <span>15k+ growth community</span>
          <span>•</span>
          <span>150+ testimonials</span>
        </div>

        {/* Call to Action Button */}
        <Link 
  href="/signup" 
  className="inline-flex items-center px-6 py-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
>
  Start building for free
</Link>
      </div>

      {/* Roadmap Dotted Line */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-12">
        <div className="flex items-center space-x-4">
          {/* First Milestone */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-first-milestone.svg" // Replace with actual path
              alt="First milestone"
              width={80}
              height={80}
            />
            <div className="mt-2 text-sm font-medium">Import / Build a lead list</div>
          </div>

          {/* Dotted Line */}
          <div className="h-0.5 w-20 border-dotted border-t-2 border-gray-300"></div>

          {/* Second Milestone */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-second-milestone.svg" // Replace with actual path
              alt="Second milestone"
              width={80}
              height={80}
            />
            <div className="mt-2 text-sm font-medium">
              Enrich your leads with <span className="text-blue-500">75+ data providers</span>
            </div>
          </div>

          {/* Dotted Line */}
          <div className="h-0.5 w-20 border-dotted border-t-2 border-gray-300"></div>

          {/* Third Milestone */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-third-milestone.svg" // Replace with actual path
              alt="Third milestone"
              width={80}
              height={80}
            />
            <div className="mt-2 text-sm font-medium">Use our AI research agent</div>
          </div>

          {/* Dotted Line */}
          <div className="h-0.5 w-20 border-dotted border-t-2 border-gray-300"></div>

          {/* Fourth Milestone */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-fourth-milestone.svg" // Replace with actual path
              alt="Fourth milestone"
              width={80}
              height={80}
            />
            <div className="mt-2 text-sm font-medium">Scale personalized outreach</div>
          </div>
        </div>
      </div>
    </section>
  );
}