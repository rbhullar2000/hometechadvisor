'use client';

import { cameras } from '../../data/cameras';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function CamerasPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Top Smart Security Cameras (2025)</h1>
        <p className="text-gray-600">
          Keep an eye on your home with smart cameras offering cloud recording, night vision, and motion alerts.
        </p>

        <div className="space-y-6">
          {cameras.map((p) => (
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