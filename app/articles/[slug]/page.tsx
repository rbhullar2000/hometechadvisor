import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articlesPath = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(articlesPath);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export default function ArticlePage({ params }: PageProps) {
  const { slug } = params;
  const articlePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(articlePath)) {
    return <div className="p-10 text-red-500">Article not found.</div>;
  }

  const fileContent = fs.readFileSync(articlePath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <main className="prose prose-lg mx-auto py-12 px-4">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
