import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// ✅ 1. generateStaticParams MUST be async in the App Router
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const filenames = await fs.readdir(articlesDir);

  return filenames.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

// ✅ 2. Optional: SEO metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.excerpt || '',
  };
}

// ✅ 3. Article page component
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
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
  } catch (err) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="text-gray-600">We couldn’t find this post.</p>
      </main>
    );
  }
}