import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const filenames = fs.readdirSync(articlesDir);

  return filenames.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound(); // Renders 404 page
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{data.date}</p>
      <ReactMarkdown className="prose">{content}</ReactMarkdown>
    </main>
  );
}
