import Link from 'next/link';
import styles from '../legal/legal.module.css';

export default function LegalFooter() {
  return (
    <footer className={styles.footer}>
      <p>
        <strong>Randevu.co Ltd</strong><br />
        Company Number: 14876900<br />
        Registered Office: 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
      </p>
      <nav className={styles.footerLinks}>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cookies">Cookie Policy</Link>
        <Link href="/refund-policy">Refund Policy</Link>
        <Link href="/business-terms">Business Terms</Link>
        <Link href="/acceptable-use">Acceptable Use</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
