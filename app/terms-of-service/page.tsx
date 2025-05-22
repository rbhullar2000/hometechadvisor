'use client';
import React from 'react';

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By accessing or using HomeTechAdvisor.com, you agree to be bound by these Terms of Service. Please read them carefully.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Content Accuracy</h2>
      <p className="mb-4">
        We aim to provide accurate and up-to-date information. However, we make no warranties or guarantees regarding the accuracy, reliability, or completeness of any content.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Affiliate Links</h2>
      <p className="mb-4">
        Some links on our site are affiliate links. We may receive a commission if you make a purchase through these links. This does not affect the price you pay.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        HomeTechAdvisor is not liable for any damages or losses resulting from your use of the site, including any decisions made based on product reviews or recommendations.
      </p>
      <p>
        If you do not agree to these terms, please do not use our site.
      </p>
    </main>
  );
}