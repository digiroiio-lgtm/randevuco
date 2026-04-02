import { NextResponse } from 'next/server';
import { SITE_URL, seoBlogPosts } from '@/lib/seo-data';

function urlEntry(loc: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const entries = [
    urlEntry(`${SITE_URL}/blog`, '2025-04-01', 'weekly', '0.8'),
    ...seoBlogPosts.map((post) =>
      urlEntry(`${SITE_URL}/blog/${post.slug}`, post.publishedAt, 'monthly', '0.6')
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
