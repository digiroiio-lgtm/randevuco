import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy – Randevu.co',
  description: 'Refund and cancellation policy for appointments booked through Randevu.co.',
};

export default function RefundPolicyPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Refund &amp; Cancellation Policy</p>
        <h1 className={styles.title}>Refund &amp; Cancellation Policy</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          This policy explains how cancellations and refunds are handled for appointments booked through Randevu.co. Refund eligibility may depend on the service provider&apos;s individual cancellation terms, which are displayed at the time of booking.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Appointment Cancellations</h2>
          <p>You can cancel an appointment through your Randevu.co account or by contacting the service provider directly. The cancellation window and any applicable fees are set by the individual service provider and are displayed on their booking page.</p>
          <p>We recommend cancelling as early as possible to avoid fees and to allow the business to offer the slot to another customer.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Late Cancellations</h2>
          <p>A &ldquo;late cancellation&rdquo; occurs when you cancel after the provider&apos;s cancellation window has passed (typically within 24 hours of the appointment). Late cancellations may incur a fee as set by the service provider, which may range from a partial charge to the full service value.</p>
          <p>Any late cancellation fees will be charged to your payment method on file via Stripe.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. No-Show Policy</h2>
          <p>If you do not attend a booked appointment without cancelling (&ldquo;no-show&rdquo;), the service provider may charge a no-show fee. This fee is set by the provider and is communicated at the time of booking.</p>
          <p>Repeat no-shows may result in your account being flagged or restricted.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Refund Eligibility</h2>
          <p>Refunds may be available in the following circumstances:</p>
          <ul>
            <li>You cancel within the provider&apos;s permitted cancellation window</li>
            <li>The service provider cancels your appointment</li>
            <li>The service was not delivered as described</li>
            <li>A technical error resulted in a duplicate or incorrect charge</li>
          </ul>
          <p>Refunds are not guaranteed and are assessed on a case-by-case basis. Randevu.co may facilitate refund requests on your behalf, but the final decision may rest with the service provider.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Provider Cancellation Policies</h2>
          <p>Each service provider sets their own cancellation and refund terms. These are displayed on their profile page and during the booking process. By completing a booking, you agree to the provider&apos;s stated cancellation policy.</p>
          <p>Randevu.co is not responsible for enforcing provider-specific cancellation policies, but we do expect providers to uphold the terms they advertise.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Payment Handling via Stripe</h2>
          <p>All payments are processed securely via Stripe. Approved refunds are returned to your original payment method. The time it takes for a refund to appear in your account depends on your card issuer, but is typically 5–10 business days.</p>
          <p>The platform may suspend transactions suspected of fraud or misuse. If your payment is held for review, our team will contact you.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. How to Request a Refund</h2>
          <p>To request a refund:</p>
          <ol>
            <li>First, contact the service provider directly through your booking history</li>
            <li>If unresolved within 5 business days, contact Randevu.co at support@randevu.co</li>
            <li>Provide your booking reference, the reason for the refund, and any supporting evidence</li>
          </ol>
          <p>We aim to respond to all refund requests within 5 business days.</p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
