import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';
import { helpCategories } from '@/lib/help-data';
import { SITE_URL } from '@/lib/seo-data';

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return helpCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = helpCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.label} – Randevu.co Help Center`,
    description: cat.description,
    alternates: { canonical: `${SITE_URL}/help/${category}` },
  };
}

export default async function HelpCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = helpCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/help">Help Center</Link> / {cat.label}
        </p>

        <div style={{ fontSize: '40px', marginBottom: '12px' }}>{cat.icon}</div>
        <h1 className={styles.formTitle}>{cat.label}</h1>
        <p className={styles.formSub}>{cat.description}</p>

        <ul className={styles.articleList}>
          {cat.articles.map((article) => (
            <li key={article.slug} className={styles.articleItem}>
              <a href={`/help/${category}/${article.slug}`}>
                {article.title}
                <span className={styles.articleArrow}>›</span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.ctaBox}>
          <h2>Still need help?</h2>
          <p>Our team typically responds within 24 hours.</p>
          <Link href="/help/ticket" className={styles.ctaBtn}>Open Support Ticket</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
