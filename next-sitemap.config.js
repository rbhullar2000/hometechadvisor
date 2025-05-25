/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hometechadvisor.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/api/*', '/404', '/_next/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Only include valid public-facing routes
    const excluded = ['/404', '/api', '/api/*', '/_next'];
    const shouldInclude = !excluded.some((excludedPath) => path.includes(excludedPath));

    return shouldInclude
      ? {
          loc: path,
          changefreq: 'weekly',
          priority: path === '/' ? 1.0 : 0.7,
          lastmod: new Date().toISOString(),
        }
      : null;
  },
};