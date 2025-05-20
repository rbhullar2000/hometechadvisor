'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroFeatured() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homesecurity_livingroom.png"
          alt="Smart home setup"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-white px-6 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          10 Best Smart Security Cameras for 2025
        </h1>
        <p className="text-lg md:text-xl mb-6">
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
