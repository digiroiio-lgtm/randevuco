import { NextResponse } from 'next/server';
import { SITE_URL, seoCategories, seoCities } from '@/lib/seo-data';

function urlEntry(loc: string, changefreq: string, priority: string) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const entries: string[] = [];

  // Root category pages: /hair-salons, /barbers, etc.
  for (const cat of seoCategories) {
    entries.push(urlEntry(`${SITE_URL}/${cat.slug}`, 'weekly', '0.9'));
  }

  // City+category pages: /antalya/hair-salons, /london/barbers, etc.
  for (const city of seoCities) {
    for (const cat of seoCategories) {
      entries.push(urlEntry(`${SITE_URL}/${city.slug}/${cat.slug}`, 'weekly', '0.8'));
    }
  }

  // District+category pages: /antalya/konyaalti/hair-salons, etc.
  for (const city of seoCities) {
    for (const district of city.districts) {
      for (const cat of seoCategories) {
        entries.push(urlEntry(`${SITE_URL}/${city.slug}/${district.slug}/${cat.slug}`, 'weekly', '0.7'));
      }
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
