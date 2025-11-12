"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-black ">
      <div className="py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Image
            className="hover:cursor-pointer"
            src="/header-logo.svg"
            alt="Dev Backup Logo"
            width={40}
            height={40}
          />
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">About</a>
            <a href="#how-it-works" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">How It Works</a>
            <a href="#faqs" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">FAQs</a>
            <a href="#help" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">Help</a>
          </nav>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden px-6 py-4 flex flex-col gap-4">
            <a href="#about" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">About</a>
            <a href="#how-it-works" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">How It Works</a>
            <a href="#faqs" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">FAQs</a>
            <a href="#help" className="text-sm text-gray-200 hover:text-black hover:bg-white px-4 py-2 rounded-lg transition-colors">Help</a>
          </nav>
        )}
      </div>
    </header>
  );
}