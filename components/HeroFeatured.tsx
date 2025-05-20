'use client';

import ArticleList from '@/components/ArticleList';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const categories = [
    { name: 'Smart Cameras', image: '/images/cameras.png', href: '/categories/cameras' },
    { name: 'Smart Locks', image: '/images/locks.png', href: '/categories/locks' },
    { name: 'Video Doorbells', image: '/images/doorbells.png', href: '/categories/doorbells' },
    { name: 'Thermostats', image: '/images/thermostat.png', href: '/categories/thermostats' },
    { name: 'Lighting', image: '/images/lighting.png', href: '/categories/lights' },
  ];

  const featured = [
    {
      title: 'Best Smart Cameras of 2025',
      description: 'Top 10 picks for indoor/outdoor cameras with Alexa, Google, and Apple support.',
      image: '/images/cameras-thumb.jpg',
      slug: 'best-smart-cameras-2025',
    },
    {
      title: 'Smart Lock Face-Off: August vs Schlage',
      description: 'Side-by-side comparison of features, installation, and integration.',
      image: '/images/locks-thumb.jpg',
      slug: 'smart-lock-showdown',
    },
    {
      title: 'Alexa vs Google: Which Assistant Wins?',
      description: 'We test responsiveness, integrations, and more in real-world conditions.',
      image: '/images/alexa-vs-google.png',
      slug: 'google-vs-alexa',
    },
  ];

  const latestNews = [
    {
      title: 'Best Smart Cameras of 2025',
      subtitle: 'Top 10 picks for indoor/outdoor cameras.',
      slug: 'best-smart-cameras-2025',
      image: '/images/cameras.png',
    },
    {
      title: 'Alexa vs Google: Which Assistant Wins?',
      subtitle: 'Real-world tests on integrations and privacy.',
      slug: 'google-vs-alexa',
      image: '/images/alexa-vs-google.png',
    },
    {
      title: 'Top Smart Doorbells for 2025',
      subtitle: 'Compare Ring, Nest, Eufy and more.',
      slug: 'top-smart-doorbells',
      image: '/images/doorbells.png',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
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

      {/* Latest News Sidebar */}
      <section className="w-full py-10 bg-[#0c0c2c] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestNews.map((item, index) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="block bg-[#1a1a3c] hover:bg-[#2a2a4c] p-4 rounded transition"
              >
                <p className="text-sm text-gray-400 mb-1">#{index + 1}</p>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="rounded overflow-hidden border shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={400}
                  height={225}
                  className="w-full h-auto object-cover"
                />
                <div className="text-center py-3 font-semibold text-gray-800 bg-white">
                  {cat.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Featured Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="block bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews & Guides */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Latest Reviews & Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {latestNews.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
