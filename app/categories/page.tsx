'use client';

import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Smart Cameras',
    description: 'Top picks for indoor and outdoor security cameras.',
    image: '/images/cameras.png',
    href: '/categories/cameras',
  },
  {
    name: 'Smart Locks',
    description: 'Secure your home with the latest smart lock systems.',
    image: '/images/locks.png',
    href: '/categories/locks',
  },
  {
    name: 'Video Doorbells',
    description: 'Compare the best video doorbells for 2025.',
    image: '/images/doorbells.png',
    href: '/categories/doorbells',
  },
  {
    name: 'Thermostats',
    description: 'Smart thermostats for energy savings and comfort.',
    image: '/images/thermostat.png',
    href: '/categories/thermostats',
  },
  {
    name: 'Lighting',
    description: 'Explore smart lighting options for every room.',
    image: '/images/lighting.png',
    href: '/categories/lighting',
  },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Explore Smart Home Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="rounded overflow-hidden border shadow-sm hover:shadow-md transition bg-white"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={400}
              height={225}
              className="w-full h-auto object-cover"
            />
            <div className="text-center py-3 px-4">
              <h2 className="text-lg font-semibold mb-1">{cat.name}</h2>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}