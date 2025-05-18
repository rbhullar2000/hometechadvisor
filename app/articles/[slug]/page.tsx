import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// Optional: Type-safe metadata if used
type Frontmatter = {
  title: string;
  date: string;
  excerpt?: string;
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent) as {
    content: string;
    data: Frontmatter;
  };

  return (
    <main className="bg-white text-gray-900 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{data.date}</p>

        <div className="prose prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: (props) => <h1 className="text-2xl font-bold mt-6 mb-2" {...props} />,
              h2: (props) => <h2 className="text-xl font-semibold mt-4 mb-2" {...props} />,
              p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
              li: (props) => <li className="ml-4" {...props} />,
              a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
