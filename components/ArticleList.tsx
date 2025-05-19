'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
};

export default function ArticleList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/articles/${post.slug}`} // ✅ Fixed path
          className="group block bg-white rounded shadow hover:shadow-lg overflow-hidden transition"
        >
          {post.coverImage && (
            <div className="relative aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold group-hover:text-blue-600">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.date}</p>
            {post.description && (
              <p className="mt-1 text-gray-700 text-sm">{post.description}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
