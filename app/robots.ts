import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo-data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/panel/', '/api/', '/isletme-kayit/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
