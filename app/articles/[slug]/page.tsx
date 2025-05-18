import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

// DO NOT import or use any PageProps type — use inline typing here:
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <p className="text-gray-600">Sorry, this post does not exist.</p>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

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
