// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://vamsi-hotelbooking-nellore.vercel.app/',
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
  