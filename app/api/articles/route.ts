import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'content', 'articles');
  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));

  const articles = filenames.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.excerpt || '',
      coverImage: data.coverImage || '',
    };
  });

  return NextResponse.json(articles);
}