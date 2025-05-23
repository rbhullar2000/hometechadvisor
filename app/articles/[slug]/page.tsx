import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BuyOnAmazon from '@/components/BuyOnAmazon';

interface Frontmatter {
  title: string;
  date?: string;
  coverImage?: string;
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/articles');
  const files = await fs.readdir(dir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source,
      options: { parseFrontmatter: true },
      components: { BuyOnAmazon },
    });

    const formattedDate =
      frontmatter.date && (typeof frontmatter.date === 'string' || typeof frontmatter.date === 'number')
        ? new Date(frontmatter.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : '';

    return (
      <main className="bg-white text-gray-900 px-6 py-20">
        <article className="max-w-4xl mx-auto space-y-14">
          {frontmatter.coverImage && typeof frontmatter.coverImage === 'string' && (
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg shadow object-cover"
            />
          )}

          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              {frontmatter.title}
            </h1>
            {formattedDate && <p className="text-sm text-gray-500">{formattedDate}</p>}
          </header>

          <section className="prose prose-sm sm:prose-base prose-slate max-w-none">
            {content}
          </section>
        </article>
      </main>
    );
  } catch (err) {
    console.error(err);
    notFound();
  }
}
