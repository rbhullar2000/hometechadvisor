'use client';

import Link from 'next/link';

export default function BestSmartDevicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="md:col-span-3 space-y-8">
          <h1 className="text-3xl font-bold mb-4">Best Smart Devices for Your Home (2025)</h1>
          <p className="text-gray-600 mb-6">
            We’ve researched and tested the latest gadgets to help you build a smarter, more connected home. Here are our top picks.
          </p>

          {/* Product 1 */}
          <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">1. Nest Learning Thermostat</h2>
            <p className="mb-2">An energy-saving smart thermostat that adapts to your routine. Sleek design, easy integration with Google Home.</p>
            <a
              href="https://www.amazon.ca/dp/B0131RG6VK?tag=yourtag-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              🔗 Buy on Amazon
            </a>
          </div>

          {/* Product 2 */}
          <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">2. Ring Video Doorbell Pro 2</h2>
            <p className="mb-2">Advanced motion detection and crystal-clear video. A top choice for front-door security.</p>
            <a
              href="https://www.amazon.ca/dp/B08N5N6RSS?tag=yourtag-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              🔗 Buy on Amazon
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden md:block space-y-4">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="text-sm text-blue-600 space-y-2">
            <li><Link href="/categories/thermostats">Smart Thermostats</Link></li>
            <li><Link href="/categories/doorbells">Video Doorbells</Link></li>
            <li><Link href="/categories/locks">Smart Locks</Link></li>
            <li><Link href="/categories/lights">Smart Lighting</Link></li>
            <li><Link href="/categories/cameras">Security Cameras</Link></li>
          </ul>
        </aside>
      </div>
    </main>
  );
}