import { Button } from "@/components/ui/button";
import React from "react";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Mail, User } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Clay - Sign up",
};

export default function SignUpPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-[40%] p-6 md:p-12 lg:p-32">
        <div className="mb-6">
          <div className="mb-8">
            <Logo />
          </div>
          <div className="text-2xl md:text-3xl font-bold">Welcome to Clay!</div>
          <div className="text-gray-500 text-sm md:text-base">
            Sign up to start building personalized outreach campaigns in minutes
          </div>
        </div>

        <Button className="rounded w-full my-3 py-4 md:py-5" variant="outline">
          <Image
            src="/images/google-logo.png"
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign up with Google
        </Button>

        <div className="flex items-center justify-center gap-4 max-w-full my-4">
          <Separator className="w-[45%]" /> or <Separator className="w-[45%]" />
        </div>

        <form className="w-full space-y-4 my-6">
          <div className="relative">
            <input
              placeholder="Full name"
              className="w-full p-2 pl-10 rounded border border-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              placeholder="Email address"
              className="w-full p-2 pl-10 rounded border border-gray-400 focus:border-blue-500 focus:outline-none"
            />
            <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <Button className="bg-blue-500 rounded w-full text-base md:text-lg py-4 md:py-5 hover:bg-blue-600">
            Continue
          </Button>
        </form>

        <div className="text-sm">
          Already have an account?{" "}
          <Link className="text-blue-500" href="/login">
            Log in
          </Link>
        </div>

        <div className="text-gray-400 text-xs mt-12 md:mt-24">
          By signing up for a Clay account, you agree to our{" "}
          <Link className="text-black" href="#">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-black" href="#">
            Terms of Service.
          </Link>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-[60%] bg-yellow-100 bg-cover bg-center bg-[url(/images/signup.png)]"></div>
    </div>
  );
}
