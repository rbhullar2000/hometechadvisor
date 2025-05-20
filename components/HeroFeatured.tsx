'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroFeatured() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/homesecurity_livingroom.png"
        alt="Living Room Security"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0c0c2c]/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
          10 Best Smart Security Cameras for 2025
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-sm">
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
