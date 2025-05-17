'use client';

type ProductCardProps = {
  title: string;
  description: string;
  link: string;
  image: string; // ✅ new
};

export default function ProductCard({ title, description, link, image }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
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