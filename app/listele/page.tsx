import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { allVenues, venueDetails } from '@/lib/data';
import SearchResultsClient from './SearchResultsClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'İşletmeler – Randevu.',
  description: 'Randevu. platformundaki tüm güzellik salonu, spa, berber ve wellness merkezlerini keşfedin.',
};

export default function ListelePage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <SearchResultsClient venues={allVenues} details={venueDetails} />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
