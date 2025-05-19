'use client';

import { thermostats } from '../../data/thermostats';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function ThermostatsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Top Smart Thermostats (2025)</h1>
        <p className="text-gray-600">
          Smart thermostats help you save energy, automate heating and cooling, and keep your home comfortable.
        </p>

        <div className="space-y-6">
          {thermostats.map((p) => (
            <div key={p.reviewSlug}>
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