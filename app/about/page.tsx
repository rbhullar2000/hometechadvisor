'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">About HomeTechAdvisor</h1>
      <p className="text-lg mb-4">
        HomeTechAdvisor was created to help homeowners and renters confidently navigate the fast-evolving world of smart home technology.
      </p>
      <p className="text-lg mb-4">
        We independently research, test, and review devices ranging from smart locks to voice assistants so you can make smarter buying decisions without the fluff or paid bias.
      </p>
      <p className="text-lg mb-4">
        Our mission is simple: bring you trustworthy, hands-on recommendations that make your home more connected, more secure, and easier to manage — without needing to be a tech expert.
      </p>
      <p className="text-lg mb-4">
        Whether you're setting up your first smart device or upgrading an entire system, HomeTechAdvisor is here to guide you.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">What You Can Expect</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Independent and unbiased product reviews</li>
          <li>Clear pros and cons — no sugarcoating</li>
          <li>Buyer’s guides tailored to real-world needs</li>
          <li>Regular updates as new smart home gear hits the market</li>
        </ul>
      </div>
    </main>
  );
}