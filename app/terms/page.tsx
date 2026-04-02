import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service – Randevu.co',
  description: 'Terms of Service for Randevu.co, the beauty and wellness booking marketplace.',
};

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Terms of Service</p>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          Please read these Terms of Service carefully before using Randevu.co. By accessing or using our platform, you agree to be bound by these terms.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p>Welcome to Randevu.co, operated by Randevu.co Ltd (Company Number: 14876900), a private limited company registered in England and Wales with its registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.</p>
          <p>These Terms of Service govern your use of our website and platform at randevu.co. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;Randevu.co&rdquo; refer to Randevu.co Ltd.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Acceptance of Terms</h2>
          <p>By creating an account or using any part of the Randevu.co platform, you confirm that you:</p>
          <ul>
            <li>Are at least 18 years of age</li>
            <li>Have read and understood these Terms of Service</li>
            <li>Agree to be legally bound by these terms</li>
          </ul>
          <p>If you do not agree to these terms, you must not use the platform.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Platform Description</h2>
          <p>Randevu.co is an online marketplace that connects customers with independent beauty and wellness service providers. The platform allows users to search, discover, and book appointments at salons, spas, clinics, and other service businesses.</p>
          <p>Randevu.co does not provide beauty or wellness services directly. All services are performed by independent third-party businesses listed on the platform.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. User Accounts</h2>
          <p>To book appointments or list your business, you must create an account. You are responsible for:</p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activity that occurs under your account</li>
            <li>Providing accurate and up-to-date information</li>
            <li>Notifying us immediately of any unauthorised use</li>
          </ul>
          <p>We reserve the right to suspend or terminate accounts that violate these terms or are inactive for an extended period.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Booking Process</h2>
          <p>When you book through Randevu.co, you enter into a service agreement directly with the service provider. Randevu.co facilitates the booking but is not a party to the service agreement.</p>
          <p>Bookings are subject to the individual service provider&apos;s availability and cancellation policy. A booking confirmation does not guarantee availability until confirmed by the provider.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Payments and Stripe Processing</h2>
          <p>All payments on Randevu.co are processed securely via Stripe, a regulated third-party payment processor. By making a payment on our platform, you agree to Stripe&apos;s Terms of Service and Privacy Policy.</p>
          <p>Stripe may perform identity verification and anti-fraud checks as part of the payment process. The platform may suspend transactions suspected of fraud or abuse.</p>
          <p>Randevu.co does not store your full card details. Payment security and PCI compliance are managed by Stripe.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Cancellation and Refund Policy</h2>
          <p>Cancellation and refund terms depend on the individual service provider&apos;s policy. You should check the cancellation terms before completing a booking.</p>
          <p>Late cancellations or no-shows may result in a cancellation fee as determined by the service provider. Refunds are processed through Stripe and may take 5–10 business days to appear in your account.</p>
          <p>For full details, please refer to our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Business Listings</h2>
          <p>Businesses that list on Randevu.co must comply with our <Link href="/business-terms">Business Listing Agreement</Link>. Businesses are responsible for the accuracy of their listings, pricing, and availability.</p>
          <p>Randevu.co reserves the right to remove, edit, or suspend any listing that violates our policies or applicable law.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>9. User Conduct</h2>
          <p>You agree not to use the platform to:</p>
          <ul>
            <li>Post false, misleading, or fraudulent reviews or information</li>
            <li>Harass, threaten, or harm other users or businesses</li>
            <li>Engage in any unlawful activity</li>
            <li>Attempt to circumvent payment processing</li>
            <li>Scrape, copy, or distribute platform content without permission</li>
          </ul>
          <p>Violations may result in immediate account termination. For full details, see our <Link href="/acceptable-use">Acceptable Use Policy</Link>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Intellectual Property</h2>
          <p>All content, branding, and technology on Randevu.co are the property of Randevu.co Ltd or its licensors. You may not reproduce, distribute, or create derivative works without our written permission.</p>
          <p>By submitting reviews or content to the platform, you grant Randevu.co a non-exclusive licence to use that content for platform purposes.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Platform Availability</h2>
          <p>We aim to provide continuous access to Randevu.co but cannot guarantee uninterrupted service. We may carry out maintenance, updates, or modifications at any time. We are not liable for any loss arising from platform downtime.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Randevu.co Ltd shall not be liable for:</p>
          <ul>
            <li>The quality, safety, or legality of services provided by listed businesses</li>
            <li>Any indirect, incidental, or consequential loss arising from your use of the platform</li>
            <li>Any loss or damage resulting from reliance on information on the platform</li>
          </ul>
          <p>Our total liability to you in respect of any claim shall not exceed the amount you paid to us in the 12 months preceding the claim.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>13. Dispute Resolution</h2>
          <p>If you have a complaint about a service, please contact the service provider directly in the first instance. If the matter is not resolved, you may contact us at legal@randevu.co.</p>
          <p>We encourage resolution through good-faith negotiation before initiating formal proceedings.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>14. Termination</h2>
          <p>You may close your account at any time by contacting us. We may suspend or terminate your access at any time if you breach these terms, without notice.</p>
          <p>Upon termination, your right to use the platform ceases immediately. Any outstanding bookings or payments will be handled in accordance with the relevant policies.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>15. Governing Law</h2>
          <p>These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>16. Contact Information</h2>
          <p>For questions about these terms, please contact us:</p>
          <p>
            Randevu.co Ltd<br />
            71-75 Shelton Street, Covent Garden<br />
            London, WC2H 9JQ, United Kingdom<br />
            Email: legal@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
