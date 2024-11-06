"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  return (
<nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-2.5 px-6 bg-white shadow-md">      
  {/* Logo */}
      <Link href="/" aria-label="home" className="flex items-center">
        <span className="text-lg font-bold text-black">Clay</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Product Dropdown */}
        <HoverCard
          onOpenChange={(isOpen) =>
            setHoveredDropdown(isOpen ? "product" : null)
          }
        >
          <HoverCardTrigger className="flex items-center text-sm font-medium text-gray-800 hover:text-black">
            Product{" "}
            {hoveredDropdown === "product" ? (
              <ChevronUp className="ml-1" />
            ) : (
              <ChevronDown className="ml-1" />
            )}
          </HoverCardTrigger>
          <HoverCardContent className="w-64 bg-white shadow-lg p-4 rounded-md">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                CRM Enrichment & Hygiene
              </span>
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                TAM Sourcing
              </span>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Solutions Dropdown */}
        <HoverCard
          onOpenChange={(isOpen) =>
            setHoveredDropdown(isOpen ? "solutions" : null)
          }
        >
          <HoverCardTrigger className="flex items-center text-sm font-medium text-gray-800 hover:text-black">
            Solutions{" "}
            {hoveredDropdown === "solutions" ? (
              <ChevronUp className="ml-1" />
            ) : (
              <ChevronDown className="ml-1" />
            )}
          </HoverCardTrigger>
          <HoverCardContent className="w-64 bg-white shadow-lg p-4 rounded-md">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                RevOps
              </span>
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                SDRs
              </span>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Resources Dropdown */}
        <HoverCard
          onOpenChange={(isOpen) =>
            setHoveredDropdown(isOpen ? "resources" : null)
          }
        >
          <HoverCardTrigger className="flex items-center text-sm font-medium text-gray-800 hover:text-black">
            Resources{" "}
            {hoveredDropdown === "resources" ? (
              <ChevronUp className="ml-1" />
            ) : (
              <ChevronDown className="ml-1" />
            )}
          </HoverCardTrigger>
          <HoverCardContent className="w-64 bg-white shadow-lg p-4 rounded-md">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                Guides
              </span>
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                Documentation
              </span>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Company Dropdown */}
        <HoverCard
          onOpenChange={(isOpen) =>
            setHoveredDropdown(isOpen ? "company" : null)
          }
        >
          <HoverCardTrigger className="flex items-center text-sm font-medium text-gray-800 hover:text-black">
            Company{" "}
            {hoveredDropdown === "company" ? (
              <ChevronUp className="ml-1" />
            ) : (
              <ChevronDown className="ml-1" />
            )}
          </HoverCardTrigger>
          <HoverCardContent className="w-64 bg-white shadow-lg p-4 rounded-md">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                About Us
              </span>
              <span className="text-gray-700 hover:bg-gray-100 rounded p-2 cursor-pointer">
                Careers
              </span>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Enterprise and Pricing */}
        <Link href="/enterprise" className="flex text-sm font-medium text-gray-800 hover:text-black">
          Enterprise
        </Link>
        <Link href="/pricing" className="flex text-sm font-medium text-gray-800 hover:text-black">
          Pricing
        </Link>
      </div>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center space-x-5">
        <Link href="/login" className="text-sm font-medium text-gray-800 hover:text-black">
          Login
        </Link>
        <Link href="/signup" className="flex items-center bg-black text-white py-2 px-4 rounded hover:bg-gray-700">
          <span>Sign Up</span>
          <ArrowRight className="ml-1" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-md p-4 w-48 rounded-md md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/enterprise" className="text-sm font-medium text-gray-700 hover:text-black">
                Enterprise
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-black">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-black">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="text-sm font-medium text-gray-700 hover:text-black">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}