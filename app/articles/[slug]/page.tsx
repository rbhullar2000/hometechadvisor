import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(dir);

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function Page({ params }: Params) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="text-gray-600">We couldn’t find this post.</p>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent) as {
    content: string;
    data: { title: string; date: string };
  };

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
