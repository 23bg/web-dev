/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Logo" width={60} height={32} className="h-7 w-14" />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <div className="relative group">
          <button className="flex items-center">
            Product <span className="ml-1">&#x25BC;</span>
          </button>
          <div className="absolute hidden group-hover:block mt-2 w-40 bg-white border rounded shadow-lg">
            <Link href="/product1" className="block px-4 py-2 hover:bg-gray-100">
              Product 1
            </Link>
            <Link href="/product2" className="block px-4 py-2 hover:bg-gray-100">
              Product 2
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center">
            Solutions <span className="ml-1">&#x25BC;</span>
          </button>
          <div className="absolute hidden group-hover:block mt-2 w-40 bg-white border rounded shadow-lg">
            <Link href="/solution1" className="block px-4 py-2 hover:bg-gray-100">
              Solution 1
            </Link>
            <Link href="/solution2" className="block px-4 py-2 hover:bg-gray-100">
              Solution 2
            </Link>
          </div>
        </div>
        <Link href="/resources" className="hover:text-black">
          Resources
        </Link>
        <div className="relative group">
          <button className="flex items-center">
            Company <span className="ml-1">&#x25BC;</span>
          </button>
          <div className="absolute hidden group-hover:block mt-2 w-40 bg-white border rounded shadow-lg">
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
              About Us
            </Link>
            <Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">
              Careers
            </Link>
          </div>
        </div>
        <Link href="/enterprise" className="hover:text-black">
          Enterprise
        </Link>
        <Link href="/pricing" className="hover:text-black">
          Pricing
        </Link>
      </div>

      {/* Login & Signup */}
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-black">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Sign up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <span className="text-gray-700">&#x2630;</span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="space-y-4 px-6 py-4 text-gray-700 text-sm font-medium">
            <div>
              <button className="w-full text-left">Product</button>
            </div>
            <div>
              <button className="w-full text-left">Solutions</button>
            </div>
            <Link href="/resources" className="block">
              Resources
            </Link>
            <div>
              <button className="w-full text-left">Company</button>
            </div>
            <Link href="/enterprise" className="block">
              Enterprise
            </Link>
            <Link href="/pricing" className="block">
              Pricing
            </Link>
            <Link href="/login" className="block text-gray-700">
              Login
            </Link>
            <Link href="/signup" className="block bg-black text-white text-center py-2 rounded-md">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
