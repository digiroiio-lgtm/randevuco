import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Payment Processing Terms – Randevu.co',
  description: 'How Randevu.co processes payments through Stripe. Payment security and compliance information.',
};

export default function PaymentTermsPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Payment Processing Terms</p>
        <h1 className={styles.title}>Payment Processing Terms</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          All payments on Randevu.co are processed securely via Stripe. This page explains how payment processing works, what data is collected, and how transactions are handled.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Payment Processor</h2>
          <p>Randevu.co uses Stripe, Inc. as its payment processor. Stripe is a regulated financial services company that complies with PCI DSS (Payment Card Industry Data Security Standard). All card transactions are handled by Stripe&apos;s secure infrastructure.</p>
          <p>Randevu.co does not store, transmit, or access your full card number, CVV, or other sensitive payment credentials.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Payment Methods</h2>
          <p>Randevu.co supports the payment methods made available by Stripe, which may include:</p>
          <ul>
            <li>Visa, Mastercard, and American Express credit and debit cards</li>
            <li>Apple Pay and Google Pay (where available)</li>
            <li>Other local payment methods as enabled by Stripe</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Identity Verification</h2>
          <p>Stripe may perform identity verification checks on customers and businesses as part of its fraud prevention and regulatory compliance obligations. This may include verifying your name, date of birth, or address.</p>
          <p>For businesses, Stripe&apos;s Know Your Business (KYB) process may require submission of company documents, director identification, and bank account details.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Payment Security and Compliance</h2>
          <p>Stripe handles all payment security and compliance, including:</p>
          <ul>
            <li>PCI DSS Level 1 certification</li>
            <li>3D Secure (3DS2) authentication for applicable transactions</li>
            <li>Encrypted data transmission</li>
            <li>Fraud detection and prevention tools</li>
          </ul>
          <p>By using Randevu.co, you agree to Stripe&apos;s <a href="https://stripe.com/gb/legal/ssa" target="_blank" rel="noopener noreferrer">Services Agreement</a> and <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Transaction Suspension</h2>
          <p>The platform may suspend or hold transactions that are suspected of fraud, abuse, or policy violations. If your transaction is held, our support team will contact you with further information.</p>
          <p>Randevu.co reserves the right to cancel bookings and reverse payments where there is evidence of fraudulent activity.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Disputes and Chargebacks</h2>
          <p>If you believe a charge is incorrect, please contact the service provider directly in the first instance. If the matter is unresolved, contact us at support@randevu.co before raising a chargeback with your bank.</p>
          <p>Initiating an unwarranted chargeback may result in account suspension. Randevu.co will provide relevant evidence to Stripe in the event of a chargeback dispute.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Refunds</h2>
          <p>Approved refunds are returned to your original payment method via Stripe. Processing times are typically 5–10 business days depending on your card issuer. For more information, see our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contact</h2>
          <p>For payment-related enquiries:</p>
          <p>
            Randevu.co Ltd<br />
            Email: payments@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
