import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy – Randevu.co',
  description: 'Acceptable Use Policy for Randevu.co. Prohibited activities and account suspension rules.',
};

export default function AcceptableUsePage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Acceptable Use Policy</p>
        <h1 className={styles.title}>Acceptable Use Policy</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          This Acceptable Use Policy sets out the rules for using Randevu.co. By accessing the platform, you agree to comply with this policy. Violations may result in account suspension or termination.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Prohibited Activities</h2>
          <p>You must not use Randevu.co to:</p>
          <ul>
            <li>Engage in any unlawful activity, including money laundering, fraud, or identity theft</li>
            <li>Post or transmit content that is defamatory, harassing, obscene, or discriminatory</li>
            <li>Impersonate another person or misrepresent your identity or affiliation</li>
            <li>Interfere with or disrupt the platform&apos;s infrastructure, servers, or networks</li>
            <li>Attempt to gain unauthorised access to any account, system, or data</li>
            <li>Collect or harvest other users&apos; personal data without consent</li>
            <li>Use automated tools (bots, scrapers) to access the platform without permission</li>
            <li>List services you are not qualified or licensed to provide</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Fraud Prevention</h2>
          <p>Randevu.co takes fraud prevention seriously. The following activities are strictly prohibited:</p>
          <ul>
            <li>Creating fake bookings to manipulate reviews or ratings</li>
            <li>Using stolen or unauthorised payment methods</li>
            <li>Attempting to circumvent Stripe&apos;s payment verification processes</li>
            <li>Submitting false or misleading refund or chargeback requests</li>
          </ul>
          <p>We actively monitor for suspicious activity and may report fraud to the relevant authorities.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Payment Abuse</h2>
          <p>Abuse of the payment system includes, but is not limited to:</p>
          <ul>
            <li>Making bookings with no intention of attending</li>
            <li>Exploiting promotional offers or discounts beyond their intended use</li>
            <li>Initiating fraudulent chargebacks after receiving a service</li>
            <li>Using Randevu.co to process payments unrelated to the platform&apos;s services</li>
          </ul>
          <p>Payment abuse may result in immediate account suspension and recovery of any losses incurred.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Content Misuse</h2>
          <p>You must not:</p>
          <ul>
            <li>Post reviews for appointments that did not take place</li>
            <li>Upload images or content that you do not have the rights to use</li>
            <li>Reproduce, distribute, or modify platform content without written permission from Randevu.co</li>
            <li>Use the platform&apos;s content or data to build a competing service</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Account Suspension</h2>
          <p>Randevu.co reserves the right to suspend or permanently terminate accounts that violate this policy. In serious cases, we may also:</p>
          <ul>
            <li>Remove associated business listings</li>
            <li>Cancel pending bookings</li>
            <li>Report the activity to law enforcement or regulatory authorities</li>
            <li>Pursue legal action to recover losses</li>
          </ul>
          <p>Where possible, we will notify you of a suspension and give you an opportunity to respond, unless the severity of the violation requires immediate action.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Reporting Violations</h2>
          <p>If you believe another user or business is violating this policy, please report it to us at:</p>
          <p>
            Randevu.co Ltd<br />
            Email: trust@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
