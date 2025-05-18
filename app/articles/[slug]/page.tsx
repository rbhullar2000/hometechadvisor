import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const filenames = fs.readdirSync(articlesDir);
  return filenames.map((name) => ({ slug: name.replace(/\.md$/, '') }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const fullPath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  try {
    const file = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(file);

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
  } catch {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn’t find this article.</p>
      </main>
    );
  }
}
