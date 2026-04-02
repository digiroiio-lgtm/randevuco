import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Contact – Randevu.co',
  description: 'Contact Randevu.co Ltd. Get in touch with our team for support, business enquiries, or legal matters.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Contact</p>
        <h1 className={styles.title}>Contact Us</h1>

        <div className={styles.intro}>
          We&apos;re here to help. Whether you&apos;re a customer with a booking question or a business looking to join the platform, get in touch with the right team below.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Customer Support</h2>
          <p>For help with bookings, payments, refunds, or account issues:</p>
          <p>
            Email: <a href="mailto:support@randevu.co">support@randevu.co</a>
          </p>
          <p>We aim to respond to all enquiries within 2 business days.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Business Enquiries</h2>
          <p>For businesses interested in listing on Randevu.co or managing an existing account:</p>
          <p>
            Email: <a href="mailto:business@randevu.co">business@randevu.co</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Legal &amp; Privacy</h2>
          <p>For legal, data protection, or compliance enquiries:</p>
          <p>
            Email: <a href="mailto:legal@randevu.co">legal@randevu.co</a><br />
            Data Protection: <a href="mailto:privacy@randevu.co">privacy@randevu.co</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Trust &amp; Safety</h2>
          <p>To report fraudulent activity, policy violations, or content concerns:</p>
          <p>
            Email: <a href="mailto:trust@randevu.co">trust@randevu.co</a>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Registered Company</h2>
          <p>
            <strong>Randevu.co Ltd</strong><br />
            Company Number: 14876900<br />
            Company Type: Private Limited Company<br />
            Country of Incorporation: United Kingdom
          </p>
          <p>
            <strong>Registered Office:</strong><br />
            71-75 Shelton Street<br />
            Covent Garden<br />
            London<br />
            WC2H 9JQ<br />
            United Kingdom
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
