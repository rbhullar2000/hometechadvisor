import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/articles');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{data.date}</p>
      <ReactMarkdown className="prose">{content}</ReactMarkdown>
    </article>
  );
}
