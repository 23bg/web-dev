"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Links = [
  { name: "Product" },
  { name: "Solutions" },
  { name: "Resources" },
  { name: "Enterprise" },
  { name: "Pricing" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-20 w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0">
          <Logo />
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {Links.map((link, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center text-sm text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                {link.name} <ChevronDown size={16} className="ml-1" />
              </button>
              {/* Dropdown menu would go here */}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/login"
            className="text-sm text-gray-900 hover:text-gray-600"
          >
            Login
          </Link>
          <Button asChild>
            <Link
              href="/signup?source=nav"
              className="flex items-center space-x-2"
            >
              <span>Sign up</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {Links.map((link, index) => (
              <button
                key={index}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-gray-200">
            <Link
              href="/login"
              className="block text-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              href="/signup?source=nav"
              className="block text-center w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
