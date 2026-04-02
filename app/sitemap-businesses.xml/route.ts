import { NextResponse } from 'next/server';
import { SITE_URL, seoBusinessSlugs } from '@/lib/seo-data';

function urlEntry(loc: string, changefreq: string, priority: string) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const entries = seoBusinessSlugs.map((slug) =>
    urlEntry(`${SITE_URL}/salon/${slug}`, 'daily', '0.9')
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=900',
    },
  });
}
