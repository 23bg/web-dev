import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link href="/">
        <a className="flex items-center justify-center">
          <img src="https://www.clay.com/images/logo.png" alt="Clay" className="h-6 w-6" />
          <span className="sr-only">Clay</span>
        </a>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/product">
          <a className="text-sm font-medium hover:underline underline-offset-4">Product</a>
        </Link>
        <Link href="/pricing">
          <a className="text-sm font-medium hover:underline underline-offset-4">Pricing</a>
        </Link>
        <Link href="/about">
          <a className="text-sm font-medium hover:underline underline-offset-4">About</a>
        </Link>
      </nav>
      <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
        Sign In
      </button>
    </header>
  );
};

export default Header;