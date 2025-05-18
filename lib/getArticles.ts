import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getArticle(slug: string) {
  const filePath = path.join(process.cwd(), 'content/articles', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return {
    content,
    metadata: data,
  };
}

export function getAllArticleSlugs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/articles'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
