import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy – Randevu.co',
  description: 'Privacy Policy for Randevu.co. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Privacy Policy</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          Randevu.co Ltd is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p>Randevu.co Ltd (Company Number: 14876900), registered at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, is the data controller for personal data collected through randevu.co.</p>
          <p>If you have any privacy-related questions, you can contact us at privacy@randevu.co.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Account information:</strong> name, email address, phone number, and password</li>
            <li><strong>Booking data:</strong> appointment details, service provider information, and booking history</li>
            <li><strong>Payment data:</strong> billing details processed securely by Stripe (we do not store card numbers)</li>
            <li><strong>Reviews and ratings:</strong> feedback you submit about service providers</li>
            <li><strong>Device and usage data:</strong> IP address, browser type, pages visited, and interaction data</li>
            <li><strong>Communications:</strong> messages you send to us or service providers through the platform</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Process bookings and payments</li>
            <li>Send booking confirmations and reminders</li>
            <li>Improve and personalise your experience on the platform</li>
            <li>Comply with legal and regulatory obligations</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Send you marketing communications (only with your consent)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Cookies</h2>
          <p>We use cookies and similar tracking technologies to improve the functionality of our platform and understand how users interact with it. For full details, please see our <Link href="/cookies">Cookie Policy</Link>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Third-Party Services – Stripe</h2>
          <p>Payments are processed via Stripe, Inc., a regulated payment provider. When you make a payment, Stripe collects and processes your payment information in accordance with their Privacy Policy and PCI DSS standards.</p>
          <p>Stripe may collect device data and perform identity verification as part of fraud prevention. We do not have access to your full card details.</p>
          <p>We may also use third-party services for analytics (such as Google Analytics) and customer support.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Storage</h2>
          <p>Your data is stored on secure servers within the United Kingdom and/or the European Economic Area. Where data is transferred internationally, appropriate safeguards are in place in accordance with UK GDPR.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Your Rights Under GDPR</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> request a copy of the personal data we hold about you</li>
            <li><strong>Rectification:</strong> correct inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> request deletion of your personal data where no legitimate grounds exist for its retention</li>
            <li><strong>Restriction:</strong> limit how we process your data in certain circumstances</li>
            <li><strong>Portability:</strong> receive your data in a structured, machine-readable format</li>
            <li><strong>Object:</strong> object to processing based on legitimate interests or for direct marketing</li>
            <li><strong>Withdraw consent:</strong> where processing is based on consent, withdraw it at any time</li>
          </ul>
          <p>To exercise any of these rights, contact privacy@randevu.co. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at ico.org.uk.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Data Retention</h2>
          <p>We retain your personal data for as long as your account is active or as required by law. Booking and payment records are typically retained for 7 years for accounting and legal compliance purposes.</p>
          <p>If you close your account, we will delete or anonymise your personal data within 90 days, unless we are required to retain it for legal reasons.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Security Measures</h2>
          <p>We take data security seriously and implement appropriate technical and organisational measures, including:</p>
          <ul>
            <li>HTTPS encryption for all data in transit</li>
            <li>Secure password hashing</li>
            <li>Access controls and role-based permissions</li>
            <li>Regular security assessments</li>
          </ul>
          <p>Despite these measures, no online platform can guarantee absolute security. Please use a strong, unique password and do not share your login credentials.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Children&apos;s Privacy</h2>
          <p>Randevu.co is not directed at children under the age of 18. We do not knowingly collect personal data from minors. If you believe we have inadvertently collected data from a child, please contact us immediately at privacy@randevu.co.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Policy Updates</h2>
          <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify registered users by email or a notice on the platform. The &ldquo;last updated&rdquo; date at the top of this page reflects the most recent revision.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Contact Information</h2>
          <p>For privacy-related enquiries:</p>
          <p>
            Randevu.co Ltd<br />
            71-75 Shelton Street, Covent Garden<br />
            London, WC2H 9JQ, United Kingdom<br />
            Email: privacy@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
