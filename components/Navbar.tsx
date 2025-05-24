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
    `block px-4 py-2 rounded hover:bg-gray-800 ${
      pathname === path ? 'font-semibold text-blue-400' : 'text-gray-200'
    }`;

  return (
    <nav className="bg-[#0c0c2c] text-white fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/hometech.png"
            alt="HomeTechAdvisor Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <span className="text-lg font-bold whitespace-nowrap">HomeTechAdvisor</span>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/reviews" className={linkClass('/reviews')}>Reviews</Link>
          <Link href="/categories" className={linkClass('/categories')}>Categories</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c2c] border-t border-gray-700 px-4 pb-4">
          <Link href="/" onClick={() => setIsOpen(false)} className={linkClass('/')}>Home</Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)} className={linkClass('/reviews')}>Reviews</Link>
          <Link href="/categories" onClick={() => setIsOpen(false)} className={linkClass('/categories')}>Categories</Link>
        </div>
      )}
    </nav>
  );
}
