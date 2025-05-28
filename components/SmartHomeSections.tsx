'use client';

import Image from 'next/image';
import Link from 'next/link';

const featured = [
  {
    title: 'Best Smart Cameras of 2025',
    description: 'Top 10 picks for indoor/outdoor cameras with Alexa, Google, and Apple support.',
    image: '/images/cameras-thumb.jpg',
    alt: 'Smart Cameras',
    href: '/categories/cameras',
  },
  {
    title: 'Smart Lock Face-Off: August vs Schlage',
    description: 'Side-by-side comparison of features, installation, and integration.',
    image: '/images/locks-thumb.jpg',
    alt: 'Smart Locks',
    href: '/categories/locks',
  },
  {
    title: 'Alexa vs Google: Which Assistant Wins?',
    description: 'We test responsiveness, integrations, and more in real-world conditions.',
    image: '/images/assistants-thumb.jpg',
    alt: 'Voice Assistants',
    href: '/categories/assistants',
  },
];

export default function SmartHomeSections() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Reviews</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((item) => (
            <Link href={item.href} key={item.title} className="group block bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}