import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import VenueCard from '@/components/VenueCard';
import { allVenues, categories } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Tüm İşletmeler – Randevu.',
  description: 'Randevu. platformundaki tüm güzellik salonu, spa, berber ve wellness merkezlerini keşfedin.',
};

export default function ListelePage() {
  return (
    <>
      <Nav />
      <main>
        <section className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>Tüm İşletmeler</h1>
            <p className={styles.subtitle}>
              {allVenues.length} işletme listelendi
            </p>
          </div>
        </section>

        <section className={styles.filters}>
          <div className={styles.container}>
            <div className={styles.filterRow}>
              {['Tümü', ...categories.map((c) => c.name)].map((cat) => (
                <button key={cat} className={styles.filterBtn}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.listSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {allVenues.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2024 Randevu. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
