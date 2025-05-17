'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded hover:bg-gray-100 ${
      pathname === path ? 'font-semibold text-blue-600' : 'text-gray-300'
    }`;

  return (
    <nav className="relative z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c2c] to-[#111132] z-0" />

      {/* Navbar Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          HomeTechAdvisor
        </Link>
        <div className="space-x-4">
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
      </div>
    </nav>
  );
}