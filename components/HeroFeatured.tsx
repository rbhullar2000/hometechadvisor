'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroFeatured() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/images/homesecurity_livingroom.png"
        alt="Smart security camera setup"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-[#0c0c2c]/70 z-10" />

      {/* Centered content */}
      <div className="relative z-20 w-full px-6 md:px-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md leading-tight">
            10 Best Smart Security Cameras for 2025
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 drop-shadow-sm">
            From AI detection to 2K resolution — we rank the best wireless cams that secure your home and your privacy.
          </p>
          <Link
            href="/categories/cameras"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
          >
            Explore Picks →
          </Link>
        </div>
      </div>
    </section>
  );
}
