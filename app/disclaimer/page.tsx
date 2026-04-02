import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Marketplace Disclaimer – Randevu.co',
  description: 'Randevu.co marketplace disclaimer. Understand the relationship between Randevu.co, service providers, and customers.',
};

export default function DisclaimerPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Marketplace Disclaimer</p>
        <h1 className={styles.title}>Marketplace Disclaimer</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          Randevu.co is a marketplace platform. This disclaimer clarifies the relationship between Randevu.co, service providers listed on the platform, and customers who make bookings.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Randevu.co is a Marketplace</h2>
          <p>Randevu.co Ltd operates as an online marketplace that connects customers with independent beauty and wellness service providers. Randevu.co does not itself provide, perform, or control any of the services listed on the platform.</p>
          <p>By using Randevu.co, you acknowledge that:</p>
          <ul>
            <li>Services are provided by independent third-party businesses, not by Randevu.co</li>
            <li>Randevu.co acts as a technology intermediary to facilitate bookings</li>
            <li>The service contract is between you and the individual service provider</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Independent Service Providers</h2>
          <p>All businesses listed on Randevu.co are independent operators. They set their own prices, service descriptions, cancellation policies, and operating standards. Randevu.co does not employ, direct, or supervise these businesses or their staff.</p>
          <p>The inclusion of a business on Randevu.co does not constitute an endorsement of that business or the quality of its services.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Quality and Safety</h2>
          <p>The quality, safety, and legality of services are the sole responsibility of the service provider. Randevu.co does not inspect, audit, or guarantee the quality of services provided by listed businesses.</p>
          <p>We encourage customers to:</p>
          <ul>
            <li>Read reviews and ratings before booking</li>
            <li>Review the provider&apos;s qualifications and experience</li>
            <li>Raise any concerns with the provider directly before or after the appointment</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Reviews and Ratings</h2>
          <p>Reviews on Randevu.co are submitted by verified customers who have completed appointments. While we take steps to prevent fraudulent or misleading reviews, we cannot guarantee the accuracy of all user-submitted content.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Randevu.co Ltd accepts no liability for:</p>
          <ul>
            <li>The outcome, quality, or safety of any service booked through the platform</li>
            <li>Any injury, loss, or damage resulting from a service provider&apos;s actions or omissions</li>
            <li>Inaccuracies in business listings or service descriptions provided by third parties</li>
          </ul>
          <p>If you have a dispute with a service provider, please see our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link> and <Link href="/terms">Terms of Service</Link>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>If you have a concern about a listed business or your experience on the platform, please contact:</p>
          <p>
            Randevu.co Ltd<br />
            Email: support@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
