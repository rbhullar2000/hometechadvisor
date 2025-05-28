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
    <div className="border border-gray-200 rounded-lg shadow-xs overflow-hidden hover:shadow-md transition bg-white">
      {/* Fixed width, auto height image */}
      <div className="relative w-full aspect-4/3">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover rounded-t-lg"
  />
</div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4 text-sm text-gray-700">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
        >
          🔗 Buy on Amazon
        </a>
      </div>
    </div>
  );
}