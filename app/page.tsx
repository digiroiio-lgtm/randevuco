import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import VenueCard from '@/components/VenueCard';
import CategoryCard from '@/components/CategoryCard';
import ReviewCard from '@/components/ReviewCard';
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
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Hizmet, işletme veya konum ara…"
                aria-label="Arama"
                readOnly
              />
              <Link href="/listele" className={styles.searchBtn}>
                Ara
              </Link>
            </div>
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
