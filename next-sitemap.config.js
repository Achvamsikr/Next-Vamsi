// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://next-vamsi.vercel.app',
    generateRobotsTxt: true,
    exclude: [], // add routes to exclude if needed
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }
  