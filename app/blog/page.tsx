import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';
import { seoBlogPosts, SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Blog – Randevu.co',
  description: 'Beauty and wellness tips, guides, and news from the Randevu.co team.',
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Blog</p>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.intro}>
          Beauty and wellness tips, service guides, and local recommendations from the Randevu.co team.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Latest Articles</h2>
          <ul>
            {seoBlogPosts.map((post) => (
              <li key={post.slug} style={{ marginBottom: '16px' }}>
                <Link href={`/blog/${post.slug}`} style={{ fontWeight: 600 }}>
                  {post.title}
                </Link>
                <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0' }}>
                  {post.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <LegalFooter />
      </div>
    </div>
  );
}
