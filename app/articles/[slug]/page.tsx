import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(articlesDir);

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// ✅ This is the only allowed format in Next.js App Router
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <main className="bg-white text-gray-900 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{data.date}</p>

        <div className="prose prose-gray max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
