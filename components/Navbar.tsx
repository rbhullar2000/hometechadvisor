'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `px-4 py-2 rounded ${
      pathname === path ? 'font-semibold text-blue-600' : 'text-gray-300'
    } hover:bg-gray-100`;

  return (
    <nav className="relative z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c2c] to-[#111132] z-0" />

      {/* Navbar Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image
            src="/images/hometech.png"
            alt="HomeTechAdvisor Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold">HomeTechAdvisor</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/reviews" className={linkClass('/reviews')}>Reviews</Link>
          <Link href="/categories" className={linkClass('/categories')}>Categories</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#0c0c2c] text-white flex flex-col items-center pt-24 space-y-6 z-40">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl">Home</Link>
          <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-xl">Reviews</Link>
          <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="text-xl">Categories</Link>
        </div>
      )}
    </nav>
  );
}
