import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Business Listing Agreement – Randevu.co',
  description: 'Terms for businesses listing their services on the Randevu.co marketplace.',
};

export default function BusinessTermsPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Business Listing Agreement</p>
        <h1 className={styles.title}>Business Listing Agreement</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          This Business Listing Agreement governs the relationship between Randevu.co Ltd and businesses that list their services on the Randevu.co marketplace. By creating a business account, you agree to these terms.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Eligibility</h2>
          <p>To list on Randevu.co, your business must:</p>
          <ul>
            <li>Be a legitimately operating business providing beauty, wellness, or related services</li>
            <li>Hold any licences or registrations required by law for the services you offer</li>
            <li>Have a valid bank account capable of receiving Stripe payouts</li>
            <li>Comply with applicable health, safety, and consumer protection laws</li>
          </ul>
          <p>Randevu.co reserves the right to verify your eligibility and request supporting documentation at any time.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Listing Standards</h2>
          <p>Your business listing must:</p>
          <ul>
            <li>Accurately represent the services, prices, and availability you offer</li>
            <li>Include current and complete contact and location information</li>
            <li>Use only images and content you have the right to use</li>
            <li>Not contain misleading, false, or offensive content</li>
          </ul>
          <p>Randevu.co may edit or remove content that does not meet these standards, without notice.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Pricing and Commissions</h2>
          <p>You set the prices for your services. Randevu.co may charge a commission or service fee on bookings made through the platform. The applicable fee structure will be communicated to you during onboarding and may be updated with reasonable notice.</p>
          <p>Prices displayed to customers must be inclusive of all applicable taxes and charges.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Payments Through Stripe</h2>
          <p>Payments from customers are processed via Stripe. To receive payments, you must complete Stripe&apos;s onboarding process, which may include identity verification and business verification.</p>
          <p>Stripe handles the security of all transactions. Randevu.co is not responsible for delays or issues caused by Stripe&apos;s payment processing systems.</p>
          <p>Payouts are made to your registered bank account on the schedule agreed during onboarding. Randevu.co&apos;s commission will be deducted before payout.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Reviews and Ratings</h2>
          <p>Customers who complete appointments may leave reviews and ratings on your profile. You may not offer incentives for positive reviews or take action to remove genuine negative reviews.</p>
          <p>You may respond to reviews publicly in a professional manner. Abusive or defamatory responses may be removed.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Account Suspension</h2>
          <p>Randevu.co may suspend or restrict your business account if:</p>
          <ul>
            <li>You breach any term of this agreement</li>
            <li>We receive a significant number of complaints or refund requests</li>
            <li>We suspect fraudulent activity on your account</li>
            <li>You fail to maintain required licences or legal compliance</li>
          </ul>
          <p>We will aim to notify you of any suspension and give you an opportunity to respond, except where immediate suspension is necessary to protect customers.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Removal of Listings</h2>
          <p>You may remove your listing at any time by contacting us. Pending bookings at the time of removal must be honoured or cancelled with appropriate notice to affected customers.</p>
          <p>Randevu.co may permanently remove a listing for serious or repeated breaches of this agreement.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Contact</h2>
          <p>For business account enquiries, contact:</p>
          <p>
            Randevu.co Ltd<br />
            Email: business@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
