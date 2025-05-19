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
      <main className="bg-white text-gray-900 px-6 py-20">
        <article className="max-w-4xl mx-auto space-y-14">
          {data.coverImage && (
            <section>
              <Image
                src={data.coverImage}
                alt={data.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow object-cover"
              />
            </section>
          )}

          <section className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {data.title}
            </h1>
            <p className="text-base text-gray-500">{new Date(data.date).toLocaleDateString()}</p>
          </section>

          <section className="prose prose-lg prose-slate max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="mt-14 mb-5 text-3xl font-bold text-gray-800 border-b pb-2" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="mt-10 mb-4 text-2xl font-semibold text-gray-800" {...props} />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 bg-gray-50 p-4 rounded" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-6 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="leading-relaxed" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-gray-900" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="my-5 leading-relaxed text-[1.05rem] text-gray-800" {...props} />
                )
              }}
            >
              {content}
            </ReactMarkdown>

            {/* Only show this block on smart-lock-showdown */}
            {params.slug === 'smart-lock-showdown' && (
              <section className="space-y-12 mt-20">
                <h2 className="text-3xl font-semibold text-gray-900 border-b pb-2">
                  Installation: Retrofit vs Replacement
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* August */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">August</h3>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      <li><strong>Install Time:</strong> ~10 minutes</li>
                      <li><strong>Tools Required:</strong> None (basic screwdriver optional)</li>
                      <li><strong>Process:</strong> Mounts inside over the existing deadbolt thumbturn.</li>
                      <li><strong>Skill Level:</strong> Beginner-friendly; no door modification needed.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                      The August lock excels here. You keep your existing deadbolt (and keys), and the smart unit simply attaches
                      over the interior lock. No drilling or replacing parts. Ideal for renters or anyone hesitant about permanent changes.
                    </p>
                  </div>

                  {/* Schlage */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Schlage</h3>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      <li><strong>Install Time:</strong> ~25–30 minutes</li>
                      <li><strong>Tools Required:</strong> Screwdriver, possibly chisel (for some older doors)</li>
                      <li><strong>Process:</strong> Complete removal of the old deadbolt; installs a full smart deadbolt.</li>
                      <li><strong>Skill Level:</strong> Intermediate. Not hard, but more hands-on.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                      Schlage requires you to fully replace your door's lock, including the latch and strike plate.
                      The payoff is a fully integrated, tamper-resistant unit with a keypad and built-in Wi-Fi.
                    </p>
                  </div>
                </div>

                {/* Verdict */}
                <div className="mt-10 rounded-lg border border-gray-200 bg-white px-6 py-5">
                  <div className="text-base text-gray-900 font-semibold mb-3">Verdict</div>
                  <p className="text-base text-gray-800 font-medium">
                    <strong>Winner: August</strong> – For ease and minimal installation.
                  </p>
                  <p className="text-base text-gray-800 font-medium mt-2">
                    <strong>Winner: Schlage</strong> – For durability and integrated security.
                  </p>
                </div>
              </section>
            )}
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
