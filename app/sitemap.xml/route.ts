import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/seo-data';

function sitemapIndex(sitemaps: string[]) {
  const entries = sitemaps
    .map(
      (url) => `  <sitemap>
    <loc>${url}</loc>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

export function GET() {
  const xml = sitemapIndex([
    `${SITE_URL}/sitemap-categories.xml`,
    `${SITE_URL}/sitemap-locations.xml`,
    `${SITE_URL}/sitemap-businesses.xml`,
    `${SITE_URL}/sitemap-blog.xml`,
  ]);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}
