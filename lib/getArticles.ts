import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type Article = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
};

export async function getArticles(): Promise<Article[]> {
  const postsDirectory = path.join(process.cwd(), 'content', 'articles');
  const filenames = await fs.readdir(postsDirectory);

  const articles: Article[] = [];

  for (const filename of filenames) {
    if (!filename.endsWith('.md')) continue;
    const filePath = path.join(postsDirectory, filename);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContent);

    articles.push({
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.excerpt || '',
      coverImage: data.coverImage || '',
    });
  }

  return articles;
}