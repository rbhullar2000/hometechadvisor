import { getArticle, getAllArticleSlugs } from '@/lib/articles';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white text-gray-900 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{article.metadata.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{article.metadata.date}</p>

        <div className="prose max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
