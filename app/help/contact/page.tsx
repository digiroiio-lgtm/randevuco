import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/help/help.module.css';
import { SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Contact Support – Randevu.co',
  description: 'Get in touch with the Randevu.co support team. Open a ticket or browse help articles.',
  alternates: { canonical: `${SITE_URL}/help/contact` },
};

export default function HelpContactPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.containerNarrow}>
        <p className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/help">Help Center</Link> / Contact Support
        </p>
        <h1 className={styles.formTitle}>Contact Support</h1>
        <p className={styles.formSub}>
          Choose how you&apos;d like to get in touch with the Randevu.co team.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {/* Ticket */}
          <div className={styles.ticketCard}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎫</div>
            <h2 className={styles.sectionTitleLeft}>Open a Support Ticket</h2>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px' }}>
              Submit a ticket and our team will respond within 24 hours. Best for booking issues,
              payment disputes, refund requests, and account problems.
            </p>
            <Link href="/help/ticket" className={styles.ctaBtn}>Open Support Ticket</Link>
          </div>

          {/* Email */}
          <div className={styles.ticketCard}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>📧</div>
            <h2 className={styles.sectionTitleLeft}>Email Us</h2>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Customer Support:</strong>{' '}
              <a href="mailto:support@randevu.co" style={{ color: 'var(--accent)' }}>support@randevu.co</a>
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Business Enquiries:</strong>{' '}
              <a href="mailto:business@randevu.co" style={{ color: 'var(--accent)' }}>business@randevu.co</a>
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Legal & Privacy:</strong>{' '}
              <a href="mailto:legal@randevu.co" style={{ color: 'var(--accent)' }}>legal@randevu.co</a>
            </p>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>
              <strong>Trust & Safety:</strong>{' '}
              <a href="mailto:trust@randevu.co" style={{ color: 'var(--accent)' }}>trust@randevu.co</a>
            </p>
          </div>

          {/* Address */}
          <div className={styles.ticketCard}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🏢</div>
            <h2 className={styles.sectionTitleLeft}>Postal Address</h2>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8' }}>
              Randevu.co Ltd<br />
              71-75 Shelton Street<br />
              Covent Garden<br />
              London, WC2H 9JQ<br />
              United Kingdom
            </p>
          </div>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
