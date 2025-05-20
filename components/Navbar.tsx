'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded ${
      pathname === path ? 'font-semibold text-blue-600' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <nav className="relative z-50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c2c] to-[#111132] z-0" />

      {/* Main navbar content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image
            src="/images/hometech.png"
            alt="HomeTechAdvisor Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-bold">HomeTechAdvisor</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/reviews" className={linkClass('/reviews')}>
            Reviews
          </Link>
          <Link href="/categories" className={linkClass('/categories')}>
            Categories
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c2c] text-white px-4 py-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)} className={linkClass('/')}>
            Home
          </Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)} className={linkClass('/reviews')}>
            Reviews
          </Link>
          <Link href="/categories" onClick={() => setIsOpen(false)} className={linkClass('/categories')}>
            Categories
          </Link>
        </div>
      )}
    </nav>
  );
}
