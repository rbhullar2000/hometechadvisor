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
      title: 'Ultimate Wi-Fi Guide for 2025: Best Systems for Every Home',
      subtitle: 'Explore the best Wi-Fi technologies.',
      slug: 'ultimate-wifi-guide-2025',
      image: '/images/wifi-guide-thumb.jpg',
    },
    {
      title: 'Complete Guide to Home Backup Power: Gas Generators and Battery Systems',
      subtitle: 'Why Backup Power Matters',
      slug: 'backup-power-guide',
      image: '/images/backuppower.png',
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
      <section className="relative w-full bg-[#0c0c2c] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-2/3 h-[50vh] rounded-sm overflow-hidden">
            <Image
              src="/images/homesecurity_livingroom.png"
              alt="Smart Home Hero"
              fill
              className="object-cover rounded-sm"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-10 z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
                The Future of Home Tech — Tested & Reviewed
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl drop-shadow-sm">
                From home security to everyday comfort, we help you choose the best smart devices.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold border-b border-gray-600 pb-2">Latest News</h2>
            {latestNews.map((item, index) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="block bg-[#1a1a3c] hover:bg-[#2a2a4c] p-4 rounded-md transition"
              >
                <p className="text-sm text-gray-400 mb-1">#{index + 1}</p>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Featured Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="group block rounded-2xl bg-white shadow transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-blue-500/20"
              >
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews & Guides */}
      <section className="bg-gray-50 py-16 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Latest Reviews & Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {latestNews.map((post) => (
              <Link
                key={post.slug}
                href={`/articles/${post.slug}`}
                className="group block rounded-2xl bg-white shadow transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-blue-500/20"
              >
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}