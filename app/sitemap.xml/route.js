// app/sitemap.xml/route.js
import { format } from 'date-fns';

export async function GET() {
  const baseUrl = 'https://www.canecreative.co.uk';
  const today = format(new Date(), 'yyyy-MM-dd');

  // Static pages to include in the sitemap
  const staticPages = [
    {
      url: `${baseUrl}/`,
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: today,
    },
    {
      url: `${baseUrl}/dashboard`,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: today,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(({ url, priority, changefreq, lastmod }) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
