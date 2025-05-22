'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: '#0c0c2c' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-center space-y-2">
        <p className="text-white">
          © 2025 HomeTechAdvisor. All rights reserved.
        </p>
        <p className="text-white opacity-80">
          As an Amazon Associate, HomeTechAdvisor earns from qualifying purchases.{' '}
          <Link href="/affiliate-disclosure" className="underline">Learn more</Link>.
        </p>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="underline text-white opacity-80">Privacy Policy</Link>
          <Link href="/terms-of-service" className="underline text-white opacity-80">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}