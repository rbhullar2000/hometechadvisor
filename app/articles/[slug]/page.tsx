import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// ✅ This matches what Next.js 15 expects for dynamic routes
type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ Optional: set metadata for better SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.excerpt,
  };
}

// ✅ Generates static paths for all markdown files
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/articles'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// ✅ The actual page component
export default function ArticlePage({ params }: PageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
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
