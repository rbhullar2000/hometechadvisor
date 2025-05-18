'use client';

import Image from 'next/image';

type ProductCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function ProductCard({ title, description, link, image }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4 text-sm text-gray-700">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          🔗 Buy on Amazon
        </a>
      </div>
    </div>
  );
}
