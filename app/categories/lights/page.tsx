'use client';

import { lights } from '../../data/lights';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function LightsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Best Smart Lighting (2025)</h1>
        <p className="text-gray-600">
          Discover smart light bulbs, strips, and ambient lighting systems that work with Alexa, Google, and HomeKit. Control mood, brightness, and color with your voice or phone.
        </p>

        <div className="space-y-6">
          {lights.map((p) => (
            <div key={p.slug}>
              <ProductCard
                title={`#${p.rank} — ${p.title}`}
                description={p.description}
                image={p.image}
                link={p.link}
              />
              <Link
                href={`/reviews/${p.reviewSlug}`}
                className="text-sm text-blue-600 hover:underline mt-1 block"
              >
                Read Full Review →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}