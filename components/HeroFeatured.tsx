'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroFeatured() {
  return (
    <section
      className="w-full min-h-[70vh] text-white flex items-center"
      style={{ backgroundColor: '#0c0c2c' }} // TechRadar navy
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
          10 Best Smart Security Cameras for 2025
        </h1>
        <p className="text-xl mb-6 drop-shadow-sm">
          From AI detection to 2K resolution — we rank the best wireless cams that secure your home and your privacy.
        </p>
        <Link
          href="/categories/cameras"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
        >
          Explore Picks →
        </Link>
      </div>
    </section>
  );
}