'use client';

import ArticleList from '@/components/ArticleList';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Lock, Bell, Thermometer, Lightbulb } from 'lucide-react';

export default function HomePage() {
  const categories = [
    { name: 'Smart Cameras', icon: <Camera className="w-6 h-6 text-blue-500" />, href: '/categories/cameras' },
    { name: 'Smart Locks', icon: <Lock className="w-6 h-6 text-blue-500" />, href: '/categories/locks' },
    { name: 'Video Doorbells', icon: <Bell className="w-6 h-6 text-blue-500" />, href: '/categories/doorbells' },
    { name: 'Thermostats', icon: <Thermometer className="w-6 h-6 text-blue-500" />, href: '/categories/thermostats' },
    { name: 'Lighting', icon: <Lightbulb className="w-6 h-6 text-blue-500" />, href: '/categories/lighting' },
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
    },
    {
      title: 'Alexa vs Google: Which Assistant Wins?',
      subtitle: 'Real-world tests on integrations and privacy.',
      slug: 'google-vs-alexa',
    },
    {
      title: 'Top Smart Doorbells for 2025',
      subtitle: 'Compare Ring, Nest, Eufy and more.',
      slug: 'top-smart-doorbells',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section with Right-Side News */}
      <section className="relative w-full bg-[#0c0c2c] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Hero Image & Text (2/3) */}
          <div className="relative w-full md:w-2/3 h-[50vh] rounded overflow-hidden">
            <Image
              src="/images/homesecurity_livingroom.png"
              alt="Smart Home Hero"
              fill
              className="object-cover rounded"
              priority
            />
            <div className="absolute inset-0 bg-[#0c0c2c]/60" />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-10 z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
                10 Best Smart Security Cameras for 2025
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl drop-shadow">
                From AI detection to 2K resolution — we rank the best wireless cams that secure your home and your privacy.
              </p>
            </div>
          </div>

          {/* Latest News Section (1/3) */}
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold border-b border-gray-600 pb-2">Latest News</h2>
            {latestNews.map((item, index) => (
              <Link
                key={item.slug}
                href={`/posts/${item.slug}`}
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="p-5 rounded-lg shadow bg-white hover:shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className="flex flex-col items-center">
                  {cat.icon}
                  <span className="mt-2 font-medium text-sm">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Highlights */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Featured Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="block bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-gray-50 py-12 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Latest Reviews & Guides</h2>
          <ArticleList />
        </div>
      </section>

      {/* Trust CTA Section */}
      <section className="bg-[#0c0c2c] text-white py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-3">Trusted Smart Tech Advice</h3>
          <p className="text-gray-300 mb-4">
            HomeTechAdvisor is independently supported. We test, review, and recommend the best devices to make your
            home smarter, safer, and simpler.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Learn More →
          </Link>
        </div>
      </section>
    </div>
  );
}
