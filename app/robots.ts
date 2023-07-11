export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://next-valhalla-starter.netlify.app/sitemap.xml',
    host: 'https://next-valhalla-starter.netlify.app',
  };
}