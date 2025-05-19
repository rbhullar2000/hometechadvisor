import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const filenames = await fs.readdir(articlesDir);
  return filenames.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data } = matter(fileContent);
  return {
    title: data.title,
    description: data.excerpt || '',
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return (
      <main className="bg-white text-gray-900 px-4 py-16">
        <article className="max-w-4xl mx-auto space-y-10">

          {/* Cover Image */}
          {data.coverImage && (
            <section>
              <Image
                src={data.coverImage}
                alt={data.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </section>
          )}

          {/* Title & Meta */}
          <section className="space-y-1">
            <h1 className="text-4xl font-extrabold tracking-tight">{data.title}</h1>
            <p className="text-sm text-gray-500">{new Date(data.date).toLocaleDateString()}</p>
          </section>

          {/* Markdown Content */}
          <section className="prose prose-lg prose-slate max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </section>
        </article>
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
