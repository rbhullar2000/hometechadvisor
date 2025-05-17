import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Define the expected route params
type Props = {
  params: { slug: string };
};

// Generate static params for each .md file in content/articles
export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/articles');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// Component to render a specific post
export default function PostPage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{data.date}</p>
      <div className="prose prose-lg prose-blue max-w-none leading-relaxed space-y-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}