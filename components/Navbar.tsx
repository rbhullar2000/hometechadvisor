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
    `block px-4 py-2 rounded hover:bg-gray-100 ${
      pathname === path ? 'font-semibold text-blue-600' : 'text-gray-300'
    }`;

  return (
    <nav className="relative z-50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c2c] to-[#111132] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
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

        {/* Desktop Links */}
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

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0c0c2c] text-sm">
          <Link href="/" className={linkClass('/')} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/reviews" className={linkClass('/reviews')} onClick={() => setIsOpen(false)}>
            Reviews
          </Link>
          <Link href="/categories" className={linkClass('/categories')} onClick={() => setIsOpen(false)}>
            Categories
          </Link>
        </div>
      )}
    </nav>
  );
}