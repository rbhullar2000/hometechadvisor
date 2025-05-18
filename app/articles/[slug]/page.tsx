import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(articlesDir);

  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// ⚠️ NO custom type. Destructure `params` directly.
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const articlePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  if (!fs.existsSync(articlePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(articlePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <main className="prose prose-lg mx-auto py-12 px-4">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
