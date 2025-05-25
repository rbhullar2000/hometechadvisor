/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.hometechadvisor.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/api/*', '/404'], // exclude dynamic/api pages
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};