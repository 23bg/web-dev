import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-20">
      <Image fill src="/images/logo.webp" alt="Logo" className="!relative" />
    </div>
  );
}

export function LogoWhite() {
  return (
    <div className="flex items-center text-white flex-row text-2xl font-bold gap-1">
      <div className="w-10">
        <Image
          fill
          src="/images/clay-icon.webp"
          alt="Logo"
          className="!relative"
        />
      </div>
      Clay
    </div>
  );
}
