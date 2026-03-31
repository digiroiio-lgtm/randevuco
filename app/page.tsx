import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import VenueCard from '@/components/VenueCard';
import CategoryCard from '@/components/CategoryCard';
import ReviewCard from '@/components/ReviewCard';
import BookingCounter from '@/components/BookingCounter';
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
              Güzellik &amp; wellness<br />randevusu al
            </h1>
            <p className={styles.heroSub}>
              Çevrenizdeki en iyi kuaförler, spalar ve güzellik salonlarını keşfedin.
            </p>
            <div className={styles.searchBar}>
              <Link href="/listele" className={styles.searchSegment}>
                <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
                <span className={styles.searchLabel}>Tüm hizmetler</span>
              </Link>
              <div className={styles.searchDivider} aria-hidden="true" />
              <Link href="/listele" className={styles.searchSegment}>
                <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span className={styles.searchLabel}>Mevcut konum</span>
              </Link>
              <div className={styles.searchDivider} aria-hidden="true" />
              <Link href="/listele" className={styles.searchSegment}>
                <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                </svg>
                <span className={styles.searchLabel}>Her zaman</span>
              </Link>
              <Link href="/listele" className={styles.searchBtn} aria-label="Ara">
                Ara
              </Link>
            </div>
            <BookingCounter />
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
