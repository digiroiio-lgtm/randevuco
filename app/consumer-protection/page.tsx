import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Consumer Protection Notice – Randevu.co',
  description: 'Consumer Protection Notice for Randevu.co. Your rights as a customer booking services through our marketplace.',
};

export default function ConsumerProtectionPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Consumer Protection Notice</p>
        <h1 className={styles.title}>Consumer Protection Notice</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          This notice explains your rights as a consumer using Randevu.co and the nature of the service agreements you enter into when booking through our platform.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Who You Are Contracting With</h2>
          <p>When you book a service through Randevu.co, your contract for the provision of that service is with the individual service provider, not with Randevu.co Ltd. Randevu.co operates as a marketplace and technology intermediary to facilitate your booking.</p>
          <p>The service provider is responsible for delivering the service, setting their own terms, and handling any complaints about the service itself.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Consumer Rights</h2>
          <p>As a consumer based in the United Kingdom, you are protected by consumer law, including:</p>
          <ul>
            <li>The <strong>Consumer Rights Act 2015</strong>, which requires services to be provided with reasonable care and skill, within a reasonable time, and at a reasonable price (if not agreed in advance)</li>
            <li>The <strong>Consumer Contracts Regulations 2013</strong>, which may provide cancellation rights for services booked online</li>
            <li>Protection against unfair contract terms under the <strong>Unfair Terms in Consumer Contracts Regulations</strong></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Resolving Disputes with Service Providers</h2>
          <p>If you have a complaint about a service you received, we recommend the following steps:</p>
          <ol>
            <li>Contact the service provider directly and explain the issue</li>
            <li>Allow the provider a reasonable time to respond (typically 5–7 business days)</li>
            <li>If unresolved, contact Randevu.co at support@randevu.co with your booking reference</li>
          </ol>
          <p>While Randevu.co is not a party to the service agreement, we may assist in facilitating a resolution between you and the provider.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Payments and Refunds</h2>
          <p>Payments made through Randevu.co are processed securely by Stripe. If you believe you are entitled to a refund, please refer to our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link> and contact the provider in the first instance.</p>
          <p>Customers should contact the service provider first regarding any disputes relating to the quality or delivery of a service before raising a chargeback with their bank.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Alternative Dispute Resolution</h2>
          <p>If you are unable to resolve a dispute directly with the service provider, you may be entitled to use alternative dispute resolution (ADR) services. Information about ADR providers is available from the <a href="https://www.which.co.uk/consumer-rights/advice/how-to-use-an-ombudsman-or-adr-scheme-arXKL0Z2TQwk" target="_blank" rel="noopener noreferrer">Citizens Advice Bureau</a>.</p>
          <p>You can also access the European Commission&apos;s Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p>For consumer enquiries:</p>
          <p>
            Randevu.co Ltd<br />
            71-75 Shelton Street, Covent Garden<br />
            London, WC2H 9JQ, United Kingdom<br />
            Email: support@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
