'use client';

import Link from 'next/link';

export default function AssistantsCategoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Top Voice Assistants (2025)</h1>
      <p className="text-gray-700 mb-6">
        Compare Google Assistant and Amazon Alexa in responsiveness, smart home compatibility, and daily usability.
      </p>

      <div className="space-y-6">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2">Alexa vs Google: Which Assistant Wins?</h2>
          <p className="text-gray-600 mb-3">
            We test responsiveness, integrations, and more in real-world conditions.
          </p>
          <Link
            href="/posts/google-vs-alexa"
            className="text-blue-600 font-medium hover:underline"
          >
            Read Full Review →
          </Link>
        </div>
      </div>
    </main>
  );
}