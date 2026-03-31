import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import VenueCard from '@/components/VenueCard';
import CategoryCard from '@/components/CategoryCard';
import ReviewCard from '@/components/ReviewCard';
import BookingCounter from '@/components/BookingCounter';
import SearchBar from '@/components/SearchBar';
import { venues, categories, reviews } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Randevu. – Yerel bakım hizmetlerini rezerve et',
  description: "Türkiye'nin güzellik ve wellness rezervasyon platformu.",
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Yerel bakım hizmetlerini<br />rezerve et
            </h1>
            <p className={styles.heroSub}>
              Dünya genelinde milyonlarca kişinin güvendiği en iyi salonları, kuaförleri, medspaları, wellness stüdyolarını ve güzellik uzmanlarını keşfedin.
            </p>
            <SearchBar />
            <BookingCounter />
            <Link href="/uygulama" className={styles.getAppBtn}>
              Uygulamayı İndir
              <svg className={styles.getAppIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <line x1="14" y1="14" x2="14" y2="14" strokeWidth="3" strokeLinecap="round" />
                <line x1="18" y1="14" x2="21" y2="14" />
                <line x1="14" y1="18" x2="14" y2="21" />
                <line x1="18" y1="18" x2="21" y2="21" />
                <line x1="18" y1="21" x2="21" y2="18" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Kategoriler</h2>
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <CategoryCard key={cat.name} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.rowHeader}>
              <h2 className={styles.sectionTitle}>Öne Çıkanlar</h2>
              <Link href="/listele" className={styles.seeAll}>Tümünü Gör</Link>
            </div>
            <div className={styles.scrollRow}>
              {venues.recommended.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </div>
        </section>

        {/* New Venues */}
        <section className={`${styles.section} ${styles.pinkSection}`}>
          <div className={styles.container}>
            <div className={styles.rowHeader}>
              <h2 className={styles.sectionTitle}>Yeni Açılanlar</h2>
              <Link href="/listele" className={styles.seeAll}>Tümünü Gör</Link>
            </div>
            <div className={styles.scrollRow}>
              {venues.newVenues.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.rowHeader}>
              <h2 className={styles.sectionTitle}>Trend Olanlar</h2>
              <Link href="/listele" className={styles.seeAll}>Tümünü Gör</Link>
            </div>
            <div className={styles.scrollRow}>
              {venues.trending.map((v) => (
                <VenueCard key={v.slug} venue={v} />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className={`${styles.section} ${styles.graySection}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Müşteri Yorumları</h2>
            <div className={styles.scrollRow}>
              {reviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA for Business */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>İşletmenizi büyütün</h2>
              <p className={styles.ctaText}>
                Randevu. platformuna katılın, yeni müşterilere ulaşın ve rezervasyonlarınızı kolayca yönetin.
              </p>
              <Link href="/for-business" className={styles.ctaBtn}>
                Ücretsiz Başlayın
              </Link>
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
