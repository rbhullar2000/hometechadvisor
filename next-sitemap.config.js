const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hometechadvisor.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/api/*', '/404', '/_next'],

  // Dynamically include /articles/[slug] pages
  additionalPaths: async (config) => {
    const articlesDir = path.join(process.cwd(), 'content/articles');
    const files = fs.readdirSync(articlesDir);

    const articlePaths = files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => {
        const slug = file.replace(/\.mdx?$/, '');
        return {
          loc: `/articles/${slug}`,
          lastmod: new Date().toISOString(),
        };
      });

    return articlePaths;
  },
};