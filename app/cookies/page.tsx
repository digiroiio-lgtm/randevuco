import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import styles from '@/app/legal/legal.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy – Randevu.co',
  description: 'Cookie Policy for Randevu.co. Learn about the cookies we use and how to manage them.',
};

export default function CookiesPage() {
  return (
    <div className={styles.page}>
      <Nav />
      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Home</Link> / Cookie Policy</p>
        <h1 className={styles.title}>Cookie Policy</h1>
        <p className={styles.lastUpdated}>Last updated: 1 April 2025</p>

        <div className={styles.intro}>
          This Cookie Policy explains what cookies are, how Randevu.co uses them, and how you can control your cookie preferences.
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They allow websites to recognise your device, remember your preferences, and improve your experience over repeat visits.</p>
          <p>Cookies can be &ldquo;session cookies&rdquo; (deleted when you close your browser) or &ldquo;persistent cookies&rdquo; (stored for a set period). They can be set by the website you&apos;re visiting (&ldquo;first-party cookies&rdquo;) or by third-party services on the site.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Types of Cookies We Use</h2>
          <p>We use the following categories of cookies on Randevu.co:</p>
          <ul>
            <li><strong>Strictly necessary cookies:</strong> Required for the platform to function. These include session management, security, and payment processing cookies. These cannot be disabled.</li>
            <li><strong>Functional cookies:</strong> Remember your preferences and settings to improve your experience (e.g., language, location).</li>
            <li><strong>Analytics cookies:</strong> Collect anonymised data about how users interact with the platform to help us improve it.</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertising and measure the effectiveness of campaigns.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Analytics Cookies</h2>
          <p>We use analytics services (such as Google Analytics) to understand how users navigate the platform, which pages are most visited, and where improvements can be made. This data is collected in aggregate and does not identify you personally.</p>
          <p>You can opt out of Google Analytics by visiting <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Marketing Cookies</h2>
          <p>With your consent, we may use marketing cookies to show you relevant adverts on third-party platforms (such as Google or Meta). These cookies track your interactions with our platform to help us deliver personalised advertising.</p>
          <p>You can withdraw consent for marketing cookies at any time through your cookie preferences.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Managing Cookies</h2>
          <p>You can control and manage cookies in several ways:</p>
          <ul>
            <li><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies. Please note that disabling certain cookies may affect platform functionality.</li>
            <li><strong>Cookie consent banner:</strong> When you first visit Randevu.co, you can choose which non-essential cookies to accept.</li>
            <li><strong>Cookie preferences:</strong> You can update your preferences at any time via the cookie settings link in the footer.</li>
          </ul>
          <p>For guidance on managing cookies in popular browsers, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Third-Party Cookies</h2>
          <p>Some cookies on our platform are set by third-party services we use, including:</p>
          <ul>
            <li><strong>Stripe</strong> – Payment processing and fraud prevention</li>
            <li><strong>Google Analytics</strong> – Usage analytics</li>
            <li><strong>Google Maps</strong> – Location and mapping features</li>
          </ul>
          <p>These third parties have their own privacy and cookie policies which govern their use of data. We recommend reviewing their policies directly.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Contact</h2>
          <p>If you have any questions about our use of cookies, please contact:</p>
          <p>
            Randevu.co Ltd<br />
            Email: privacy@randevu.co
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
