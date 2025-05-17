// app/categories/page.tsx
'use client';

import Link from 'next/link';
import { Camera, Lock, Bell, Thermometer, Lightbulb } from 'lucide-react';

const categories = [
  {
    name: 'Smart Cameras',
    description: 'Top picks for indoor and outdoor security cameras.',
    icon: <Camera className="w-6 h-6 text-blue-600" />,
    href: '/categories/cameras',
  },
  {
    name: 'Smart Locks',
    description: 'Secure your home with the latest smart lock systems.',
    icon: <Lock className="w-6 h-6 text-blue-600" />,
    href: '/categories/locks',
  },
  {
    name: 'Video Doorbells',
    description: 'Compare the best video doorbells for 2025.',
    icon: <Bell className="w-6 h-6 text-blue-600" />,
    href: '/categories/doorbells',
  },
  {
    name: 'Thermostats',
    description: 'Smart thermostats for energy savings and comfort.',
    icon: <Thermometer className="w-6 h-6 text-blue-600" />,
    href: '/categories/thermostats',
  },
  {
    name: 'Lighting',
    description: 'Explore smart lighting options for every room.',
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    href: '/categories/lighting',
  },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Explore Smart Home Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100 hover:-translate-y-1"
          >
            <div className="flex items-center mb-3">
              {cat.icon}
              <span className="ml-2 text-lg font-semibold">{cat.name}</span>
            </div>
            <p className="text-sm text-gray-600">{cat.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}