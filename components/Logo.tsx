import Link from 'next/link';
import styles from './Logo.module.css';

export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <Link href="/" className={styles.logo} style={{ fontSize: size }}>
      <span className={styles.word}>Randevu</span>
      <span className={styles.dot}>.</span>
    </Link>
  );
}
