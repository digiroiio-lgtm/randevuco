import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import FaqAccordion from './FaqAccordion';
import styles from './help.module.css';
import { helpCategories, faqItems } from '@/lib/help-data';
import { SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Help Center – Randevu.co',
  description: 'Find answers, browse help articles, and get support for your Randevu.co bookings.',
  alternates: { canonical: `${SITE_URL}/help` },
};

export default function HelpPage() {
  return (
    <div className={styles.page}>
      <Nav />

      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>How can we help you?</h1>
        <p className={styles.heroSub}>Search our help articles or browse by category below.</p>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="search" placeholder="Search help articles…" readOnly aria-label="Search help articles" />
        </div>
      </div>

      <div className={styles.container}>
        {/* Breadcrumb */}
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Help Center</p>

        {/* Category Cards */}
        <h2 className={styles.sectionTitle}>Browse by Category</h2>
        <div className={styles.categoryGrid}>
          {helpCategories.map((cat) => (
            <Link key={cat.slug} href={`/help/${cat.slug}`} className={styles.categoryCard}>
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <span className={styles.categoryLabel}>{cat.label}</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <FaqAccordion items={faqItems.slice(0, 5)} />

        <p style={{ textAlign: 'center', marginBottom: '56px' }}>
          <Link href="/help/faq" style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>
            View all FAQs →
          </Link>
        </p>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h2>Still need help?</h2>
          <p>Our support team typically responds within 24 hours.</p>
          <Link href="/help/ticket" className={styles.ctaBtn}>Open Support Ticket</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
