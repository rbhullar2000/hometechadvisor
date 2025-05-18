import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

// ✅ Correctly typed for Next.js App Router
interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ This is correct — NOT async
export default function ArticlePage({ params }: PageProps) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <main className="bg-white text-gray-900 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{data.date}</p>

        <div className="prose max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

// ✅ Must be async
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const filenames = fs.readdirSync(articlesDir);

  return filenames.map((name) => ({
    slug: name.replace('.md', ''),
  }));
}
