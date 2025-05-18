import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/articles'));
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default function ArticlePage({ params }: any) {
  const slug = params?.slug;

  try {
    const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return (
      <main className="prose mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    );
  } catch (err) {
    return notFound();
  }
}
