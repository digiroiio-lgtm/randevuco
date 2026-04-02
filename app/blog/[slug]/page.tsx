import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';
import { seoBlogPosts, SITE_URL } from '@/lib/seo-data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return seoBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = seoBlogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} – Randevu.co Blog`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = seoBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = seoBlogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {post.title}
        </p>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.lastUpdated}>Published: {post.publishedAt}</p>

        <div className={styles.intro}>{post.description}</div>

        <div className={styles.section}>
          <p>
            This article is part of the Randevu.co guide to beauty and wellness booking. Use
            Randevu.co to discover top-rated providers, read verified reviews, and book your
            appointment online in seconds.
          </p>
          <p>
            <Link href="/">Search providers near you →</Link>
          </p>
        </div>

        {related.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>More Articles</h2>
            <ul>
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <LegalFooter />
      </div>
    </div>
  );
}
