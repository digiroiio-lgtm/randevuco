import { NextResponse } from 'next/server';
import { SITE_URL, seoCities } from '@/lib/seo-data';

function urlEntry(loc: string, changefreq: string, priority: string) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const entries: string[] = [];

  // City root pages: /antalya, /london, etc.
  for (const city of seoCities) {
    entries.push(urlEntry(`${SITE_URL}/${city.slug}`, 'weekly', '0.8'));
  }

  // District pages: /antalya/konyaalti, /london/shoreditch, etc.
  for (const city of seoCities) {
    for (const district of city.districts) {
      entries.push(urlEntry(`${SITE_URL}/${city.slug}/${district.slug}`, 'weekly', '0.7'));
    }
  }

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
