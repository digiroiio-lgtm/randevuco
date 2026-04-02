import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import LegalFooter from '@/app/legal/LegalFooter';
import SSSAkordeon from './SSSAkordeon';
import styles from '@/app/help/help.module.css';
import { yardimKategorileri, sssItems } from '@/lib/yardim-data';
import { SITE_URL } from '@/lib/seo-data';

export const metadata: Metadata = {
  title: 'Yardım Merkezi – Randevu.co',
  description: 'Randevu.co Yardım Merkezi. Sık sorulan sorular, destek kategorileri ve destek talebi oluşturma.',
  alternates: { canonical: `${SITE_URL}/yardim` },
};

export default function YardimPage() {
  return (
    <div className={styles.page}>
      <Nav />

      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Size nasıl yardımcı olabiliriz?</h1>
        <p className={styles.heroSub}>Yardım makalelerimizi arayın veya aşağıdan kategori seçin.</p>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="search" placeholder="Yardım makalesi ara…" readOnly aria-label="Yardım makalesi ara" />
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.breadcrumb}><Link href="/">Anasayfa</Link> / Yardım Merkezi</p>

        {/* Kategori Kartları */}
        <h2 className={styles.sectionTitle}>Kategoriye Göre Gözat</h2>
        <div className={styles.categoryGrid}>
          {yardimKategorileri.map((kat) => (
            <Link key={kat.slug} href={`/yardim/${kat.slug}`} className={styles.categoryCard}>
              <span className={styles.categoryIcon}>{kat.icon}</span>
              <span className={styles.categoryLabel}>{kat.label}</span>
            </Link>
          ))}
        </div>

        {/* SSS */}
        <h2 className={styles.sectionTitle}>Sık Sorulan Sorular</h2>
        <SSSAkordeon items={sssItems.slice(0, 5)} />

        <p style={{ textAlign: 'center', marginBottom: '56px' }}>
          <Link href="/yardim/sss" style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>
            Tüm SSS&apos;leri görüntüle →
          </Link>
        </p>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h2>Hâlâ yardıma mı ihtiyacınız var?</h2>
          <p>Destek ekibimiz genellikle 24 saat içinde yanıt verir.</p>
          <Link href="/yardim/destek" className={styles.ctaBtn}>Destek Talebi Oluştur</Link>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
