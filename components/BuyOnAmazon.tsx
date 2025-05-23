'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function BuyOnAmazon({ href }: { href: string }) {
  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 mb-2">Where to buy:</p>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2.5 px-5 rounded-full shadow-sm transition"
      >
        <ShoppingCart size={16} strokeWidth={2} />
        Buy on Amazon
      </Link>
    </div>
  );
}