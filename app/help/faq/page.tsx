import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import FaqAccordion from '@/app/help/FaqAccordion';
import styles from '@/app/help/help.module.css';
import { faqItems } from '@/lib/help-data';
import { SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'FAQ – Randevu.co Help Center',
  description: 'Frequently asked questions about booking, payments, accounts, and more on Randevu.co.',
  alternates: { canonical: `${SITE_URL}/help/faq` },
};

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/help">Help Center</Link> / FAQ
        </p>
        <h1 className={styles.formTitle}>Frequently Asked Questions</h1>
        <p className={styles.formSub}>
          Quick answers to common questions about Randevu.co.
        </p>

        <FaqAccordion items={faqItems} />

        <div className={styles.ctaBox}>
          <h2>Can&apos;t find your answer?</h2>
          <p>Submit a support ticket and our team will get back to you within 24 hours.</p>
          <Link href="/help/ticket" className={styles.ctaBtn}>Open Support Ticket</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
