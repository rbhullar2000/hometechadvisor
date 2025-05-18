import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(dir);

  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <main className="prose mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
