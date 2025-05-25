import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getArticle(slug: string) {
  const basePath = path.join(process.cwd(), 'content/articles');
  const mdxPath = path.join(basePath, `${slug}.mdx`);
  const mdPath = path.join(basePath, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return {
    content,
    metadata: data,
  };
}

export function getAllArticleSlugs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/articles'));

  return files
    .filter((filename) => filename.endsWith('.md') || filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace(/\.mdx?$/, ''),
    }));
}
