'use client';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

type ArticleMeta = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  thumbnail?: string;
};

export default function LatestArticles() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(articlesDir);

  const articles: ArticleMeta[] = files
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
      const { data } = matter(fileContent);

      return {
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        slug: data.slug || file.replace('.md', ''),
        excerpt: data.excerpt || '',
        thumbnail: data.thumbnail || null,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <ul className="space-y-8">
          {articles.map((a) => (
            <li key={a.slug} className="flex flex-col sm:flex-row items-start gap-4">
              {a.thumbnail && (
                <div className="flex-shrink-0">
                  <Image
                    src={a.thumbnail}
                    alt={a.title}
                    width={320}
                    height={180}
                    className="rounded w-full h-auto object-cover"
                  />
                </div>
              )}
              <div>
                <Link href={`/articles/${a.slug}`} className="block hover:text-blue-600">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm text-gray-600">{a.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(a.date).toLocaleDateString()}
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}