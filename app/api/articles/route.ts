import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'content', 'articles');

  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'));

  const articles = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      // Validate required fields
      if (!data.title || !data.date) {
        console.warn(`Skipping article: ${filename} (missing title or date)`);
        return null;
      }

      return {
        slug: filename.replace('.mdx', ''),
        title: data.title,
        date: data.date || null,
        description: data.excerpt || '',
        coverImage: data.coverImage || '',
      };
    })
    .filter(Boolean); // Remove nulls from skipped articles

  // Sort by date descending
  articles.sort((a, b) => {
    return new Date(b!.date).getTime() - new Date(a!.date).getTime();
  });

  return NextResponse.json(articles);
}